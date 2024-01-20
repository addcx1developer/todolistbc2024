import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim().length < 1) return;

    setTasks((t) => [...t, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks((t) => t.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index < 1) return;

    const updatedTasks = [...tasks];

    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];

    setTasks(updatedTasks);
  };

  const moveTaskDown = (index) => {
    if (index >= tasks.length - 1) return;

    const updatedTasks = [...tasks];

    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];

    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>To Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
