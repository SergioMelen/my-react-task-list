import React from 'react';
import { Box, Image, Heading, Text, Center, useColorMode } from '@chakra-ui/react'

const Home = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
<Center as='section' bg={isDarkMode ? '#FFFFFF' : 'teal.500'} h='100vh' mt='20px'  >
      <Box w='500px' bg={isDarkMode ? 'gray.600' : 'white'} p='8' h='80vh'  >
                 <h1>Bienvenido a Mi Aplicación</h1>
                       <Text textAlign='justify'fontSize='lg'  >
        Crea listas, asigna prioridades, establece fechas límite y mantén un seguimiento eficiente de tus tareas.
        ¡Haz de Todo App tu aliado para lograr una vida más organizada y menos estresante!
              </Text>
      </Box>
    </Center>
    
  );
}

export default Home