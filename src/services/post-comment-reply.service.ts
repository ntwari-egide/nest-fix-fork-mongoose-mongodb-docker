import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreatePostCommentReplyDTO } from 'src/dtos/create-post-comment-reply.dto';
import { PostCommentReplyNotFoundException } from 'src/exceptions/PostCommentReplyNotFoundException';
import PostCommentReplyModel from 'src/interface/post-comment-reply.interface';

@Injectable()
export class PostCommentReplyService {

    constructor(@Inject('POST-COMMENT-REPLY') private readonly postCommentReplyModel: Model<PostCommentReplyModel>){}

    async allReplies(): Promise<PostCommentReplyModel[]>{
        return this.postCommentReplyModel.find().exec()
    }

    async replybyid(id: String): Promise<PostCommentReplyModel>{

        let replyFound = null

        try {
            replyFound = this.postCommentReplyModel.findById(id).exec()
        } catch (error) {
            throw new PostCommentReplyNotFoundException(`Comment reply with id ${id} is not found`);   
        }

        return replyFound
    }

    async saveReply(newreply: CreatePostCommentReplyDTO): Promise<PostCommentReplyModel>{

        const reply = new this.postCommentReplyModel(newreply)

        return reply.save()
    }

    async updateReply(updatedReply: CreatePostCommentReplyDTO,id: String): Promise<PostCommentReplyModel>{

        let replyFound = null

        try {
            replyFound = this.postCommentReplyModel.findById(id).exec()
        } catch (error) {
            throw new PostCommentReplyNotFoundException(`Comment reply with id ${id} is not found`);   
        }

        return this.postCommentReplyModel.findByIdAndUpdate(id,updatedReply).exec()

    }

    async delete(id: String){

        let replyFound = null

        try {
            replyFound = this.postCommentReplyModel.findById(id).exec()
        } catch (error) {
            throw new PostCommentReplyNotFoundException(`Comment reply with id ${id} is not found`);   
        }

        return this.postCommentReplyModel.findByIdAndRemove(id).exec()

    }

}
