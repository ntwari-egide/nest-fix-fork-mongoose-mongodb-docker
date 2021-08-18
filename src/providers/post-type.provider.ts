import { Connection } from "mongoose";
import { PostTypeSchema } from "src/models/post-type.model";

export const postTypeProviders = [
    {
        provide: 'POST-TYPE',
        useFactory: (connection: Connection) => connection.model('Post-types', PostTypeSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]