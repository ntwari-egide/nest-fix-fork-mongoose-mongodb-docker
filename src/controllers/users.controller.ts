import { Delete } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreateUserDTO from 'src/dtos/createuser.dto';
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

    @Get("/:id")
    async getById(@Param("id") id: String): Promise<UserModel>{
        return this.usersService.findByUserId(id)
    }

    @Put("/:id")
    async updateById(@Param("id") id: String,@Body() updateUser: CreateUserDTO){
        return this.usersService.updateUser(id,updateUser)
    }

    @Delete("/:id")
    async deleteById(@Param("id") id: String){
        return this.usersService.deleteById(id)
    }
}
