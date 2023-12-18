import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab } from '@chakra-ui/react';

const Menu = () => {
  return (
    <Tabs
      mt='40px'
      p='20px'
      colorScheme='teal' // Cambia el color de las pestañas
      variant='enclosed'
    >
      <TabList>
        <Tab
          _selected={{ color: 'white', bg: 'teal.500' }} // Cambia el color cuando está seleccionado
          width='100px'
          borderRadius='0px'
        >
          <Link to='/'>Home</Link>
        </Tab>
        <Tab
          _selected={{ color: 'white', bg: 'teal.500' }}
          borderRadius='0px'
        >
          <Link to='/sobre-nosotros'>Sobre Nosotros</Link>
        </Tab>
        <Tab
          _selected={{ color: 'white', bg: 'teal.500' }}
          width='100px'
          borderRadius='0px'
        >
          <Link to='/tareas'>Tareas</Link>
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default Menu;
