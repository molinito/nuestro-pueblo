// crear un header que contenga un video de fondo

import React from "react";
import "./Header.css";
import videoWebm from "../../img/tierra.webm";

function Header() {
  return (
    <div className="header-container">
      <video autoPlay loop muted playsInline preload="auto">
        <source src="/tierra.mp4" type="video/mp4" />
        <source src={videoWebm} type="video/webm" />
      </video>
    </div>
  );
}

export default Header;




