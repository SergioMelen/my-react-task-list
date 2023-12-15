import { useContext } from "react";
import { useForm } from "react-hook-form";
import Context from "../contexts/context";


function Task () {
  
  const { register, handleSubmit, formState: { errors }, reset,  } = useForm();

    const onSubmit = (data) => {
       crearTarea(data.newTask, data.description);
       reset();
    }

    const { crearTarea } = useContext(Context);
    const renderError = (type, message) => (
      errors[type] && <p className="validacion">{message}</p>
    );
    return(    
        <form 
        className="container-form"
        onSubmit={handleSubmit(onSubmit)}>
            <label className="subtitulo">Ingresa una Tarea</label>       
            <input 
                {...register('newTask', {
                  required: true,
                  maxLength: 30,
                  minLength: 3
                })}
                type="text" 
                placeholder="Ej: Entregar el proyecto..." 
                className="input-tittle"
                onKeyPress={(e) => {
                    e.key = 'Enter'
                }}/> 
            {renderError('newTask', 'El campo no puede estar vacío')}
      {renderError('newTask', 'El nombre debe contener al menos 3 caracteres')}
    
            <label className="label-descripcion">Descripcion (opcional)</label>
            <textarea
                {...register('description', {
                  maxLength: 100,
                })}
                placeholder=" Máximo 100 caracteres. . . "
                className="text-area"

            />
            <div className="contenedor-agregar">
                <button name="agregar" type="submit" className="agregar">Agregar</button>
            </div>         
        </form>        
    )};
    
export default Task