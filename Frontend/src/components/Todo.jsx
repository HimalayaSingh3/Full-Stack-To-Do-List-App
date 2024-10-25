import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo() {
  const [savers, setSavers] = useState([]);
  const [task, setTask] = useState("");


  return (
    <div className="w-full flex flex-col gap-4 p-6 bg-green-200 h-screen">
      <div className="w-full h-48 rounded p-6 bg-green-600">
        <div className="flex gap-2">
          <h1 className="text-3xl font-bold text-white">To-Do-List</h1>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <input
            type="text"
            placeholder="Enter your task . . ."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full outline-none p-2 rounded"
          />
          <button className="text-green-800 font-semibold bg-green-100 p-2 w-full rounded">
            Add
          </button>
        </div>
      </div>
      <h2 className="text-xl text-white mb-4 font-bold bg-green-900 p-1 rounded px-6">
        Your Tasks{" "}
      </h2>
      <div className="mb-6">
        <ul className="flex flex-col gap-4">
          {savers.map((link) => (
            <li
              key={link._id}
              className="shadow-md bg-green-100 rounded-lg p-2 flex flex-col gap-2 items-start "
            >
              <h2 className="text-lg font-bold">{link.title}</h2>
              <p>{link.links}</p>
              <div className="flex justify-between w-full">
                <button
                  onClick={() => editTask(link._id)}
                  className="p-1 rounded-lg bg-green-600 text-sm text-white"
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => deleteTask(link._id)}
                  className="p-1 rounded-lg bg-green-600 text-sm text-white"
                >
                  <DeleteIcon />
                </button>
                <button
                  onClick={() => editTask(link._id)}
                  className="p-1 rounded-lg bg-green-600 text-sm text-white"
                >
                  <CheckCircleIcon />
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
