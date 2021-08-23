import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PostCommentReplyDocument = PostCommentReply & Document;

@Schema()
export class PostCommentReply {    
    @Prop()
    commentedBy: String

    @Prop()
    commentId: String

    @Prop()
    post: String
    
    @Prop()
    commentedAt: Date

    @Prop()
    comment: String

    @Prop()
    numberOfLikes: Number
    
}

export const PostCommentReplySchema = SchemaFactory.createForClass(PostCommentReply);