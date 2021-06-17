import { Body, Controller, Get, Post } from '@nestjs/common';import CreateUserDTO from 'src/dtos/createuser.dto';
import UserModel from 'src/interface/user.interface';
import { UsersService } from 'src/services/users.service';
;

@Controller('/api/v1/users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get()
    async findAll(): Promise<UserModel[]>{
        return this.usersService.findAll()
    }

    @Post()
    async signUp( @Body() createUser:CreateUserDTO){
        this.usersService.signupUser(createUser)
    }
}
