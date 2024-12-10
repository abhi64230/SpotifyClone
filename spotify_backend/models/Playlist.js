
const mongoose = require("mongoose");
//How to create a model
// step 1 : require mongoose
// step 2 : create a schema
// step 3 : create a model

const Playlist = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    thumbnail :{
        type:String,
        required:true,
    },
     owner:{
        type:mongoose.Types.ObjectId,
        ref:"User",
     },
    //  1. Playlist mein songs kaunse hain
    // 2. Playlist mein collaborators
    songs:[
        {
        type:mongoose.Types.ObjectId,
        ref:"song",
     },
    ],
    collaborators:[{
        type:mongoose.Types.ObjectId,
        ref:"user"

    }],

});
const PlaylistModel = mongoose.model("Playlist",Playlist);
module.exports = PlaylistModel;