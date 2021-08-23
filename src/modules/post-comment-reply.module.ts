import { Module } from '@nestjs/common';
import { postCommentReplyProviders } from 'src/providers/post-comment-reply.provider';
import { PostCommentReplyService } from 'src/services/post-comment-reply.service';
import { PostCommentReplyController } from '../controllers/post-comment-reply.controller';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
    controllers: [PostCommentReplyController],
    providers: [
        PostCommentReplyService,
        ...postCommentReplyProviders
    ],
})


export class PostCommentReplyModule {}