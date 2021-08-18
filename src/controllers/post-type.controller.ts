import { Post, Put } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import CreatePostTypeDTO from 'src/dtos/create-post-type.dto';
import PostTypeModel from 'src/interface/post-type.interface';
import { PostTypeService } from 'src/services/post-type.service';

@Controller('/api/v1/post-types')
export class PostTypeController {

    constructor(private readonly postTypeService: PostTypeService) {}

    @Post()
    async createNewPostType(@Body() newPostType: CreatePostTypeDTO){
        console.log("post: ",newPostType);
        

        return await this.postTypeService.addNewPostType(newPostType);
    }

    @Get()
    async getAll():Promise<PostTypeModel[]>{
        return await this.postTypeService.findAll()
    }
    @Get("/:id")
    async get(@Param("id") id:String): Promise<PostTypeModel>{
        return await this.postTypeService.findById(id)
    }

    @Put("/:id")
    async update(@Param("id") id: String,@Body() postTypeUpdated: CreatePostTypeDTO):Promise<PostTypeModel>{
        return await this.postTypeService.updateUser(id,postTypeUpdated);
    }

    @Delete("/:id")
    async delete(@Param("id") id:String): Promise<PostTypeModel>{
        return await this.postTypeService.deleteById(id)
    }

}
