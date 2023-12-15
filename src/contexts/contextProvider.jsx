import React from 'react'
import context from '../contexts/context'
import UseTask from '../componenst/UseTask'

export default function contextProvider({children}) {
    const {
        tasks,
        borrarTarea,
        eliminarTodasLasTareas,
        editarTarea,
        crearTarea,
        completarTarea,
        editTask,
        setEditTask
      } = UseTask();
     


  return (
    <context.Provider value={{
        tasks,
        borrarTarea,
        eliminarTodasLasTareas,
        editarTarea,
        crearTarea,
        completarTarea,
        editTask,
        setEditTask
      }}>
        {children}
    </context.Provider>
  )
}