import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './Carousel.css'; // Importa los estilos personalizados
import img1 from '../../img/f.jpeg';
import img2 from '../../img/g.jpeg';
import img3 from '../../img/h.jpeg';
import img4 from '../../img/i.jpeg';
import img5 from '../../img/j.jpeg';
import img6 from '../../img/k.jpeg';
import img7 from '../../img/tractor.jpg';

function MyCarousel() {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
    <Carousel activeIndex={index} onSelect={handleSelect} 
    className='carousel' >

      {images.map((image, idx) => (
        <Carousel.Item key={idx} style={{ height: '400px', marginTop: "50px"}}>
          <img className="photo" src={image} alt={`Slide ${idx + 1}`} 
          style={{ objectFit: 'contain', height: '90%', width: '100%'}}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    
  );
}

export default MyCarousel; 