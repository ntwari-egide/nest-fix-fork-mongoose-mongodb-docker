import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users.module';
import { PostsModule } from './modules/posts.module';
import { PostTypeModule } from './modules/post-type.module';
import { PostCommentModule } from './modules/post-comment.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    PostTypeModule,
    PostCommentModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}