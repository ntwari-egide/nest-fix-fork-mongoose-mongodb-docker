import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users.module';

@Module({
  imports: [
    UsersModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}