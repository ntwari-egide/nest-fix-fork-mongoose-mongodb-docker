import { Connection } from "mongoose";
import { UserSchema } from "src/models/user.model";

export const postCommentProviders = [
    {
        provide: 'POST-COMMENT',
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]