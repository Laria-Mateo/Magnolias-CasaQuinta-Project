import React, { useState, useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Cambia el estado de isScrolled basado en la posición del scroll
      setIsScrolled(scrollPosition > 0);
    };

    // Agrega el listener para el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      bgColor={isScrolled ? 'white' : 'transparent'}
      borderBottom={isScrolled ? '1px solid #ddd' : 'none'}
      p="3"
      transition="background-color 0.3s, border-bottom 0.3s"
      boxShadow={isScrolled ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none'}
    >
      <Heading size="lg">Magnolias Casa Quinta</Heading>
    </Box>
  );
};

export default Header;