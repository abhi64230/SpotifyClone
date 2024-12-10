const mongoose = require("mongoose");
//How to create a model
// step 1 : require mongoose
// step 2 : create a schema
// step 3 : create a model

const User = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:false,
    },
    password:{
           type:String,
           required:true,
           private:true
    },
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    likedSongs:{
        //we will change this to array later
        type:String,
        default:"",
    },
    likedPlaylists:{
        //we will change this to array later
        type:String,
        default:"",
    },
    subscribedArtists:{
        //we will change this to array later
        type:String,
        default:"",
    },


});
const UserModel = mongoose.model("User",User);
module.exports = UserModel;