import React from "react";
import Task from "./Task";

function TaskList({ tasks, onToggleComplete, onRemoveTask }) {
  return (
    <div>
      <h4>Lista de Tareas</h4>
      <h6>*Tareas completadas*</h6>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
