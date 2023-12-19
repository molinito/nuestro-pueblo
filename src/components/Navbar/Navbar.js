import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    
   
        <div className={styles.navbar}>
        <NavLink className={styles.link} activeclassname="active" exact="true" to="/">
          Inicio
        </NavLink>
        <NavLink className={styles.link} activeclassname="active" to="/lugares">
          Lugares
        </NavLink>
        <NavLink className={styles.link} activeclassname="active" to="/acerca-de">
            Acerca de
        </NavLink>
        <NavLink className={styles.link} activeclassname="active" to="/contacto">
            Contacto
        </NavLink>
        <NavLink className={styles.link} activeclassname="active" to="/costumbres">
            Costumbres
        </NavLink>
        <NavLink className={styles.link} activeclassname="active" to="/historia">
            Historia
        </NavLink>
        <NavLink className={styles.link} activeclassname="active" to="/eventos">
            Eventos
        </NavLink>
        <NavLink className={styles.link} activeclassname="active" to="/gastronomia">
            Gastronomia
        </NavLink>
        <NavLink className={styles.link} activeclassname="active" to="/personajes">
            Personajes
        </NavLink>
        
      </div>
     
    
    );
  };

export default Navbar;