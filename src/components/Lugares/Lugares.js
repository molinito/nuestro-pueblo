import React from "react";
import { NavLink } from "react-router-dom";
import './Lugares.css';

const Lugares = () => {
    return (
        <div>
        <h1>Lugares para visitar</h1>
        <NavLink 
       className="button" to="/">Volver al Inicio
       </NavLink>
        </div>
    );
}

export default Lugares;