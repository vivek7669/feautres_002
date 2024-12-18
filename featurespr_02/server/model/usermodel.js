const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : String ,
    email : String ,
    password : String ,
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "comment"
    }],
    rates : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "rate"
    }],
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "like"
    }]
},{timestamps : true});

const user =  mongoose.model("user",userSchema);
module.exports = user;