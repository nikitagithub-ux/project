const mongoose = require("mongoose");
const User = require("./model/User");
mongoose.set("strictQuery",true);
mongoose.connect("");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected"))
db.on("error",()=>console.log("Not Connected"))
const addUser = async() =>{
    const user = new User({
    "email":"kevin.d@gmail.com",
    "first_name":"Kevin",
    "last_name":"Alappat",
    "password":"9324",
    "is_admin":false
    })
    const result = await user.save()
}
addUser()