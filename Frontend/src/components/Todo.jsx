import { useState, useEffect } from "react";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("/api/todos");
      setTodos(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async () => {
    if (!text) return;
    try {
      const res = await axios.post("/api/todos", { text, completed: false });
      setTodos([...todos, res.data]);
      setText("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const todo = todos.find((todo) => todo._id === id);
      const res = await axios.put(`/api/todos/${id}`, {
        completed: !todo.completed,
      });
      setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
    } catch (error) {
      console.error("Error toggling completion:", error);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 p-6 bg-green-200 h-screen">
      <div className="w-full h-48 rounded p-6 bg-green-600">
        <div className="flex gap-2">
          <h1 className="text-3xl font-bold text-white">To-Do List</h1>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <input
            type="text"
            placeholder="Enter your task . . ."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full outline-none p-2 rounded"
          />
          <button
            className="text-green-800 font-semibold bg-green-100 p-2 w-full rounded"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
      </div>
      <h2 className="text-xl text-white mb-4 font-bold bg-green-900 p-1 rounded px-6">
        {todos.length ? <p>Your Tasks</p> : <p>No Tasks</p>}
      </h2>
      <div className="mb-6">
        <ul className="flex flex-col gap-4">
          {Array.isArray(todos) &&
            todos.map((todo) => (
              <li
                key={todo._id}
                className={`shadow-md p-2 rounded-lg flex flex-col gap-2 items-start ${
                  todo.completed ? "bg-gray-300 line-through" : "bg-green-100"
                }`}
              >
                <h2 className="text-lg font-bold">{todo.text}</h2>
                <div className="flex justify-between w-full">
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="p-1 rounded-lg bg-green-600 text-sm text-white"
                  >
                    <DeleteIcon />
                  </button>
                  <button
                    onClick={() => toggleComplete(todo._id)}
                    className="p-1 rounded-lg bg-green-600 text-sm text-white"
                  >
                    {todo.completed ? <CheckCircleIcon/> : <CheckCircleOutlineIcon/>}
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
