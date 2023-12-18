import './App.css';
import Home from './newcomponenst/Home';
import ContextProvider from './contexts/contextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SobreNosotros from './newcomponenst/SobreNosotros';
import Tareas from './newcomponenst/Tareas';
import Menu from './newcomponenst/Menu';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';

// Personaliza el tema de Chakra UI
const theme = extendTheme({
  colors: {
    primary: '#3498db', // Cambia el color principal a un tono de azul
    secondary: '#2ecc71', // Cambia el color secundario a un tono de verde
    background: '#ecf0f1', // Cambia el color de fondo a un tono más claro
    text: '#34495e', // Cambia el color del texto a un tono más oscuro
  },
});

function App() {
  return (
    <Box w='900px'>
      <BrowserRouter>
        <ContextProvider>
          <ChakraProvider theme={theme}>
            <Menu />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sobre-nosotros' element={<SobreNosotros />} />
              <Route path='/Tareas' element={<Tareas />} />
            </Routes>
          </ChakraProvider>
        </ContextProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
