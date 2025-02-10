import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username :{
        type: String,
        required: true,
        unqiue: true
    },
    email:{
        type:String,
        required:true,
        unqiue: true
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        default:"C:\Users\alexa\Mern_project\Blog_App\client\public\cool-profile-picture.jpg",
    },
},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;