import React, { useState, useEffect } from "react";
import Header from "./componenst/Header";
import AddTask from "./componenst/AddTask";
import TaskList from "./componenst/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleBeforeUnload = (event) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addNewTask = (name) => {
    if (name.trim() !== "") {
      const newTask = { id: Date.now(), name, completed: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="container">
      <Header />
      <AddTask onAddTask={addNewTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onRemoveTask={removeTask}
      />
    </div>
  );
}

export default App;
