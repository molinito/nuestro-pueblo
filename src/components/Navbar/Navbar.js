import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    
   
        <div className={styles.navbar}>
        <NavLink className={styles.link} activeclassName="active" exact="true" to="/">
          Inicio
        </NavLink>
        <NavLink className={styles.link} activeclassName="active" to="/lugares">
          Lugares
        </NavLink>
        <NavLink className={styles.link} activeclassName="active" to="/acerca-de">
            Acerca de
        </NavLink>
        <NavLink className={styles.link} activeclassName="active" to="/contacto">
            Contacto
        </NavLink>
        <NavLink className={styles.link} activeclassName="active" to="/costumbres">
            Costumbres
        </NavLink>
        <NavLink className={styles.link} activeclassName="active" to="/historia">
            Historia
        </NavLink>
        <NavLink className={styles.link} activeclassName="active" to="/eventos">
            Eventos
        </NavLink>
        <NavLink className={styles.link} activeclassName="active" to="/gastronomia">
            Gastronomia
        </NavLink>
        <NavLink className={styles.link} activeclassName="active" to="/personajes">
            Personajes
        </NavLink>
        
      </div>
     
    
    );
  };

export default Navbar;