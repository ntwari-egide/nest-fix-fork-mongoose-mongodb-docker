import { Document } from "mongoose";
import { User } from "src/models/user.model";

export interface PostCommentModel extends Document{
    commentedBy: User
    commentedAt: Date
    commentContent: String
    upvotes: [User]
}