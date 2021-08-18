import { Connection } from "mongoose";
import { PostCommentSchema } from "src/models/post-comment.model ";
import { UserSchema } from "src/models/user.model";

export const postCommentProviders = [
    {
        provide: 'POST-COMMENT',
        useFactory: (connection: Connection) => connection.model('Post-comment', PostCommentSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]