import { HttpException, HttpStatus } from "@nestjs/common";

export class PostCommentReplyNotFoundException extends HttpException{
    constructor(message: String){
        super({
            status: HttpStatus.NOT_FOUND,
            error: message
        },HttpStatus.NOT_FOUND)
    }
}