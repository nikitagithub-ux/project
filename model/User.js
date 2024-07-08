const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    "email":{type:String},
    "first_name":{type:String},
    "last_name":{type:String},
    "password":{type:String},
    "is_admin":{type:Boolean}
},{
    collection : ""
})

module.exports=mongoose.model("User",userSchema);