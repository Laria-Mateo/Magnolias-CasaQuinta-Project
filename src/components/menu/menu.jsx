import { useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Box, VStack, Flex, Spacer, Link, Collapse, Button } from '@chakra-ui/react';

const Menu = () => {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false); // Cerrar el menú después de hacer clic en un enlace
  };

  return (
    <>
      <VStack align="center">
        <Box display={{ base: 'block', md: 'none' }}>
          <Button onClick={toggleMenu} bg={"#D6C4C0"}>Menú</Button>
        </Box>
        <Box display={{ base: 'none', md: 'block' }}>
          <Flex>
            <Box m={4} cursor="pointer" onClick={() => handleItemClick("seccion1")}>
              Sobre nosotros
            </Box>
            <Box m={4} cursor="pointer" onClick={() => handleItemClick("seccion2")}>
              Nuestros Espacios
            </Box>
            <Box m={4} cursor="pointer" onClick={() => handleItemClick("seccion3")}>
              Sección 3
            </Box>
          </Flex>
        </Box>

        <Collapse in={isOpen} animateOpacity>
          <Flex
            direction="column"
            align={{ base: 'flex-start', md: 'center' }}
            mt={{ base: 4, md: 0 }}
          >
            <Box m={4} cursor="pointer" onClick={() => handleItemClick("seccion1")}>
            Sobre nosotros
            </Box>
            <Box m={4} cursor="pointer" onClick={() => handleItemClick("seccion2")}>
            Nuestros Espacios
            </Box>
            <Box m={4} cursor="pointer" onClick={() => handleItemClick("seccion3")}>
              Sección 3
            </Box>
          </Flex>
        </Collapse>
      </VStack>
    </>
  );
};

export default Menu;
