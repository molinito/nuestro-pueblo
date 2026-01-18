import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Personajes.css";
import cufre from "./cufre.jpg";
import donaMecha from "./doñaMecha.jpg";

const personajes = [
  {
    id: "cufre",
    title: "Escenario Martín Fierro",
    summary: "Un recuerdo icónico con la platea colmada y maestros de ceremonia.",
    image: cufre,
    alt: "Escenario Martín Fierro con maestros de ceremonia AISA-CUFRE",
    caption:
      "EL ESCENARIO MARTÍN FIERRO Y LOS MAESTROS DE CEREMONIA AISA-CUFRE (2 GRANDES) Y UNA PLATEA COLMADA... AÑOS 70 APROX.",
    credit: "Jose Luis Diaz",
  },
  {
    id: "dona-mecha",
    title: "Doña Mecha y el monumento a la madre",
    summary:
      "Una escena entrañable sobre la avenida Juan B. Justo en los años 60.",
    image: donaMecha,
    alt: "Doña Mecha con sus hijos y un amigo junto al monumento a la madre",
    caption:
      "Monumento a la madre sobre la avenida Juan B. Justo del año 65 (en la foto está doña Mecha con sus 2 hijos y un amigo de ellos).",
    note:
      "Nota personal: ¡Cómo olvidar a doña Mecha! La llamábamos del alambrado, todos los recreos en frente de la escuela Ortiz de Ocampo, los que íbamos a la mañana o Laprida los de la tarde. Ella venía con la cajita con caramelos, tutucas, gallinitas, hasta sanguchitos de mortadela... Hice toda la primaria en el Ortiz de Ocampo, nunca supe el nombre de doña Mecha.",
    credit: "Damian Javier Llames (Facebook)",
  },
];

const Personajes = () => {
  const [openId, setOpenId] = useState(personajes[0]?.id ?? null);
  const [lightbox, setLightbox] = useState(null);

  const toggleItem = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const openImage = (src, alt) => setLightbox({ src, alt });
  const closeImage = () => setLightbox(null);
  const handleToggleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(id);
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

      <section className="personajes__accordion">
        {personajes.map((personaje) => {
          const isOpen = openId === personaje.id;
          const panelId = `personajes-panel-${personaje.id}`;
          const headerId = `personajes-header-${personaje.id}`;

          return (
            <article
              key={personaje.id}
              className={`personajes__item${isOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="personajes__toggle"
                onClick={() => toggleItem(personaje.id)}
                onKeyDown={(event) => handleToggleKeyDown(event, personaje.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                id={headerId}
              >
                <span className="personajes__toggle-title">{personaje.title}</span>
                <span className="personajes__toggle-summary">{personaje.summary}</span>
                <span className="personajes__toggle-icon">
                  {isOpen ? "Cerrar —" : "Abrir +"}
                </span>
              </button>

              <div
                className="personajes__panel"
                id={panelId}
                role="region"
                aria-labelledby={headerId}
              >
                <div className="personajes__panel-inner">
                  <div
                    className="personajes__media"
                    role="button"
                    tabIndex={0}
                    onClick={() => openImage(personaje.image, personaje.alt)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openImage(personaje.image, personaje.alt);
                      }
                    }}
                    aria-label={`Agrandar imagen: ${personaje.alt}`}
                  >
                    <img src={personaje.image} alt={personaje.alt} />
                    <div className="personajes__overlay">Haz click para agrandar</div>
                  </div>
                  <div className="personajes__content">
                    <p className="personajes__caption">{personaje.caption}</p>
                    {personaje.note && (
                      <p className="personajes__note">{personaje.note}</p>
                    )}
                    <div className="personajes__credit">
                      <span className="personajes__credit-label">Créditos</span>
                      <p className="personajes__credit-name">{personaje.credit}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <NavLink className="button personajes__back" to="/">
        Volver al Inicio
      </NavLink>

      {lightbox && (
        <div className="personajes__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="personajes__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
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
