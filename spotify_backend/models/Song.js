const mongoose = require("mongoose");
//How to create a model
// step 1 : require mongoose
// step 2 : create a schema
// step 3 : create a model

const Song = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    thumbnail :{
        type:String,
        required:true,
    },
     track:{
        type:String,
        required:true,
     },
     artist:{
        type:mongoose.Types.ObjectId,
        ref:"User",
     }


});
const SongModel = mongoose.model("Song",Song);
module.exports = SongModel;