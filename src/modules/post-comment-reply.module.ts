import { Module } from '@nestjs/common';
import { PostCommentReplyController } from '../controllers/post-comment-reply.controller';

@Module({
  controllers: [PostCommentReplyController]
})
export class PostCommentReplyModule {}
