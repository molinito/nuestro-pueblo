import React from "react";
import { NavLink } from "react-router-dom";
import './Acerca.css';

const Acerca = () => {
    return (
        <div>
        <h1>Acerca de</h1>
       
         <NavLink
            className="button nav-link" to="/">Volver al Inicio
            </NavLink>
       

        </div>
    );
}

export default Acerca;