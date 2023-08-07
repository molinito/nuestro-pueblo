import React from "react";
import { NavLink } from "react-router-dom";
import './Gastronomia.css';

const Gastronomia = () => {
    return (
        <div>
        <h1>Nuestros sabores</h1>
        <NavLink 
       className="button" to="/">Volver al Inicio
       </NavLink>
        </div>
    );
}

export default Gastronomia;