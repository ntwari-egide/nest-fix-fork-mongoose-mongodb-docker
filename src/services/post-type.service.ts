import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import CreatePostTypeDTO from 'src/dtos/create-post-type.dto';
import { UserNotFoundException } from 'src/exceptions/UserNotFoundException';
import PostTypeModel from 'src/interface/post-type.interface';
import UserModel from 'src/interface/user.interface';

@Injectable()
export class PostTypeService {

    constructor(@Inject('POST-TYPE') private readonly postTypeModel: Model<PostTypeModel>){}

    async addNewPostType(postTypeToCreate : CreatePostTypeDTO): Promise<PostTypeModel>{


        const newPostType = new this.postTypeModel(postTypeToCreate)

        return newPostType.save()

    }

    async findAll(): Promise<PostTypeModel[]>{
        return this.postTypeModel.find().exec()
    }

    async findById(id: String) : Promise<PostTypeModel> {
        let post_type : any

        try {
            post_type  = this.postTypeModel.findById(id).exec()
        } catch (error) {
            throw new NotFoundException("Post type not found with id: "+id)
            
        }

        return post_type
    }

    async updateUser(id: String,postTypeUpdated: CreatePostTypeDTO){
        return this.postTypeModel.findByIdAndUpdate(id,postTypeUpdated).exec()
    }

    async deleteById(id: String){
        return this.postTypeModel.findByIdAndRemove(id).exec()
    }

    async getSignedOnSameDate (date: Date): Promise<UserModel[]>{

        let postTypes : any

        try {
            postTypes = this.postTypeModel.find({signedUpAt: date}).exec()
        } catch (error) {
            throw new UserNotFoundException("no post type added on this date: "+date)
        }

        return postTypes
    }
}
