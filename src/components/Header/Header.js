// crear un header que contenga un video de fondo

import React from 'react';
import './Header.css';
import video from '../../img/tierra.webm';

function Header() {
  return (
    <div className="header-container">
      <video src={video} autoPlay loop muted />
    </div>
  );
}

export default Header;





