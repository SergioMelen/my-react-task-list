import { useContext } from 'react';
import Context from '../contexts/context';

function TaskList() {
  const { tasks, borrarTarea, eliminarTodasLasTareas, editarTarea, completarTarea, editTask, setEditTask } = useContext(Context);

  return (
    <div>
      {tasks.map((tarea) => (
        <div className='task' key={tarea.id}>
          <div>
            {editTask === tarea ? (
              <input
  className='input-update'
  type="text"
  defaultValue={tarea.tittle}
  onKeyPress={(e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      editarTarea(tarea, e.target.value);
                  }
                }}
              />
            ) : (
              <div className="task-content">
                <input
                  type='checkbox'
                  className='completar'
                  onClick={() => completarTarea(tarea)}
                />
                <p>
                  <strong>Tarea: </strong>
                  {tarea.isComplete ? <del>{tarea.tittle}</del> : tarea.tittle}
                  <br />
                  {tarea.isComplete ? <del>{tarea.description}</del> : tarea.description}
                </p>
                <button
                  className='editar'
                  onClick={() => setEditTask(tarea)}
                >
                  Editar
                </button>
                <button
                  className='borrar'
                  onClick={() => borrarTarea(tarea)}
                >
                  Borrar
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="contenedor-clear">
        <button
          className="boton-clear"
                    onClick={eliminarTodasLasTareas}
        >
          Limpiar
        </button>
      </div>
    </div>
  );
}

export default TaskList;
