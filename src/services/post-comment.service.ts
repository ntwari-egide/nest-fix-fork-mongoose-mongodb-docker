import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PostCommentModel } from 'src/interface/post-comment.interface';

@Injectable()
export class PostCommentService {

    constructor(@Inject('POST-COMMENT') private readonly postCommentModel: Model<PostCommentModel>){}

    

}
