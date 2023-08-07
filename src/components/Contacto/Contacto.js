import React from "react";
import { NavLink } from "react-router-dom";
import './Contacto.css';

const Contacto = () => {
    return (
        <div>
        <h1>Formulario de Contacto</h1>
        <NavLink 
       className="button" to="/">Volver al Inicio
       </NavLink>
        </div>
    );
}

export default Contacto;