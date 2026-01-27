import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current) {
        return;
      }
      if (!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((current) => !current);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <NavLink className={styles.link} activeclassname="active" exact="true" to="/">
        Inicio
      </NavLink>
      <NavLink className={styles.link} activeclassname="active" to="/acerca-de">
        Sobre mí
      </NavLink>
      <NavLink className={styles.link} activeclassname="active" to="/contacto">
        Envíanos tu mensaje
      </NavLink>
      <div className={styles.dropdown} ref={dropdownRef}>
        <button
          type="button"
          className={styles.dropdownButton}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mis-contenidos-menu"
        >
          Mis Contenidos
          <span className={styles.dropdownIcon}>{isOpen ? "—" : "+"}</span>
        </button>
        <div
          id="mis-contenidos-menu"
          className={`${styles.dropdownMenu} ${isOpen ? styles.dropdownMenuOpen : ""}`}
        >
          <NavLink className={styles.dropdownLink} activeclassname="active" to="/historia" onClick={closeMenu}>
            Historia
          </NavLink>
          <NavLink className={styles.dropdownLink} activeclassname="active" to="/lugares" onClick={closeMenu}>
            Lugares
          </NavLink>
          <NavLink className={styles.dropdownLink} activeclassname="active" to="/costumbres" onClick={closeMenu}>
            Costumbres
          </NavLink>
          <NavLink className={styles.dropdownLink} activeclassname="active" to="/ayer-hoy" onClick={closeMenu}>
            Ayer y Hoy
          </NavLink>
          <NavLink className={styles.dropdownLink} activeclassname="active" to="/personajes" onClick={closeMenu}>
            Personajes
          </NavLink>
          <NavLink className={styles.dropdownLink} activeclassname="active" to="/gastronomia" onClick={closeMenu}>
            Gastronomía
          </NavLink>
          <NavLink className={styles.dropdownLink} activeclassname="active" to="/eventos" onClick={closeMenu}>
            Eventos
          </NavLink>
        </div>
      </div>
      <NavLink className={styles.link} activeclassname="active" to="/donacion">
        Colaboración
      </NavLink>
      <NavLink className={styles.link} activeclassname="active" to="/privacidad">
        Privacidad
      </NavLink>
    </div>
  );
};

export default Navbar;
