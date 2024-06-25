import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasksToDo, setTasksToDo] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasksToDo([...tasksToDo, task]);
      setTask("");
    }
  };

  const completeTask = (index) => {
    const newTasksToDo = tasksToDo.filter((_, i) => i !== index);
    const completedTask = tasksToDo[index];
    setTasksToDo(newTasksToDo);
    setTasksDone([...tasksDone, completedTask]);
  };

  const deleteTask = (index) => {
    const newTasksDone = tasksDone.filter((_, i) => i !== index);
    setTasksDone(newTasksDone);
  };

  const revertTask = (index) => {
    const newTasksDone = tasksDone.filter((_, i) => i !== index);
    const revertedTask = tasksDone[index];
    setTasksDone(newTasksDone);
    setTasksToDo([...tasksToDo, revertedTask]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter new task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="task-container">
          <div className="tasks">
            <h2>Tasks To Do</h2>
            <ul>
              {tasksToDo.map((task, index) => (
                <li key={index}>
                  {task}
                  <button onClick={() => completeTask(index)}>Complete</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="tasks">
            <h2>Tasks Done</h2>
            <ul>
              {tasksDone.map((task, index) => (
                <li key={index}>
                  {task}
                  <button onClick={() => revertTask(index)}>Revert</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
