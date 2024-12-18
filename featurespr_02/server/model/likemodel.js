const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    like_user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    like_comment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "comment"
    }
},{timestamps : true});

const like =  mongoose.model("like",likeSchema);
module.exports = like;