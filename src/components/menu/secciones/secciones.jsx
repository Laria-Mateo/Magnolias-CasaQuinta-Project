import React from 'react';
import { Box, Heading, Text, extendTheme, ChakraProvider, Center, Image } from '@chakra-ui/react';
import '@fontsource/lora';
import casa from './casa.jpg'

import sobreNosotros from './sobreNosotros.jpg';

const theme = extendTheme({
  fonts: {
    heading: `'Lora', serif`,
    body: `'Lora', serif`,
  },
});

const Secciones = () => {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Box id="seccion1" h="auto" bg="#FDEDEC" boxShadow="dark-lg" m={'15px'} rounded={4} mt={0}>
          <Heading size="lg" fontSize="40px" textAlign={'center'} p={'10px'}>
            Sobre Nosotros
          </Heading>
          <Box textAlign="center" >
            <Center>
              <Image src={casa} alt="" boxSize={['200px', '250px']} maxW="100%" boxShadow="2xl" border="3px solid black"/>
            </Center>
          </Box>

          <Text m="10px" textAlign={'center'}>¡Bienvenidos a "El Magnolias Villa"! <br />

            Ubicada en un rincón encantador, "El Magnolias Villa" es una casa quinta que combina la comodidad de la vida moderna con la tranquilidad y el encanto de la naturaleza.
            Este oasis de serenidad te invita a escapar del bullicio urbano y sumergirte en un ambiente relajante, perfecto para disfrutar de momentos inolvidables con amigos y familiares.
          </Text>
        </Box>
        <Box id="seccion2" h="500px" bg="#FDEDEC" boxShadow="dark-lg" m={'15px'} rounded={4} mt={0}>
          {/* Contenido de la Sección 2 */}
        </Box>
        <Box id="seccion3" h="500px" bg="#FDEDEC" boxShadow="dark-lg" m={'15px'} rounded={4} mt={0}>
          {/* Contenido de la Sección 2 */}
        </Box>
      </>
    </ChakraProvider>
  );
};

export default Secciones;
