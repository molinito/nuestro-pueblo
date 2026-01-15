import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Costumbres.css";
import fiestaSalame from "./Fiesta salame.jpg";

const Costumbres = () => {
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
    <main className="costumbres">
      <header className="costumbres__hero">
        <p className="costumbres__eyebrow">Nuestras costumbres</p>
        <h1 className="costumbres__title">Fiesta Nacional e Internacional del Salame</h1>
        <p className="costumbres__subtitle">
          Un homenaje a la tradición culinaria que identifica a Colonia Caroya.
        </p>
      </header>

      <section className="costumbres__card">
        <div className="costumbres__media-block">
          <div
            className="costumbres__media"
            role="button"
            tabIndex={0}
            onClick={openImage}
            onKeyDown={handleKeyDown}
            aria-label="Agrandar imagen"
          >
            <img
              src={fiestaSalame}
              alt="Fiesta Nacional e Internacional del Salame en Colonia Caroya"
            />
            <div className="costumbres__overlay">Haz click para agrandar</div>
          </div>
          <p className="costumbres__credit">Créditos Municipalidad Colonia Caroya</p>
        </div>
        <div className="costumbres__content">
          <p>
            Fiesta Nacional e Internacional del Salame en Colonia Caroya, Córdoba,
            Argentina. Esta fiesta es un evento anual que celebra la tradición
            gastronómica de la región y, en particular, el famoso salame quintero,
            un embutido típico de la zona. La Fiesta del Salame se lleva a cabo en
            Colonia Caroya, una localidad con una rica historia vinculada a la
            cultura italiana y la producción de embutidos. Durante el festival,
            los visitantes pueden disfrutar de una amplia variedad de actividades,
            como degustaciones de salame, concursos para elegir el mejor salame,
            exhibiciones de artesanías locales, música folclórica, danzas
            tradicionales y otras expresiones culturales. Es una fiesta muy
            popular que atrae a turistas locales e internacionales, así como a
            personas de otras provincias de Argentina. El ambiente festivo y la
            deliciosa comida hacen que esta celebración sea única y atractiva para
            todos los amantes de la gastronomía y la cultura. La Fiesta Nacional e
            Internacional del Salame Quintero es una oportunidad para que los
            habitantes de Colonia Caroya muestren con orgullo su tradición
            culinaria y para que los visitantes descubran y disfruten de la
            riqueza cultural de esta encantadora localidad en Córdoba. Si tienes
            la oportunidad de visitarla durante el festival, seguramente tendrás
            una experiencia memorable y sabrosa.
          </p>
        </div>
      </section>

      <NavLink className="button costumbres__back" to="/">
        Volver al Inicio
      </NavLink>

      {isOpen && (
        <div className="costumbres__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="costumbres__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img
              src={fiestaSalame}
              alt="Fiesta Nacional e Internacional del Salame en Colonia Caroya"
            />
            <button type="button" className="costumbres__lightbox-hint" onClick={closeImage}>
              Click para achicar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Costumbres;
