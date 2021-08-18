
export default interface PostTypeModel extends Document{
    postedAt: Date

    postTypeTitle: String

    postTypeDescription: String

    createdAt: Date

    updatedAt: Date

    coverPic: String

}