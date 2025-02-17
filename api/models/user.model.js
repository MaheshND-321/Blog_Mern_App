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
        default:"https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small_2x/user-icon-on-transparent-background-free-png.png",
    },
},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;