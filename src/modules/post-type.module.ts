import { Module } from '@nestjs/common';
import { PostTypeController } from 'src/controllers/post-type.controller';
import { postTypeProviders } from 'src/providers/post-type.provider';
import { PostTypeService } from 'src/services/post-type.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [PostTypeController],
    providers: [
        PostTypeService,
        ...postTypeProviders
    ],
})
export class PostTypeModule {}
