import { Get, Post, Put } from '@nestjs/common';
import { Body, Controller } from '@nestjs/common';
import CreatePostDTO from 'src/dtos/createpost.dto';
import UserModel from 'src/interface/user.interface';
import { PostsService } from 'src/services/posts.service';

@Controller('/api/v1/posts')
export class PostsController {

    // constructor(private readonly postService: PostsService){}

    // @Get()
    // async getAll(){
    //     return 
    // }


    // @Post()
    // async createPost( @Body() createUser:CreatePostDTO): Promise<UserModel[]>{
    //     return this.postService.createPost(createUser);
    // }

}
