import React from "react";
import { NavLink } from "react-router-dom";
import './Personajes.css';

const Personajes = () => {
    return (
        <div>
        <h1>Personajes de la zona</h1>
        <NavLink 
       className="button" to="/">Volver al Inicio
       </NavLink>
        </div>
    );
}

export default Personajes;