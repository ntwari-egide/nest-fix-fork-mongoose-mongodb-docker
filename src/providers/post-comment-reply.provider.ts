import { Connection } from "mongoose";
import { PostCommentReplySchema } from "src/models/post-comment-reply.model";

export const postCommentReplyProviders = [
    {
        provide: 'POST-COMMENT-REPLY',
        useFactory: (connection: Connection) => connection.model('Post-comment-reply', PostCommentReplySchema),
        inject: ['DATABASE_CONNECTION'],
    }
]