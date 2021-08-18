
export default interface PostTypeModel extends Document{
    postTypeTitle: String

    postTypeDescription: String

    createdAt: Date

    updatedAt: Date

    coverPic: String

}