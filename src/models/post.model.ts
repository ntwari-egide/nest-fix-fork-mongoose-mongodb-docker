import { MongooseModule, Prop } from "@nestjs/mongoose"
import { Number } from "mongoose"
import { PostComment, PostCommentSchema } from "src/utils/global-models.models";
import { User, UserSchema } from "./user.model";
const mongoose = require("mongoose");

export const PostSchema = mongoose.Schema({

    postedBy: String,
    
    postedAt: Date,

    postTitle: String,

    postDescription: String,

    numberOfLikes: Number,

    numberOfForks: Number,

    numberOfViews: Number,

    createdAt: Date,

    updatedAt: Date,

    coverPic: "",

    postComments: [PostCommentSchema]

})


export class Post{
    postedBy: String
    
    postedAt: Date

    postTitle: String

    postDescription: String

    numberOfLikes: Number

    numberOfForks: Number

    numberOfViews: Number

    createdAt: Date

    updatedAt: Date

    coverPic: ""

    postComments: [PostComment]
}