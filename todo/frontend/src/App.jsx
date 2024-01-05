import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [task, setTask] = useState();
  const [desc, setDesc] = useState();
  const [status, setStatus] = useState();
  const [deadline, setDeadline] = useState();
  const [formattedCurrentDate, setFormattedCurrentDate] = useState("");

  const [todos, setTodo] = useState([]);
  const [updatedTask, setUpdatedTask] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get-todo");
        setTodo(response.data);
      } catch (error) {
        console.log("Error Fetching todos: " + error);
      }
    };
    fetchTodos();

    const currentDate = new Date();
    const formattedDate = format(currentDate, "yyyy-MM-dd");
    setFormattedCurrentDate(formattedDate);

  }, [todos]);
  const addTodo = async () => {
    if(task === ""){
      alert("Please provide Title")
    }
    else if(desc === ""){
      alert('Please provide Description')
    }
    else if(status === ""){
      alert('Please provide Status')
    }
    else if(deadline===""){
      alert('Please provide Deadline');
    }
    else{
    
    try {
      await axios.post("http://localhost:5000/add-todo", { task,desc,status,deadline });
      alert("The task is added");
      setTask(""); 
      setDesc("");
      setStatus("");
      setDeadline("");
    } catch (error) {
      alert(
        "The task is not added " +
          error +
          " The error message is " +
          error.message
      );
    }
  }
  };

  const enterEditMode = (id, task,desc,status,deadline) => {
    setEditId(id);
    setTask(task);
    setDesc(desc);
    setStatus(status);
    setDeadline(deadline);
    setEditMode(true);
  };

  const cancelEditMode = () => {
    setEditId(null);
    setTask("");
    setDesc("");
    setStatus("");
    setDeadline("");
    setEditMode(false);
  };

  const updateTodo = async (id) => {
    try {
      await axios.put(`http://localhost:5000/update-todo/${id}`, { task,desc,status,deadline });
      alert("Todo updated successfully");
      cancelEditMode();
    } catch (error) {
      alert("Error updating todo: " + error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-todo/${id}`);
      alert("Todo deleted successfully");
    } catch (error) {
      alert("Error deleting todo: " + error.message);
    }
  };


  return (
    <>
      <h1>Task Management System</h1>
      {editMode ? (
        <>
          <label htmlFor="title">Title</label>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/> <br /><br />
          <label htmlFor="description">Description</label>
        <input type="text" id="description" required value={desc} onChange={(e) => setDesc(e.target.value)} /> <br /><br />
        <label htmlFor="status">Status</label>
        <select name="status" value={status} id="status" required onChange={(e) => setStatus(e.target.value)}>
        <option value="null">-- Select Status --</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select> <br /><br />
        <label htmlFor="deadline">DeadLine</label>
        <input type="date" id="deadline" min={formattedCurrentDate} required value={deadline} onChange={(e) => setDeadline(e.target.value)} /> <br /><br />

          <button onClick={() => updateTodo(editId)}>Update</button>
          <button onClick={cancelEditMode}>Cancel</button>
        </>
      ) : (
        <>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required value={task} onChange={(e) => setTask(e.target.value)}/> <br /><br />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" required value={desc} onChange={(e) => setDesc(e.target.value)} /> <br /><br />
        <label htmlFor="status">Status</label>
        <select name="status" id="status" required onChange={(e) => setStatus(e.target.value)}>
          <option value="null">-- Select Status --</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select> <br /><br />
        <label htmlFor="deadline">DeadLine</label>
        <input type="date" id="deadline" min={formattedCurrentDate} required value={deadline} onChange={(e) => setDeadline(e.target.value)} /> <br /><br />
          <button onClick={addTodo}>Add Task</button>
        </>
      )}

      {todos.map((todo) => (
        <div key={todo._id}>
          <br /><br />
          <h3>Task:</h3>
          <ul>{todo.task}</ul> <br />
          <h3>Description:</h3>
          <ul>{todo.desc}</ul><br />
          <h3>Status:</h3>
          <ul>{todo.status}</ul><br />
          <h3>DeadLine:</h3>
          <ul>{todo.deadline}</ul><br />
          <button onClick={() => enterEditMode(todo._id, todo.task,todo.desc,todo.status,todo.deadline)}>
            Edit
          </button>
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </div>
      ))}





    </>
  );
}

export default App;
