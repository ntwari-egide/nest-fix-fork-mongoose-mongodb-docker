export default interface UserModel extends Document{
    id: String

    fullName: String

    secondName: String

    username: String

    dateOfBirth: String
    
    signedUpAt: Date
    
    password: String

    updatedPasswordAt: Date
}