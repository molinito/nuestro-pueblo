import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Personajes.css";
import cufre from "./cufre.jpg";

const Personajes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openImage = () => setIsOpen(true);
  const closeImage = () => setIsOpen(false);
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImage();
    }
  };

  return (
    <main className="personajes">
      <header className="personajes__hero">
        <p className="personajes__eyebrow">Personajes de la zona</p>
        <h1 className="personajes__title">Memorias del escenario</h1>
        <p className="personajes__subtitle">
          Postales que celebran a quienes dejaron huella en la identidad
          cultural de nuestra tierra.
        </p>
      </header>

      <section className="personajes__card">
        <div
          className="personajes__media"
          role="button"
          tabIndex={0}
          onClick={openImage}
          onKeyDown={handleKeyDown}
          aria-label="Agrandar imagen"
        >
          <img
            src={cufre}
            alt="Escenario Martin Fierro con maestros de ceremonia AISA-CUFRE"
          />
          <div className="personajes__overlay">Haz click para agrandar</div>
        </div>
        <div className="personajes__content">
          <p className="personajes__caption">
            EL ESCENARIO MARTIN FIERRO Y LOS MAESTROS DE CEREMONIA AISA-CUFRE (2
            GRANDES) Y UNA PLATEA COLMADA... AÑOS 70 APROX.
          </p>
          <div className="personajes__credit">
            <span className="personajes__credit-label">Créditos</span>
            <p className="personajes__credit-name">Jose Luis Diaz</p>
          </div>
        </div>
      </section>

      <NavLink className="button personajes__back" to="/">
        Volver al Inicio
      </NavLink>

      {isOpen && (
        <div className="personajes__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="personajes__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img
              src={cufre}
              alt="Escenario Martin Fierro con maestros de ceremonia AISA-CUFRE"
            />
            <button type="button" className="personajes__lightbox-hint" onClick={closeImage}>
              Click para achicar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Personajes;
