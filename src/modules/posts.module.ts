import { Module } from '@nestjs/common';
import { PostsController } from 'src/controllers/posts.controller';
import { postProviders } from 'src/providers/post.provider';
import { userProviders } from 'src/providers/user.provider';
import { PostsService } from 'src/services/posts.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [PostsModule,DatabaseModule],
  providers: [
    PostsService,
    ...postProviders,
    ...userProviders
  ],
  controllers: [PostsController],
  
})
export class PostsModule {}
