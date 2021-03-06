import { Document } from "mongoose";
import { User } from "src/models/user.model";

export interface PostCommentModel extends Document{
    commentedBy: String

    post: String
    
    commentedAt: Date

    comment: String

    numberOfLikes: Number
}