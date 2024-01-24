import * as React from 'react'


import { ChakraProvider } from '@chakra-ui/react'
import Menu from './components/menu/menu';
import Secciones from './components/menu/secciones/secciones';
import Header from './components/Header/header';



function App() {

  return (
    <ChakraProvider>
      <Header/>
      
      <Secciones />

    </ChakraProvider>
  )
}

export default App
