import { Connection } from "mongoose";
import { UserSchema } from "src/models/user.model";

export const userProvider = [
    {
        privide: 'USER',
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]