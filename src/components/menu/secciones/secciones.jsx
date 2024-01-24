import React from 'react';
import { Box, Heading, extendTheme, ChakraProvider, Center, Image } from '@chakra-ui/react';
import '@fontsource/lora';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import casa from './casa.jpg';
import i1 from './casaFotos/1.jpg';
import i2 from './casaFotos/2.jpg';
import i3 from './casaFotos/3.jpg';
import i4 from './casaFotos/4.jpg';
import i5 from './casaFotos/5.jpg';
import i6 from './casaFotos/6.jpg';
import i7 from './casaFotos/7.jpg';
import i8 from './casaFotos/8.jpg';
import i9 from './casaFotos/9.jpg';
import i10 from './casaFotos/10.jpg';
import i11 from './casaFotos/11.jpg';

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
        <Box id="seccion1" h="auto" bg="#FDEDEC" boxShadow="dark-lg" m={'15px'} rounded={4} mt={0} textAlign="center">
          <Heading size="lg" fontSize="40px" textAlign={'center'} p={'10px'}>
            Sobre Nosotros
          </Heading>
          <Box textAlign="center">
            <Center>
              <Image src={casa} alt="" boxSize={['200px', '250px']} maxW="100%" boxShadow="2xl" border="3px solid black" />
            </Center>
          </Box>
          <p m="10px" textAlign={'center'}>
            ¡Bienvenidos a "El Magnolias Villa"! <br />
            Ubicada en un rincón encantador, "El Magnolias Villa" es una casa quinta que combina la comodidad de la vida moderna con la tranquilidad y el encanto de la naturaleza. Este oasis de serenidad te invita a escapar del bullicio urbano y sumergirte en un ambiente relajante, perfecto para disfrutar de momentos inolvidables con amigos y familiares.
          </p>
        </Box>









        <Box id="seccion2" h="auto" bg="#FDEDEC" boxShadow="dark-lg" m={'15px'} rounded={4} mt={0} p={4} position="relative">
  <Box boxSize={['300px', '400px']} maxW="100%" margin="auto" textAlign="center" mb={4} h="400px" overflow="hidden">
              {/* ... código del carrusel ... */}
              <Heading size="lg" fontSize="40px" p={'10px'}>
                Nuestros Espacios
              </Heading>
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
                </div>
                <div className="carousel-inner" >
                  <div className="carousel-item active">
                    <Image src={i1} className="d-block w-100" alt="Espacio 1" style={{ height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="carousel-item">
                    <Image src={i2} className="d-block w-100" alt="Espacio 2" style={{ height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="carousel-item">
                    <Image src={i3} className="d-block w-100" alt="Espacio 3" style={{ height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="carousel-item">
                    <Image src={i4} className="d-block w-100" alt="Espacio 4" style={{ height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="carousel-item">
                    <Image src={i5} className="d-block w-100" alt="Espacio 5" style={{ height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="carousel-item">
                    <Image src={i6} className="d-block w-100" alt="Espacio 6" style={{ height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="carousel-item">
                    <Image src={i7} className="d-block w-100" alt="Espacio 7" style={{ height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="carousel-item">
                    <Image src={i8} className="d-block w-100" alt="Espacio 8" style={{ height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="carousel-item">
                    <Image src={i9} className="d-block w-100" alt="Espacio 9" style={{ height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="carousel-item">
                    <Image src={i10} className="d-block w-100" alt="Espacio 10" style={{ height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="carousel-item">
                    <Image src={i11} className="d-block w-100" alt="Espacio 11" style={{ height: '400px', objectFit: 'cover' }} />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            
          </Box>
          <Box  textAlign={'center'}>
          <p m="10px"  position="relative" zIndex={1}>
          Esta casa cuenta con 4 dormitorios, cocina con heladera y horno, TV de pantalla plana, zona de estar y 3 baños con bidet. El alojamiento proporciona toallas y ropa de cama por un adicional.
          </p>
          </Box>
        </Box>


        <Box id="seccion3" h="500px" bg="#FDEDEC" boxShadow="dark-lg" m={'15px'} rounded={4} mt={0}>
          {/* Contenido de la Sección 2 */}
        </Box>
      </>
    </ChakraProvider>
  );
};

export default Secciones;
