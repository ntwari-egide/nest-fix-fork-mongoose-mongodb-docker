import { Body, Get, Post, Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreatePostCommentDTO } from 'src/dtos/create-post-comment.dto';
import { PostCommentModel } from 'src/interface/post-comment.interface';
import { PostCommentService } from 'src/services/post-comment.service';

@Controller('/api/v1/post-comments')
export class PostCommentController {

    constructor(private readonly postCommentService: PostCommentService) {}

    @Get()

    async getAll(): Promise<PostCommentModel[]>{

        return await this.postCommentService.getAll()

    }

    @Get("/:id")
    async get(@Param("id") id: String): Promise<PostCommentModel>{

        return await this.postCommentService.getById(id)
    }


    @Post()
    async save(@Body() newComment: CreatePostCommentDTO): Promise<PostCommentModel>{

        return await this.postCommentService.postComment(newComment)
    }

    @Put("/:id")
    async update(@Param("id") id: String,@Body() updatedComment: CreatePostCommentDTO): Promise<PostCommentModel>{

        return await this.postCommentService.update(id,updatedComment)

    }


    @Delete("/:id")
    async delete(@Param("id") id: String): Promise<PostCommentModel>{

        return await this.postCommentService.delete(id)

    }

}
