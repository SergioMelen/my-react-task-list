import React from "react";
import TaskList from "../componenst/TaskList";
import Task from "../componenst/Task";

function Tareas() {

  return (
    <div className="mainBox">
     <Task/>
     <TaskList/>
    </div>
  );
}

export default Tareas;
