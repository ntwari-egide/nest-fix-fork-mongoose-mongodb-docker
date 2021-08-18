import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PostTypeDocument = PostType & Document;

@Schema()
export class PostType {    
    @Prop()
    postedBy: String
    
    @Prop()
    postedAt: Date

    @Prop()
    postTitle: String

    @Prop()
    postDescription: String

    @Prop()
    numberOfLikes: Number

    @Prop()
    numberOfForks: Number

    @Prop()
    numberOfViews: Number

    @Prop()
    createdAt: Date

    @Prop()
    updatedAt: Date

    @Prop()
    coverPic: ""
}

export const PostTypeSchema = SchemaFactory.createForClass(PostType);