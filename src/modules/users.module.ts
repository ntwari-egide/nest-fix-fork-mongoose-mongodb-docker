import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from 'src/controllers/users.controller';
import { UserSchema,User } from 'src/models/user.model';
import { userProviders } from 'src/providers/user.provider';
import { UsersService } from 'src/services/users.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    ...userProviders
  ],
})
export class UsersModule {}