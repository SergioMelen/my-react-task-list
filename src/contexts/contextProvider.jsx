import React from 'react'
import Context from './context'
import UseTask from '../componenst/UseTask'

export default function ContextProvider({children}) {
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
    <Context.Provider value={{
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
    </Context.Provider>
  )
}