import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import i1 from '../menu/secciones/casaFotos/1.jpg';
import i2 from '../menu/secciones/casaFotos/2.jpg';
import i3 from '../menu/secciones/casaFotos/3.jpg';
import i4 from '../menu/secciones/casaFotos/4.jpg';
import i5 from '../menu/secciones/casaFotos/5.jpg';
import i6 from '../menu/secciones/casaFotos/6.jpg';
import { Box, Image } from '@chakra-ui/react';


const PostHeader = () => {
  return (
 
    <Box id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" boxShadow="dark-lg"  >
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>

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

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </Box>
  );
};

export default PostHeader;