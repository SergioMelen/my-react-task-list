import { useContext } from 'react';
import { useColorMode } from '@chakra-ui/react';
import Context from '../contexts/context';
import { Button, Checkbox, Text, Box, Center, Input, Grid, GridItem } from '@chakra-ui/react';

function TaskList() {
  const {
    tasks,
    borrarTarea,
    eliminarTodasLasTareas,
    editarTarea,
    completarTarea,
    editTask,
    setEditTask
  } = useContext(Context);

  const { colorMode } = useColorMode();

  return (
    <Center>
      <Box w='700px'>
        {tasks.map((tarea) => (
          <Box
            bg={colorMode === 'light' ? '#F8F8F8' : '#2D3748'}
            mt='20px'
            p='10px'
            borderRadius='10px'
            key={tarea.id}
          >
            <Box>
              {editTask === tarea ? (
                <Input
                  type="text"
                  defaultValue={tarea.tittle}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      editarTarea(tarea, e.target.value);
                    }
                  }}
                />
              ) : (
                <Box bg='#FFFFFF' mt='20px' p='10px' borderRadius='10px'>
                  <Grid
                    templateColumns='auto 1fr 45px 9%'
                    alignItems="center"
                    fontSize="15px"
                    h='65px'
                  >
                    <GridItem>
                      <Checkbox
                        isChecked={tarea.isComplete}
                        onChange={() => completarTarea(tarea)}
                        size='lg'
                        colorScheme='blue' 
                        p='10px'
                        border='#F0F0F0'
                        bg="#E2E8F0" 
                      />
                    </GridItem>
                    <GridItem>
                      <Text ml='15px' fontSize='20px'>
                        <strong className='tarea'>Tarea: </strong>
                        {tarea.isComplete ? (
                          <Text as='del'>{tarea.tittle}</Text>
                        ) : (
                          tarea.tittle
                        )}
                        <br />
                        {tarea.isComplete ? (
                          <Text as='del' m='0' color='grey' fontSize='md'>
                            {tarea.description}
                          </Text>
                        ) : (
                          <Text m='0' color='grey' fontSize='md'>
                            {tarea.description}
                          </Text>
                        )}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Button
                        w='45px'
                        onClick={() => setEditTask(tarea)}
                        colorScheme='teal' 
                      >
                        editar
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button
                        w='45px'
                        ml='5px'
                        onClick={() => borrarTarea(tarea)}
                        colorScheme='red' 
                      >
                        borrar
                      </Button>
                    </GridItem>
                  </Grid>
                </Box>
              )}
            </Box>
          </Box>
        ))}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#FFFFFF" 
        >
          <Button
            m='20px'
            p='20px'
            bg='#E53E3E' 
            name='limpiar'
            fontSize='20px'
            colorScheme='black' 
            onClick={eliminarTodasLasTareas}
          >
            Limpiar
          </Button>
        </Box>
      </Box>
    </Center>
  );
}

export default TaskList;
