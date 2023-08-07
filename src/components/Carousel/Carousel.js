/* import React from 'react';
import './Carousel.css';
import img1 from '../../img/f.jpeg';
import img2 from '../../img/g.jpeg';
import img3 from '../../img/h.jpeg';
import img4 from '../../img/i.jpeg';
import img5 from '../../img/j.jpeg';
import img6 from '../../img/k.jpeg';




function Carousel() {
    return (
        
        <div id="demo" className="carousel slide" data-ride="carousel">

  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>
    <li data-target="#demo" data-slide-to="5"></li>
    <li data-target="#demo" data-slide-to="6"></li>
    <li data-target="#demo" data-slide-to="7"></li>
    <li data-target="#demo" data-slide-to="8"></li>
  </ul>
  
  <div className="carousel-inner">
   
    <div className="carousel-item">
      <img src={img1} alt="foto" />
    </div>
    <div className="carousel-item">
      <img src={img2} alt="foto"/>
    </div>
    <div className="carousel-item">
      <img src={img3} alt="foto"/>
    </div>
    <div className="carousel-item">
      <img src={img4}alt="foto" />
    </div>
    <div className="carousel-item">
      <img src={img5} alt="foto" />
      </div>
      <div className="carousel-item">
      <img src={img6} alt="foto" />
      </div>
    
  </div>

  <a className="carousel-control-prev" href="#demo"  data-slide="prev">
    <span className="carousel-control-prev-icon" ></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon" ></span>
  </a>

</div>
    )
}


export default Carousel; */

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

import img1 from '../../img/f.jpeg';
import img2 from '../../img/g.jpeg';
import img3 from '../../img/h.jpeg';
import img4 from '../../img/i.jpeg';
import img5 from '../../img/j.jpeg';
import img6 from '../../img/k.jpeg';

function MyCarousel() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx} style={{ height: '400px' }}>
          <img className="d-block w-100" src={image} alt={`Slide ${idx + 1}`} 
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
