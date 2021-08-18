import { Inject, Injectable } from '@nestjs/common';
import { Model} from 'mongoose';
import CreatePostDTO from 'src/dtos/createpost.dto';
import UserModel from 'src/interface/user.interface';
import { Post } from 'src/models/post.model';
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

}
