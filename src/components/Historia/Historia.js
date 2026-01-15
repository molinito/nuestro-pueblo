import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Historia.css";
import museo from "../../img/museo.jpg";

const Historia = () => {
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
    <main className="historia">
      <header className="historia__hero">
        <p className="historia__eyebrow">Nuestra historia</p>
        <h1 className="historia__title">Museo Jesuítico de Jesús María</h1>
        <p className="historia__subtitle">
          Un recorrido por la herencia jesuita y la memoria cultural de la región.
        </p>
      </header>

      <section className="historia__card">
        <div
          className="historia__media"
          role="button"
          tabIndex={0}
          onClick={openImage}
          onKeyDown={handleKeyDown}
          aria-label="Agrandar imagen"
        >
          <img src={museo} alt="Museo Jesuítico de Jesús María" />
          <div className="historia__overlay">Haz click para agrandar</div>
        </div>
        <div className="historia__content">
          <p>
            Museo Jesuítico de Jesús María en Córdoba, Argentina. El museo es un
            importante sitio histórico y cultural que representa la herencia jesuita
            en la región. Se encuentra en la ciudad de Jesús María, que tiene una
            rica historia relacionada con la presencia de la Compañía de Jesús en el
            siglo XVII. El Museo Jesuítico se estableció en una antigua estancia
            jesuita, conocida como Estancia de Jesús María, que data del siglo XVII.
            La estancia fue un centro agrícola y ganadero, y los jesuitas jugaron un
            papel significativo en el desarrollo de la región durante su estadía en
            el lugar.
          </p>
          <p>
            El museo exhibe una variedad de objetos y artefactos históricos que
            ilustran la vida y el trabajo de los jesuitas en la estancia, así como la
            influencia que tuvieron en la comunidad local y en la evangelización de
            la población indígena. Además de las exposiciones permanentes, el museo
            también alberga eventos culturales y actividades educativas para los
            visitantes. Es un destino interesante para aquellos interesados en la
            historia jesuita, la historia colonial argentina y la preservación del
            patrimonio cultural. Si tienes la oportunidad de visitar Jesús María, te
            recomiendo que no te pierdas la experiencia de conocer este fascinante
            museo y sumergirte en la historia de la región.
          </p>
        </div>
      </section>

      <NavLink className="button historia__back" to="/">
        Volver al Inicio
      </NavLink>

      {isOpen && (
        <div className="historia__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="historia__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={museo} alt="Museo Jesuítico de Jesús María" />
            <button type="button" className="historia__lightbox-hint" onClick={closeImage}>
              Click para achicar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Historia;
