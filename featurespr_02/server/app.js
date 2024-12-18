require("dotenv").config();
const dbConnector = require("./config/db");
const express = require("express");
const userRoute = require("./router/userrouter");

const app = express();
const port = process.env.PORT || 3040

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("",(req,res)=>{
    res.send({"message" : "server Is running"})
})
app.use("/user",userRoute)

app.listen(port , ()=>{
    console.log(`port is running on http://localhost:${port}/`);
    dbConnector();
});
