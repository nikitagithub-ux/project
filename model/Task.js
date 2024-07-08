const mongoose =require("mongoose");
const taskSchema = new mongoose.Schema({
    "user_id":{type:Schema.Types.ObjectId, ref:"User"},
    "task_title":{type:String},
    "task_description":{type:String},
    "task_due_date":{type:Date}
},{
    collection:""
})

module.exports = mongoose.model("Task",taskSchema);