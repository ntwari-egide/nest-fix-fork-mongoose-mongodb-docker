import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    signedUpAt: {
        type: Date,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    updatedPasswordAt: {
        type: Date,
        required: false
    }

})


export interface User extends mongoose.Document{

    id: String
    
    fullName: String

    secondName: String

    username: String

    dateOfBirth: String

    signedUpAt: Date

    password: String

    updatedPasswordAt: Date

}