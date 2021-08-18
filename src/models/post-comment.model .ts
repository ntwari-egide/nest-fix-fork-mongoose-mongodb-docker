import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PostCommentDocument = PostComment & Document;

@Schema()
export class PostComment {    
    @Prop()
    commentedBy: String

    @Prop()
    post: String
    
    @Prop()
    commentedAt: Date

    @Prop()
    comment: String

    @Prop()
    numberOfLikes: Number
    
}

export const PostCommentSchema = SchemaFactory.createForClass(PostComment);