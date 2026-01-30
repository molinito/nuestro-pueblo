import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileOpen((current) => !current);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsMobileOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <button
        type="button"
        className={styles.mobileToggle}
        onClick={toggleMobileMenu}
        aria-expanded={isMobileOpen}
        aria-controls="main-nav-links"
      >
        <span className={styles.mobileToggleText}>Menú</span>
        <span className={styles.mobileToggleIcon} aria-hidden="true">
          <span className={styles.mobileToggleBar} />
          <span className={styles.mobileToggleBar} />
          <span className={styles.mobileToggleBar} />
        </span>
      </button>
      <div
        id="main-nav-links"
        className={`${styles.navLinks} ${isMobileOpen ? styles.navLinksOpen : ""}`}
      >
        <NavLink className={styles.link} activeclassname="active" exact="true" to="/" onClick={closeAllMenus}>
          Inicio
        </NavLink>
        <NavLink className={styles.link} activeclassname="active" to="/acerca-de" onClick={closeAllMenus}>
          Sobre mí
        </NavLink>
        <NavLink className={styles.link} activeclassname="active" to="/contacto" onClick={closeAllMenus}>
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
            <NavLink className={styles.dropdownLink} activeclassname="active" to="/historia" onClick={closeAllMenus}>
              Historia
            </NavLink>
            <NavLink className={styles.dropdownLink} activeclassname="active" to="/lugares" onClick={closeAllMenus}>
              Lugares
            </NavLink>
            <NavLink className={styles.dropdownLink} activeclassname="active" to="/costumbres" onClick={closeAllMenus}>
              Costumbres
            </NavLink>
            <NavLink className={styles.dropdownLink} activeclassname="active" to="/ayer-hoy" onClick={closeAllMenus}>
              Ayer y Hoy
            </NavLink>
            <NavLink className={styles.dropdownLink} activeclassname="active" to="/personajes" onClick={closeAllMenus}>
              Personajes
            </NavLink>
            <NavLink className={styles.dropdownLink} activeclassname="active" to="/gastronomia" onClick={closeAllMenus}>
              Gastronomía
            </NavLink>
            <NavLink className={styles.dropdownLink} activeclassname="active" to="/eventos" onClick={closeAllMenus}>
              Eventos
            </NavLink>
          </div>
        </div>
        <NavLink className={styles.link} activeclassname="active" to="/donacion" onClick={closeAllMenus}>
          Colaboración
        </NavLink>
        <NavLink className={styles.link} activeclassname="active" to="/terminos" onClick={closeAllMenus}>
          Términos y Condiciones
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
