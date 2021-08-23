import { Body, Delete, Post, Put } from '@nestjs/common';
import { Controller, Get, Param } from '@nestjs/common';
import { CreatePostCommentReplyDTO } from 'src/dtos/create-post-comment-reply.dto';
import PostCommentReplyModel from 'src/interface/post-comment-reply.interface';
import { PostCommentReplyService } from 'src/services/post-comment-reply.service';

@Controller('/api/v1/post-comment-reply')
export class PostCommentReplyController {

    constructor(private readonly postCommentReplyService: PostCommentReplyService){}

    @Get()
    async getALL(): Promise<PostCommentReplyModel[]>{
        return this.postCommentReplyService.allReplies();
    }

    @Get('/{id}')
    async get(@Param("id") id: String): Promise<PostCommentReplyModel>{
        return this.postCommentReplyService.replybyid(id)
    }

    @Post()

    async post(@Body() newreply: CreatePostCommentReplyDTO): Promise<PostCommentReplyModel> {

        return this.postCommentReplyService.saveReply(newreply);

    }

    @Put('/{id}')
    async update(@Body() newreply: CreatePostCommentReplyDTO,@Param('id') id: String ){

        return this.postCommentReplyService.updateReply(newreply,id)

    }

    @Delete('/{id}')
    async delete(@Param('id') id: String ){

        return this.postCommentReplyService.delete(id)

    }
}
