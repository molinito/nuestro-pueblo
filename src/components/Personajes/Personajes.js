import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Personajes.css";
import cufre from "./cufre.webp";
import donaMecha from "./donaMecha.webp";
import dolivo from "./dolivo.webp";
import dolivo1 from "./dolivo1.webp";
import dolivo2 from "./dolivo2.webp";

const personajes = [
  {
    id: "cufre",
    title: "Escenario Martín Fierro",
    summary: "Un recuerdo icónico con la platea colmada y maestros de ceremonia.",
    type: "single",
    image: cufre,
    alt: "Escenario Martín Fierro con maestros de ceremonia AISA-CUFRE",
    caption:
      "EL ESCENARIO MARTÍN FIERRO Y LOS MAESTROS DE CEREMONIA AISA-CUFRE (2 GRANDES) Y UNA PLATEA COLMADA... AÑOS 70 APROX.",
    credit: {
      name: "Jose Luis Diaz",
    },
  },
  {
    id: "dona-mecha",
    title: "Doña Mecha y el monumento a la madre",
    summary:
      "Una escena entrañable sobre la avenida Juan B. Justo en los años 60.",
    type: "single",
    image: donaMecha,
    alt: "Doña Mecha con sus hijos y un amigo junto al monumento a la madre",
    caption:
      "Monumento a la madre sobre la avenida Juan B. Justo del año 65 (en la foto está doña Mecha con sus 2 hijos y un amigo de ellos).",
    note:
      "Nota personal: ¡Cómo olvidar a doña Mecha! La llamábamos del alambrado, todos los recreos en frente de la escuela Ortiz de Ocampo, los que íbamos a la mañana o Laprida los de la tarde. Ella venía con la cajita con caramelos, tutucas, gallinitas, hasta sanguchitos de mortadela... Hice toda la primaria en el Ortiz de Ocampo, nunca supe el nombre de doña Mecha.",
    credit: {
      name: "Damian Javier Llames (Facebook)",
    },
  },
  {
    id: "oscar-dolivo",
    title:
      "El cordobés Oscar D’Olivo cumple 105 años y aconseja una clave: “Vivir sin rencores”.",
    summary:
      "Un siglo de vida y lucidez en la memoria viva de Jesús María.",
    type: "gallery",
    gallery: [
      { src: dolivo, alt: "Oscar D’Olivo en Jesús María" },
      { src: dolivo1, alt: "Retrato de Oscar D’Olivo" },
      { src: dolivo2, alt: "Oscar D’Olivo en la Plaza Nicolás Avellaneda" },
    ],
    paragraphs: [
      "Florentino Oscar D’Olivo cumple este domingo 105 años. Nació el 18 de enero de 1921 y es el onceavo de 14 hermanos: eran ocho mujeres y seis varones.",
      "Todavía recuerda cuando iba a la escuela sobre el lomo de un caballo, cuando las calles de su querida Colonia Caroya eran todas de tierra.",
      "Sentado en uno de los bancos de la Plaza Nicolás Avellaneda, ubicada frente a la casa donde vive desde hace 75 años, don Oscar saca a relucir su memoria privilegiada y esa lucidez que todos admiran.",
      "Es un personaje de su ciudad. Pero no sólo por su edad.",
      "Qué preguntarle a un hombre que ya ha dado todas las respuestas posibles, a lo largo de 105 años. “Un siglo y pico”, como le gusta decir, orgulloso de esa longevidad que lo convirtió en una celebridad local.",
    ],
    credit: {
      name: "Diario La Voz del Interior",
      link: "https://www.lavoz.com.ar/ciudadanos/el-cordobes-oscar-dolivo-cumple-105-anos-y-aconseja-una-clave-vivir-sin-rencores/",
      linkLabel: "lavoz.com.ar",
      note:
        "Aclaración: Solo se expone un fragmento de la historia de este personaje; para leerla completa, dirigirse al link mencionado, que pertenece al diario La Voz.",
    },
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
  const handleImageKeyDown = (event, src, alt) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImage(src, alt);
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
          const panelClassName = `personajes__panel-inner${
            personaje.type === "gallery" ? " personajes__panel-inner--gallery" : ""
          }`;

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
                <div className={panelClassName}>
                  {personaje.type === "gallery" ? (
                    <>
                      <div className="personajes__content">
                        {personaje.paragraphs.map((paragraph, index) => (
                          <p key={`${personaje.id}-p-${index}`} className="personajes__text">
                            {paragraph}
                          </p>
                        ))}
                        {personaje.credit && (
                          <div className="personajes__credit">
                            <span className="personajes__credit-label">Créditos</span>
                            <p className="personajes__credit-name">{personaje.credit.name}</p>
                            {personaje.credit.link && (
                              <a
                                className="personajes__credit-link"
                                href={personaje.credit.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {personaje.credit.linkLabel}
                              </a>
                            )}
                            {personaje.credit.note && (
                              <p className="personajes__credit-note">{personaje.credit.note}</p>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="personajes__gallery">
                        {personaje.gallery.map((foto, index) => (
                          <div
                            key={foto.src}
                            className={`personajes__gallery-item${
                              index === 0 ? " is-feature" : ""
                            }`}
                            role="button"
                            tabIndex={0}
                            onClick={() => openImage(foto.src, foto.alt)}
                            onKeyDown={(event) => handleImageKeyDown(event, foto.src, foto.alt)}
                            aria-label={`Agrandar imagen: ${foto.alt}`}
                          >
                            <img src={foto.src} alt={foto.alt} />
                            <div className="personajes__overlay">Haz click para agrandar</div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="personajes__media"
                        role="button"
                        tabIndex={0}
                        onClick={() => openImage(personaje.image, personaje.alt)}
                        onKeyDown={(event) =>
                          handleImageKeyDown(event, personaje.image, personaje.alt)
                        }
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
                        {personaje.credit && (
                          <div className="personajes__credit">
                            <span className="personajes__credit-label">Créditos</span>
                            <p className="personajes__credit-name">{personaje.credit.name}</p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
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
