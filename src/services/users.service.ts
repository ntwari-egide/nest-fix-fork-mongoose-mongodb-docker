import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateUserDTO from 'src/dtos/createuser.dto';
import { User } from 'src/models/user.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel('user') private readonly userModel: Model<User>){}

    async signupUser(userToCreate: CreateUserDTO){

        // const newUser = new this.userModel({
                
        // })


    }

}
