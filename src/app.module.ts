import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      //Replace this line with the one Cluster > Connect > Connect your Application
      'mongodb+srv://root:<password>@cluster0.ulkpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        connectionName: 'users'
      }
      ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}