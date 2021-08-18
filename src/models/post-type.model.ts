import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostTypeDocument = PostType & Document;

@Schema()
export class PostType {    
    @Prop()
    postedAt: Date

    @Prop()
    postTypeTitle: String

    @Prop()
    postTypeDescription: String

    @Prop()
    createdAt: Date

    @Prop()
    updatedAt: Date

    @Prop()
    coverPic: String
}

export const PostTypeSchema = SchemaFactory.createForClass(PostType);