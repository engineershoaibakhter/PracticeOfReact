const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const {dbConnect}=require('./dbConnect')
const {addTodo, getTodo, updateTodo, deleteTodo}=require('./route/todoRoute')

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json());

dbConnect();

app.post('/add-todo',addTodo)
app.get('/get-todo',getTodo);
app.put('/update-todo/:id', updateTodo);
app.delete('/delete-todo/:id',deleteTodo);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}
)
