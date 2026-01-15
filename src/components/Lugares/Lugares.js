import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Lugares.css";
import museoArmas from "./Museo Armas.jpg";

const Lugares = () => {
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
    <main className="lugares">
      <header className="lugares__hero">
        <p className="lugares__eyebrow">Lugares para visitar</p>
        <h1 className="lugares__title">Estancia Jesuitica de Caroya</h1>
        <p className="lugares__subtitle">
          Historia, arquitectura y memoria viva del Camino de los Jesuitas.
        </p>
      </header>

      <section className="lugares__card">
        <div
          className="lugares__media"
          role="button"
          tabIndex={0}
          onClick={openImage}
          onKeyDown={handleKeyDown}
          aria-label="Agrandar imagen"
        >
          <img src={museoArmas} alt="Museo Historico y de los Inmigrantes" />
          <div className="lugares__overlay">Haz click para agrandar</div>
        </div>
        <div className="lugares__content">
          <p>
            La Estancia Jesuitica de Caroya se encuentra a 50 kilometros al
            norte de la ciudad de Cordoba, en la localidad de Colonia Caroya.
            Esta estancia fue el primer establecimiento rural organizado que
            poseyeron los jesuitas en 1616. Junto a las otras estancias
            jesuiticas de la provincia de Cordoba, ha sido declarada Patrimonio
            de la Humanidad por la UNESCO.
          </p>
          <p>
            El conjunto edificado de la Estancia Caroya conserva la estructura
            colonial original con algunas modificaciones que se realizaron a
            comienzos del siglo XIX. En su interior, esta compuesta por un patio
            central en claustro y la Capilla original del siglo XVII con paredes
            de piedra y una imagen de la Virgen de Monserrat en el altar.
            Ademas, cuenta con un perchel, el tajamar, restos del molino y de
            las acequias, y las areas dedicadas a quinta.
          </p>
          <p>
            Actualmente, en la Estancia Jesuitica Caroya se puede realizar una
            visita guiada por el actual Museo Historico y de los Inmigrantes,
            donde se conservan muebles y objetos de la epoca colonial de gran
            valor. La visita incluye recorridos por el predio donde se podran
            conocer los sistemas productivos y tecnicos empleados por los
            jesuitas.
          </p>
          <p>
            Como parte del Camino de los Jesuitas en la region, se puede
            recorrer el "Camino de las Estancias Jesuiticas"; un itinerario
            turistico cultural que permite conocer la Manzana Jesuitica de
            Cordoba y las cinco estancias jesuiticas declaradas Patrimonio
            Mundial de la Humanidad por la UNESCO.
          </p>
        </div>
      </section>

      <section className="lugares__credit">
        <span className="lugares__credit-label">Creditos</span>
        <p className="lugares__credit-name">Agencia Cordoba Turistica</p>
        <a
          className="lugares__credit-link"
          href="https://www.caminodelosjesuitas.com/"
          target="_blank"
          rel="noreferrer"
        >
          www.caminodelosjesuitas.com
        </a>
      </section>

      <NavLink className="button lugares__back" to="/">
        Volver al Inicio
      </NavLink>

      {isOpen && (
        <div className="lugares__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="lugares__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={museoArmas} alt="Museo Historico y de los Inmigrantes" />
            <button type="button" className="lugares__lightbox-hint" onClick={closeImage}>
              Click para achicar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Lugares;
