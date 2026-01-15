import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Eventos.css";
import jm from "../../img/jm.jpg";

const Eventos = () => {
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
    <main className="eventos">
      <header className="eventos__hero">
        <p className="eventos__eyebrow">Calendario de eventos</p>
        <h1 className="eventos__title">Festival Nacional de Doma y Folclore</h1>
        <p className="eventos__subtitle">
          Tradicion, musica y cultura gaucha en Jesus Maria.
        </p>
      </header>

      <section className="eventos__card">
        <div
          className="eventos__media"
          role="button"
          tabIndex={0}
          onClick={openImage}
          onKeyDown={handleKeyDown}
          aria-label="Agrandar imagen"
        >
          <img src={jm} alt="Festival Nacional de Doma y Folclore" />
          <div className="eventos__overlay">Haz click para agrandar</div>
        </div>
        <div className="eventos__content">
          <p>
            Festival Nacional de Doma y Folclore de Jesus Maria en Cordoba,
            Argentina. Es uno de los eventos mas emblematicos y tradicionales de
            la region y atrae a miles de personas de todo el pais y del
            extranjero. El festival se lleva a cabo anualmente en el mes de
            enero y tiene una duracion de alrededor de diez dias.
          </p>
          <p>
            Durante este tiempo, la ciudad de Jesus Maria se llena de musica,
            danza, tradiciones gauchas y actividades culturales. El evento
            principal del festival es la "doma", una competencia de jinetes
            montando a caballo, que muestra la destreza y habilidad de los
            gauchos argentinos para domar potros salvajes. Tambien hay
            espectaculos de musica folclorica y danzas tradicionales argentinas,
            donde se presentan artistas reconocidos y talentos emergentes del
            folclore argentino.
          </p>
          <p>
            El festival ofrece una experiencia inmersiva en la cultura gaucha y
            folclorica de Argentina. Los visitantes pueden disfrutar de la
            musica, la danza, la gastronomia tipica y otras manifestaciones
            culturales que hacen de esta celebracion una experiencia unica.
            Ademas, es una oportunidad para que los artistas locales y
            nacionales muestren su talento y para que los turistas y lugarenos
            disfruten de un ambiente festivo y alegre.
          </p>
          <p>
            Si tienes la oportunidad de visitar Jesus Maria en enero, te
            recomiendo que no te pierdas este festival, ya que te permitira
            vivir de cerca la esencia de la cultura gaucha y folclorica de
            Argentina.
          </p>
        </div>
      </section>

      <NavLink className="button eventos__back" to="/">
        Volver al Inicio
      </NavLink>

      {isOpen && (
        <div className="eventos__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="eventos__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={jm} alt="Festival Nacional de Doma y Folclore" />
            <button type="button" className="eventos__lightbox-hint" onClick={closeImage}>
              Click para achicar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Eventos;
