const user = require("../model/usermodel");

const signup = async (req,res) => {
    console.log(req.body);
    let isexist = await user.findOne({email : req.body.email});
    if(isexist) return res.send({"message" : "user Alrady Is Exists !"});
    let createUsr = await user.create(req.body);
    if(createUsr) return res.send({"message" : "User Is Created"});
    return res.send({"message" : "User Is Created Time Occured Error"});
}
const login = async (req,res) => {

}

module.exports = {signup}