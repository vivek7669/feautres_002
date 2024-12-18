const {Router} = require("express");
const authChecker = require("../middleware/authChecker");
const { signup } = require("../controller/usercontroller");

const userRoute = Router();

userRoute.post("",signup);

module.exports = userRoute