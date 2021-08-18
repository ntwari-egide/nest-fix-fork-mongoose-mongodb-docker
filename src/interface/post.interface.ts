import { User } from "src/models/user.model";

export default interface PostModel extends Document{

    postedBy: String
    
    postedAt: Date

    postTitle: String

    postDescription: String

    numberOfLikes: Number

    numberOfForks: Number

    numberOfViews: Number

    createdAt: Date

    updatedAt: Date

    coverPic: ""

}