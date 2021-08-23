import { Document } from "mongoose";

export default interface PostCommentReplyModel extends Document{

    commentedBy: String

    commentId: String

    post: String
  
    commentedAt: Date

    comment: String

    numberOfLikes: Number
    
}