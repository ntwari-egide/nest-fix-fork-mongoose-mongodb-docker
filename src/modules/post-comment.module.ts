import { Module } from '@nestjs/common';
import { PostCommentController } from 'src/controllers/post-comment.controller';
import { postCommentProviders } from 'src/providers/post-comment.provider';
import { PostCommentService } from 'src/services/post-comment.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [PostCommentController],
    providers: [
        PostCommentService,
        ...postCommentProviders
    ],
})
export class PostCommentModule {}
