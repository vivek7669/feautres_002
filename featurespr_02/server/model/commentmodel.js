const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text : String ,
    com_user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    com_rates : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "rate"
    }],
    com_likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "like"
    }]
},{timestamps : true});

const comment =  mongoose.model("user",commentSchema);
module.exports = comment;