import { Delete } from '@nestjs/common';
import { Get, Param, Post, Put } from '@nestjs/common';
import { Body, Controller } from '@nestjs/common';
import CreatePostDTO from 'src/dtos/createpost.dto';
import { AllPostDetails } from 'src/interface/get-all-post-details.dto';
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

    @Get("/:id")
    async get(@Param("id") id:string): Promise<PostModel>{

        return await this.postService.getById(id);

    }

    @Put("/:id")
    async put(@Param("id") id :String,@Body() updatePost:CreatePostDTO): Promise<PostModel>{

        return await this.postService.update(id,updatePost);

    }

    @Delete("/:id")

    async delete(@Param("id") id): Promise<PostModel>{

        return await this.postService.delete(id);

    }

    @Get("/:id/details")
    async getPostDetails(@Param("id") id: String): Promise<AllPostDetails>{

        return await this.postService.getPostDetails(id)
    }

}
