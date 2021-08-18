import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreatePostCommentDTO } from 'src/dtos/create-post-comment.dto';
import { PostCommentNotFoundException } from 'src/exceptions/PostCommentNotFoundException';
import { PostCommentModel } from 'src/interface/post-comment.interface';

@Injectable()
export class PostCommentService {

    constructor(@Inject('POST-COMMENT') private readonly postCommentModel: Model<PostCommentModel>){}

    async postComment(postComment: CreatePostCommentDTO):Promise<PostCommentModel> {
        
        const newComment = new this.postCommentModel(postComment);

        return newComment.save()
    }

    async getAll(): Promise<PostCommentModel[]>{
        
        return this.postCommentModel.find().exec()

    }

    async getById(id: String): Promise<PostCommentModel>{

        let comment

        try {
            comment  = this.postCommentModel.findById(id).exec()
        } catch (error) {
            throw new PostCommentNotFoundException("User not found with id: "+id)
            
        }

        return comment;

    }

    async update(id: String,updatedComment: CreatePostCommentDTO): Promise<PostCommentModel>{

        let comment

        try {
            comment  = this.postCommentModel.findById(id).exec()
        } catch (error) {
            throw new PostCommentNotFoundException("User not found with id: "+id)
            
        }

        return this.postCommentModel.findByIdAndUpdate(id,updatedComment).exec()

    }


    async delete(id: String):Promise<PostCommentModel>{

        let comment

        try {
            comment  = this.postCommentModel.findById(id).exec()
        } catch (error) {
            throw new PostCommentNotFoundException("User not found with id: "+id)
            
        }

        return this.postCommentModel.findByIdAndRemove(id).exec()

    }
}
