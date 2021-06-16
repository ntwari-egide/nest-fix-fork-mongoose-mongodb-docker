import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UsersModule } from './modules/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';

@Module({
  imports: [
    UsersModule
    
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
