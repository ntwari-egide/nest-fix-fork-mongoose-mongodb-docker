import { Get, Post, Put } from '@nestjs/common';
import { Body, Controller } from '@nestjs/common';
import CreatePostDTO from 'src/dtos/createpost.dto';
import { PostsService } from 'src/services/posts.service';
import { PostModel } from 'src/utils/global-models.models';

@Controller('/api/v1/posts')
export class PostsController {

    constructor(private readonly postService: PostsService){}

    @Get()
    async getAll():Promise<PostModel[]>{
        return await this.postService.getAllPosts()
    }


    @Post()
    async createPost( @Body() createUser:CreatePostDTO): Promise<PostModel>{
        return this.postService.createPost(createUser);
    }

}
