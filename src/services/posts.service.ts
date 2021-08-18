import { Inject, Injectable } from '@nestjs/common';
import { Model} from 'mongoose';
import CreatePostDTO from 'src/dtos/createpost.dto';
import { PostNotFoundException } from 'src/exceptions/PostNotFoundException';
import { PostModel } from 'src/utils/global-models.models';

@Injectable()
export class PostsService {

    constructor(
        @Inject("POST" ) private readonly postModel: Model<PostModel>
    ){}

    async getAllPosts(): Promise<PostModel[]> {
        return this.postModel.find().exec()
    }

    async createPost(posttocreate: CreatePostDTO): Promise<PostModel> {

        const newPost = new this.postModel(posttocreate)

        return newPost.save()

    }

    async getById(id: String): Promise<PostModel>{

        let post

        try {
            post  = this.postModel.findById(id).exec()
        } catch (error) {
            throw new PostNotFoundException("post not found with id: "+id)
            
        }

        return post;

    }

    async update(id: String,updatedPost: CreatePostDTO): Promise<PostModel>{

        let post

        try {
            post  = this.postModel.findById(id).exec()
        } catch (error) {
            throw new PostNotFoundException("Post not found with id: "+id)
            
        }

        return this.postModel.findByIdAndUpdate(id,updatedPost).exec()

    }


    async delete(id: String):Promise<PostModel>{

        let post

        try {
            post  = this.postModel.findById(id).exec()
        } catch (error) {
            throw new PostNotFoundException("Post not found with id: "+id)
            
        }


        return this.postModel.findByIdAndRemove(id).exec()

    }

}
