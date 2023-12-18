import { useContext } from "react";
import Context from "../contexts/context";
import { useForm } from "react-hook-form";
import { Input, FormLabel, Button, FormControl, Box, Text, Center } from "@chakra-ui/react";

function Task() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { crearTarea } = useContext(Context);

  const onSubmit = (data) => {
    crearTarea(data.newTask, data.description);
    reset();
  };

  return (
    <Center>
      <Box mt='50px'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired>
            <FormLabel>Ingresa una Tarea</FormLabel>
            <Input
              {...register('newTask', {
                required: true,
                maxLength: 30,
                minLength: 3,
              })}
              type="text"
              placeholder="Ej: Entregar el proyecto..."
              w='700px'
            />
            {errors.newTask?.type === 'required' && <Text color='red' m='0' fontSize='sm'>* El campo no puede estar vacío</Text>}
            {errors.newTask?.type === 'minLength' && <Text color='red' m='0' fontSize='sm'>* El nombre debe contener al menos 3 caracteres</Text>}
          </FormControl>

          <FormControl mt='10px'>
            <FormLabel>Descripción </FormLabel>
            <Input
              {...register('description', {
                maxLength: 50,
              })}
              placeholder=" Máximo 50 caracteres..."
              w='700px'
            />
            {errors.description?.type === 'maxLength' && <Text color='red' m='0' fontSize='sm'>* Ha superado el máximo de caracteres</Text>}
          </FormControl>

          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              name="agregar"
              type="submit"
              m='20px'
              p='18px'
              bg='teal.500' // Cambié el color de fondo a un tono de verde azulado
              color='white' // Cambié el color del texto a blanco
              fontSize='20px'
              _hover={{ bg: 'teal.600' }} // Cambié el color de fondo en hover
            >
              Agregar
            </Button>
          </Box>
        </form>
      </Box>
    </Center>
  );
}

export default Task;
