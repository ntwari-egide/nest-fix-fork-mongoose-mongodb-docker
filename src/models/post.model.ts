import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PostDocument = Post & Document;

@Schema()
export class Post {    
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
    coverPic: String
}

export const PostSchema = SchemaFactory.createForClass(Post);