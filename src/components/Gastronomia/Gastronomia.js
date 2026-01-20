import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Gastronomia.css";
import comidasTipicas from "./comidas-tipicas.webp";

const Gastronomia = () => {
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
    <main className="gastronomia">
      <header className="gastronomia__hero">
        <p className="gastronomia__eyebrow">Nuestros sabores</p>
        <h1 className="gastronomia__title">Fiesta de las Comidas Típicas Caroyenses</h1>
        <p className="gastronomia__subtitle">
          Tradición, identidad y patrimonio gastronómico de Colonia Caroya.
        </p>
      </header>

      <section className="gastronomia__card">
        <div className="gastronomia__media-block">
          <div
            className="gastronomia__media"
            role="button"
            tabIndex={0}
            onClick={openImage}
            onKeyDown={handleKeyDown}
            aria-label="Agrandar imagen"
          >
            <img
              src={comidasTipicas}
              alt="Fiesta de las Comidas Típicas Caroyenses"
            />
            <div className="gastronomia__overlay">Haz click para agrandar</div>
          </div>
          <div className="gastronomia__credit">
            <span>Foto: extraída de https://radiojesusmaria.com.ar/</span>
            <span>Texto: https://coloniacaroyaturismo.gob.ar/</span>
          </div>
        </div>
        <div className="gastronomia__content">
          <p>
            La Fiesta de las Comidas Típicas Caroyenses busca enaltecer los platos
            tradicionales heredados por los primeros colonos, de preparación simple,
            pero de gran carga cultural, que representan la idiosincrasia de la
            región y se han convertido en un patrimonio gastronómico de Colonia
            Caroya. Desde sus inicios en 1989, el evento ha sido una iniciativa
            conjunta del sector público, privado y grupos culturales, para mostrar
            el potencial gastronómico y cultural de los caroyenses.
          </p>
          <p>
            Las tradiciones y costumbres de origen friulano se reflejan en los
            platos típicos, la música, el baile y las artesanías que se ofrecen a
            los visitantes.
          </p>
        </div>
      </section>

      <NavLink className="button gastronomia__back" to="/">
        Volver al Inicio
      </NavLink>

      {isOpen && (
        <div className="gastronomia__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="gastronomia__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={comidasTipicas} alt="Fiesta de las Comidas Típicas Caroyenses" />
            <button type="button" className="gastronomia__lightbox-hint" onClick={closeImage}>
              Click para achicar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gastronomia;
