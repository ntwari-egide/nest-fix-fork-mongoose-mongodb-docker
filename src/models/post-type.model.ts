import { MongooseModule, Prop } from "@nestjs/mongoose"
import { Number } from "mongoose"
import { PostComment, PostCommentSchema } from "src/utils/global-models.models";
import { User, UserSchema } from "./user.model";
const mongoose = require("mongoose");

export const PostTypeSchema = mongoose.Schema({
    
    postedAt: Date,

    postTypeTitle: String,

    postTypeDescription: String,

    createdAt: Date,

    updatedAt: Date,

    coverPic: String

})


export class PostType{
    postedAt: Date

    postTypeTitle: String

    postTypeDescription: String

    createdAt: Date

    updatedAt: Date

    coverPic: String

}