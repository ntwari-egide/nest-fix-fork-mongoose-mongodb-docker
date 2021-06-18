import * as mongoose from 'mongoose'
import { Post } from 'src/models/post.model'
import { User, UserSchema } from 'src/models/user.model'

export type PostModel = Post & Document


export const PostCommentSchema = new mongoose.Schema({
    commentedBy: UserSchema,
    commentedAt: Date,
    commentContent: String,
    upvotes: [UserSchema]
})

export class PostComment{
    commentedBy: User
    commentedAt: Date
    commentContent: String
    upvotes: [User]
}
