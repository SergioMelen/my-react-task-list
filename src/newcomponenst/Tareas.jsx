import React from "react";
import TaskList from "../componenst/TaskList";
import Task from "../componenst/Task";
import { useColorMode } from '@chakra-ui/react';

function Tareas() {
  const { colorMode } = useColorMode();

  return (
    <div className={`mainBox ${colorMode === 'light' ? 'lightMode' : 'darkMode'}`}>
      <Task />
      <TaskList />
    </div>
  );
}

export default Tareas;
