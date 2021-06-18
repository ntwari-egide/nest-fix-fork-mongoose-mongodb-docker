import { Connection } from "mongoose";
import { PostSchema } from "src/models/post.model";

export const postProviders = [
    {
        provide: 'POST',
        useFactory: (connection: Connection) => connection.model('Post', PostSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]