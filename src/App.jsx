import React, { useState, useEffect } from 'react';


import { ChakraProvider, Box, Spacer } from '@chakra-ui/react'
import Menu from './components/menu/menu';
import Secciones from './components/menu/secciones/secciones';
import Header from './components/Header/header';
import PostHeader from './components/postHeader/postHeader';



function App() {

  return (
    <ChakraProvider>

      <Header/>
    <PostHeader/>
        
        <Secciones />
      

    </ChakraProvider>
  )
}

export default App
