import { Inject, Injectable } from '@nestjs/common';
import { Model} from 'mongoose';
import CreatePostDTO from 'src/dtos/createpost.dto';
import UserModel from 'src/interface/user.interface';
import { Post } from 'src/models/post.model';
import { PostModel } from 'src/utils/global-models.models';

@Injectable()
export class PostsService {

    constructor(
        @Inject("POST-TYPE" ) private readonly postModel: Model<PostModel>
    ){}

    

}
