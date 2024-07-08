const mongoose = require("mongoose");
const express = require("express");
const app=express();
const clientRoute = require("./controller/clientRoute")
mongoose.set("strictQuery",true);
mongoose.connect("");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected"))
db.on("error",()=>console.log("Not Connected"))
app.use("/clientRoute",clientRoute);
app.listen(4000,()=>
    {console.log("Server is connected to port 4000")
}); 