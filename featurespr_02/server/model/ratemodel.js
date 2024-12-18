const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
    rate_user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    rate_comment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "comment"
    }
},{timestamps : true});

const rate =  mongoose.model("rate",rateSchema);
module.exports = rate;