import { Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import CreatePostTypeDTO from 'src/dtos/create-post-type.dto';
import { PostTypeService } from 'src/services/post-type.service';

@Controller('/api/v1/post-types')
export class PostTypeController {

    constructor(private readonly postTypeService: PostTypeService) {}

    @Post()
    async createNewPostType(newPostType: CreatePostTypeDTO){
        return this.postTypeService.addNewPostType(newPostType);
    }

    @Get()
    async getAll(){
        return this.postTypeService.findAll()
    }

}
