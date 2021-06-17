export default interface UserModel extends Document{
    fullName: String

    secondName: String

    username: String

    dateOfBirth: String
    
    signedUpAt: Date
    
    password: String

    updatedPasswordAt: Date
}