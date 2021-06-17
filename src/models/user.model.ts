import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop()
    id: String
    
    @Prop()
    fullName: String

    @Prop()
    secondName: String

    @Prop()
    username: String

    @Prop()
    dateOfBirth: String
    
    @Prop()
    signedUpAt: Date
    
    @Prop()
    password: String

    @Prop()
    updatedPasswordAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User);