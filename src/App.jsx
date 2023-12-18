import './App.css';
import Home from './newcomponenst/Home';
import ContextProvider from './contexts/contextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SobreNosotros from './newcomponenst/SobreNosotros';
import Tareas from './newcomponenst/Tareas';
import Menu from './newcomponenst/Menu';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import ButtonTheme from './componenst/ButtonTheme';

const theme = extendTheme({
  colors: {
    primary: '#3498db', 
    secondary: '#2ecc71', 
    background: '#ecf0f1', 
    text: '#34495e', 
  },
});

function App() {
  return (
    <Box w='900px'>
      <BrowserRouter>
        <ContextProvider>
        <ButtonTheme />
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