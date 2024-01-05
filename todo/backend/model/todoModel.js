const mongoose=require('mongoose');

const todoSchema=mongoose.Schema({
    task:String,
    desc:String,
    status:String,
    deadline:String
})

const Todo=mongoose.model("TodoModel",todoSchema)

// export default Todo;
module.exports=Todo;