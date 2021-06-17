import { Inject, Injectable } from '@nestjs/common';
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

}
