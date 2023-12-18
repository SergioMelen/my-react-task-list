import React from "react";

const SobreNosotros = () => {
  return (
    <div>
      <h2 className="titleSobreNosotros">Sobre Nosotros</h2>
      <p className="textSobreNosotros">
        Bienvenido a nuestra aplicación de lista de tareas. Estamos emocionados
        de que hayas elegido utilizar nuestra plataforma para gestionar tus
        tareas diarias de manera eficiente.
      </p>

      <p className="textSobreNosotros">
        Funcionalidades Clave:
      </p>
      <ul>
        <li className="boxFuncionalidades">
          <strong>Añadir Tareas:</strong> Agrega nuevas tareas a tu lista.
        </li>
        <li className="boxFuncionalidades">
          <strong>Editar Tareas:</strong> Modifica el contenido de tus tareas existentes.
        </li>
        <li className="boxFuncionalidades">
          <strong>Eliminar Tareas:</strong> Elimina las tareas que ya no necesitas.
        </li>
        <li className="boxFuncionalidades">
          <strong>Marcar Tareas como Completadas:</strong> Indica qué tareas has completado.
        </li>
        <li className="boxFuncionalidades">
          <strong>Almacenamiento Local:</strong> Utilizamos almacenamiento local para que tus tareas persistan entre sesiones.
        </li>
      </ul>

      <p className="textSobreNosotros">
        Tecnologías Utilizadas:
      </p>
      <ul>
        <li className="boxTecnologias">
          <strong>JavaScript:</strong> Para la lógica y funcionalidad de la aplicación.
        </li>
        <li className="boxTecnologias">
          <strong>React:</strong> Como biblioteca principal para construir la interfaz de usuario.
        </li>
        <li className="boxTecnologias">
          <strong>HTML:</strong> Para la estructura de la aplicación.
        </li>
        <li className="boxTecnologias">
          <strong>CSS:</strong> Para estilos y diseño.
        </li>
      </ul>
    </div>
  );
};

export default SobreNosotros;
