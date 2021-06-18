import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users.module';
import { PostsModule } from './modules/posts.module';
import { PostsController } from './controllers/posts.controller';

@Module({
  imports: [
    UsersModule,
    PostsModule
],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}