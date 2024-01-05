const Todo = require("../model/todoModel");

const addTodo=async (req,res)=>{
    try {
        const {task,desc,status,deadline}=req.body;
    const newTodo=new Todo({task,desc,status,deadline});
    await newTodo.save();
    res.json({'message':"data is uploaded"});
    } catch (error) {
        console.log(error);
    }
    
}

const getTodo=async (req,res)=>{
    try {
        const todos=await Todo.find();
        res.json(todos);
    } catch (error) {
        console.log("The data is not fetched "+ error);
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { task,desc,status,deadline } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id, { task,desc,status,deadline }, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        console.log("Error updating todo: ", error);
        res.status(500).json({ message: "Error updating todo" });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        console.log("Error deleting todo: ", error);
        res.status(500).json({ message: "Error deleting todo" });
    }
}

module.exports={addTodo,getTodo,updateTodo,deleteTodo}