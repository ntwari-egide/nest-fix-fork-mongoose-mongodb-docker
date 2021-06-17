import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateUserDTO from 'src/dtos/createuser.dto';
import UserModel from 'src/interface/user.interface';
import { User, UserDocument } from 'src/models/user.model';

@Injectable()
export class UsersService {

    constructor(@Inject('USER') private readonly userModel: Model<UserModel>){}

    async signupUser(userToCreate : CreateUserDTO): Promise<UserModel>{


        const newUser = new this.userModel(userToCreate)

        return newUser.save()

    }

    async findAll(): Promise<UserModel[]>{
        return this.userModel.find().exec()
    }

    async findByUserId(id: String) : Promise<UserModel> {
        let user : any

        try {
            user  = this.userModel.findById(id).exec()
        } catch (error) {
            throw new NotFoundException("User not found with id: "+id)
            
        }

        return user
    }

    async updateUser(id: String,userUpdated: UserModel){
        return this.userModel.findByIdAndUpdate(id,userUpdated).exec()
    }

    async deleteById(id: String){
        return this.userModel.findByIdAndRemove(id).exec()
    }

    async getSignedOnSameDate (date: Date): Promise<UserModel[]>{

        return this.userModel.find({signedUpAt: date}).exec()
    }
}
