import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./Lugares.css";
import museoArmas from "./Museo Armas.webp";
import guyon from "./guyon.webp";
import guyon1 from "./guyon1.webp";
import guyon2 from "./guyon2.webp";
import guyon3 from "./guyon3.webp";
import guyon4 from "./guyon4.webp";
import guyon5 from "./guyon5.webp";
import guyon6 from "./guyon6.webp";
import guyon7 from "./guyon7.webp";
import guyon8 from "./guyon8.webp";
import whatsapp1 from "./monserrat-1.webp";
import whatsapp2 from "./monserrat-2.webp";
import whatsapp3 from "./monserrat-3.webp";
import whatsapp4 from "./monserrat-4.webp";
import whatsapp5 from "./monserrat-5.webp";
import whatsapp6 from "./monserrat-6.webp";
import whatsapp7 from "./monserrat-7.webp";
import whatsapp8 from "./monserrat-8.webp";
import whatsapp9 from "./monserrat-9.webp";
import whatsapp10 from "./monserrat-10.webp";
import whatsapp11 from "./monserrat-11.webp";
import whatsapp12 from "./monserrat-12.webp";
import whatsapp13 from "./monserrat-13.webp";
import whatsapp14 from "./monserrat-14.webp";
import whatsapp15 from "./monserrat-15.webp";
import whatsapp16 from "./monserrat-16.webp";
import whatsapp17 from "./monserrat-17.webp";
import whatsapp18 from "./monserrat-18.webp";
import whatsapp19 from "./monserrat-19.webp";
import whatsapp20 from "./monserrat-20.webp";

const guyonPhotos = [
  { src: guyon, alt: "Casa Guyón: fachada principal" },
  { src: guyon1, alt: "Casa Guyón: carruaje antiguo en interiores" },
  { src: guyon2, alt: "Casa Guyón: muros y vegetación en el jardín" },
  { src: guyon3, alt: "Casa Guyón: arco y ladrillos cubiertos de hiedra" },
  { src: guyon4, alt: "Casa Guyón: galería interior con vegetación" },
  { src: guyon5, alt: "Casa Guyón: estructura de madera en el parque" },
  { src: guyon6, alt: "Casa Guyón: reja ornamental y campana" },
  { src: guyon7, alt: "Casa Guyón: sendero en el jardín botánico" },
  { src: guyon8, alt: "Casa Guyón: vista lateral de los jardines" },
];

const monserratPhotos = [
  { src: whatsapp1, alt: "Parroquia Nuestra Señora de Monserrat: vista exterior 1" },
  { src: whatsapp2, alt: "Parroquia Nuestra Señora de Monserrat: vista exterior 2" },
  { src: whatsapp3, alt: "Parroquia Nuestra Señora de Monserrat: vista exterior 3" },
  { src: whatsapp4, alt: "Parroquia Nuestra Señora de Monserrat: vista exterior 4" },
  { src: whatsapp5, alt: "Parroquia Nuestra Señora de Monserrat: detalle arquitectónico" },
  { src: whatsapp6, alt: "Parroquia Nuestra Señora de Monserrat: interior 1" },
  { src: whatsapp7, alt: "Parroquia Nuestra Señora de Monserrat: interior 2" },
  { src: whatsapp8, alt: "Parroquia Nuestra Señora de Monserrat: interior 3" },
  { src: whatsapp9, alt: "Parroquia Nuestra Señora de Monserrat: interior 4" },
  { src: whatsapp10, alt: "Parroquia Nuestra Señora de Monserrat: interior 5" },
  { src: whatsapp11, alt: "Parroquia Nuestra Señora de Monserrat: interior 6" },
  { src: whatsapp12, alt: "Parroquia Nuestra Señora de Monserrat: interior 7" },
  { src: whatsapp13, alt: "Parroquia Nuestra Señora de Monserrat: interior 8" },
  { src: whatsapp14, alt: "Parroquia Nuestra Señora de Monserrat: interior 9" },
  { src: whatsapp15, alt: "Parroquia Nuestra Señora de Monserrat: interior 10" },
  { src: whatsapp16, alt: "Parroquia Nuestra Señora de Monserrat: interior 11" },
  { src: whatsapp17, alt: "Parroquia Nuestra Señora de Monserrat: interior 12" },
  { src: whatsapp18, alt: "Parroquia Nuestra Señora de Monserrat: interior 13" },
  { src: whatsapp19, alt: "Parroquia Nuestra Señora de Monserrat: interior 14" },
  { src: whatsapp20, alt: "Parroquia Nuestra Señora de Monserrat: interior 15" },
];

const lugares = [
  {
    id: "estancia-jesuitica",
    title: "Estancia Jesuítica de Caroya",
    summary:
      "El primer establecimiento jesuítico rural de la región, declarado Patrimonio de la Humanidad.",
    type: "single",
    image: museoArmas,
    alt: "Museo Histórico y de los Inmigrantes",
    paragraphs: [
      "La Estancia Jesuítica de Caroya se encuentra a 50 kilómetros al norte de la ciudad de Córdoba, en la localidad de Colonia Caroya. Esta estancia fue el primer establecimiento rural organizado que poseyeron los jesuitas en 1616. Junto a las otras estancias jesuíticas de la provincia de Córdoba, ha sido declarada Patrimonio de la Humanidad por la UNESCO.",
      "El conjunto edificado de la Estancia Caroya conserva la estructura colonial original con algunas modificaciones que se realizaron a comienzos del siglo XIX. En su interior, está compuesta por un patio central en claustro y la Capilla original del siglo XVII con paredes de piedra y una imagen de la Virgen de Monserrat en el altar. Además, cuenta con un perchel, el tajamar, restos del molino y de las acequias, y las áreas dedicadas a quinta.",
      "Actualmente, en la Estancia Jesuítica Caroya se puede realizar una visita guiada por el actual Museo Histórico y de los Inmigrantes, donde se conservan muebles y objetos de la época colonial de gran valor. La visita incluye recorridos por el predio donde se podrán conocer los sistemas productivos y técnicos empleados por los jesuitas.",
      "Como parte del Camino de los Jesuitas en la región, se puede recorrer el \"Camino de las Estancias Jesuíticas\"; un itinerario turístico cultural que permite conocer la Manzana Jesuítica de Córdoba y las cinco estancias jesuíticas declaradas Patrimonio Mundial de la Humanidad por la UNESCO.",
    ],
    credit: {
      name: "Agencia Córdoba Turística",
      link: "https://www.caminodelosjesuitas.com/",
      linkLabel: "www.caminodelosjesuitas.com",
    },
  },
  {
    id: "casa-guyon",
    title: "Casa Guyón",
    summary:
      "La casona en ruinas y su parque botánico, testigos de una época de esplendor social.",
    type: "gallery",
    gallery: guyonPhotos,
    paragraphs: [
      "La Casa Guyón en Colonia Caroya, también conocida como el Chalet de Guyón o \"castillo\", es una histórica casona en ruinas ubicada en el Parque Urbano María Fogliarini de Guyón, en Avenida San Martín 1034, un espacio verde municipal que ahora alberga el Skate Bike Park y zonas recreativas, conservando vestigios de su opulencia pasada como parque botánico y lugar de vida social, a pesar de las disputas de herencia que la llevaron al abandono y la posterior recuperación municipal.",
    ],
    featuresTitle: "Historia y características",
    features: [
      {
        title: "Orígenes",
        text: "Construida por Antonio Guyón y María Fogliarini, una adinerada familia que heredó propiedades, convirtiéndola en un símbolo de riqueza con materiales importados y un estilo ecléctico.",
      },
      {
        title: "Lujo y grandeza",
        text: "Era un lugar suntuoso, con mobiliario importado, cristalería, un piano y un gran jardín que funcionaba casi como un zoológico con aves exóticas, pajareras y diversas plantas.",
      },
      {
        title: "Vida social",
        text: "Fue centro de reuniones políticas y tertulias, con un estilo que recordaba a un castillo europeo.",
      },
    ],
    credit: {
      name: "Fotos: Sr. Leandro Mariano, Facebook. Restauración: M. Saravia",
      note: "Textos: Google Sites",
    },
  },
  {
    id: "iglesia-monserrat",
    title: "Iglesia Nuestra Señora de Monserrat",
    summary:
      "El corazón espiritual e histórico de Colonia Caroya, legado de la inmigración friulana.",
    type: "gallery",
    gallery: monserratPhotos,
    videoLabel: "Documental de la Parroquia Nuestra Señora de Monserrat",
    videoHref: "https://youtu.be/DYSpm1Hci3k",
    videoThumbnail: "https://img.youtube.com/vi/DYSpm1Hci3k/hqdefault.jpg",
    paragraphs: [
      "La Parroquia Nuestra Señora de Monserrat es el corazón espiritual e histórico de Colonia Caroya, Córdoba. Inaugurada en 1896, fue construida por inmigrantes friulanos y es considerada un testimonio vivo de la colonización italiana en la región. En 2005, fue declarada Monumento Histórico Municipal.",
    ],
    credit: {
      name: "Fotos, video documental y texto narrativo Marcelo Saravia",
    },
  },
];

const hasLugarId = (id) => lugares.some((lugar) => lugar.id === id);

const Lugares = () => {
  const { lugarId } = useParams();
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const toggleItem = (id) => {
    setOpenId((current) => {
      const nextId = current === id ? null : id;
      navigate(nextId ? `/lugares/${nextId}` : "/lugares");
      return nextId;
    });
  };

  const openImage = (src, alt, gallery = [{ src, alt }], index = 0) =>
    setLightbox({ gallery, index });
  const closeImage = () => setLightbox(null);
  const showPrevImage = () => {
    setLightbox((current) => {
      if (!current || current.gallery.length <= 1) return current;
      const nextIndex =
        (current.index - 1 + current.gallery.length) % current.gallery.length;
      return { ...current, index: nextIndex };
    });
  };
  const showNextImage = () => {
    setLightbox((current) => {
      if (!current || current.gallery.length <= 1) return current;
      const nextIndex = (current.index + 1) % current.gallery.length;
      return { ...current, index: nextIndex };
    });
  };

  useEffect(() => {
    if (!lightbox) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") showPrevImage();
      if (event.key === "ArrowRight") showNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  useEffect(() => {
    if (!lugarId) return;
    if (hasLugarId(lugarId)) return;
    navigate("/lugares", { replace: true });
  }, [lugarId, navigate]);

  const handleToggleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <main className="lugares">
      <header className="lugares__hero">
        <p className="lugares__eyebrow">Lugares para visitar</p>
        <h1 className="lugares__title">Lugares de mi tierra...!!!</h1>
        <p className="lugares__subtitle">
          Postales, memoria y patrimonio que definen el pulso cultural de la región.
        </p>
      </header>

      <section className="lugares__accordion">
        {lugares.map((lugar) => {
          const isOpen = openId === lugar.id;
          const panelId = `lugares-panel-${lugar.id}`;
          const headerId = `lugares-header-${lugar.id}`;

          return (
            <article
              key={lugar.id}
              className={`lugares__item${isOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="lugares__toggle"
                onClick={() => toggleItem(lugar.id)}
                onKeyDown={(event) => handleToggleKeyDown(event, lugar.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                id={headerId}
              >
                <span className="lugares__toggle-title">{lugar.title}</span>
                <span className="lugares__toggle-summary">{lugar.summary}</span>
                <span className="lugares__toggle-icon">
                  {isOpen ? "Cerrar —" : "Abrir +"}
                </span>
              </button>

              <div
                className="lugares__panel"
                id={panelId}
                role="region"
                aria-labelledby={headerId}
              >
                <div className="lugares__panel-inner">
                  {lugar.type === "single" && (
                    <div
                      className="lugares__media"
                      role="button"
                      tabIndex={0}
                      onClick={() => openImage(lugar.image, lugar.alt)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          openImage(lugar.image, lugar.alt);
                        }
                      }}
                      aria-label={`Agrandar imagen: ${lugar.alt}`}
                    >
                      <img src={lugar.image} alt={lugar.alt} />
                      <div className="lugares__overlay">Haz click para agrandar</div>
                    </div>
                  )}

                  {lugar.type === "gallery" && (
                    <>
                      <div className="lugares__content">
                        {lugar.paragraphs.map((paragraph, index) => (
                          <p key={`${lugar.id}-p-${index}`}>{paragraph}</p>
                        ))}
                        {lugar.featuresTitle && (
                          <p className="lugares__panel-subtitle">{lugar.featuresTitle}</p>
                        )}
                        {lugar.features && (
                          <ul className="lugares__list">
                            {lugar.features.map((feature) => (
                              <li key={feature.title}>
                                <strong>{feature.title}:</strong> {feature.text}
                              </li>
                            ))}
                          </ul>
                        )}
                        {lugar.videoHref && (
                          <div className="lugares__video-card">
                            <p className="lugares__panel-subtitle">{lugar.videoLabel}</p>
                            <a
                              className="lugares__video-link"
                              href={lugar.videoHref}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                className="lugares__video-thumb"
                                src={lugar.videoThumbnail}
                                alt={lugar.videoLabel}
                              />
                              <span className="lugares__video-cta">
                                Ver documental en YouTube
                              </span>
                            </a>
                          </div>
                        )}
                        {lugar.credit && (
                          <div className="lugares__credit-inline">
                            <span className="lugares__credit-label">Créditos</span>
                            <p className="lugares__credit-name">{lugar.credit.name}</p>
                            {lugar.credit.note && (
                              <p className="lugares__credit-note">{lugar.credit.note}</p>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="lugares__gallery">
                        {lugar.gallery.map((photo, index) => (
                          <div
                            key={photo.src}
                            className={`lugares__gallery-item${
                              index === 0 ? " is-feature" : ""
                            }${index === 4 ? " is-tall" : ""}`}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                openImage(photo.src, photo.alt, lugar.gallery, index);
                              }
                            }}
                            onClick={() =>
                              openImage(photo.src, photo.alt, lugar.gallery, index)
                            }
                            aria-label={`Agrandar imagen: ${photo.alt}`}
                          >
                            <img src={photo.src} alt={photo.alt} />
                            <div className="lugares__overlay">Haz click para agrandar</div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {lugar.type === "single" && (
                    <div className="lugares__content">
                      {lugar.paragraphs.map((paragraph, index) => (
                        <p key={`${lugar.id}-p-${index}`}>{paragraph}</p>
                      ))}
                      {lugar.credit && (
                        <div className="lugares__credit-inline">
                          <span className="lugares__credit-label">Créditos</span>
                          <p className="lugares__credit-name">{lugar.credit.name}</p>
                          {lugar.credit.link && (
                            <a
                              className="lugares__credit-link"
                              href={lugar.credit.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {lugar.credit.linkLabel}
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <NavLink className="button lugares__back" to="/">
        Volver al Inicio
      </NavLink>

      {lightbox && (
        <div className="lugares__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="lugares__lightbox-content" onClick={(event) => event.stopPropagation()}>
            {lightbox.gallery.length > 1 && (
              <button
                type="button"
                className="lugares__lightbox-nav is-prev"
                onClick={showPrevImage}
                aria-label="Imagen anterior"
              >
                ‹
              </button>
            )}
            <img
              src={lightbox.gallery[lightbox.index].src}
              alt={lightbox.gallery[lightbox.index].alt}
            />
            {lightbox.gallery.length > 1 && (
              <button
                type="button"
                className="lugares__lightbox-nav is-next"
                onClick={showNextImage}
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            )}
            <div className="lugares__lightbox-actions">
              {lightbox.gallery.length > 1 && (
                <span className="lugares__lightbox-counter">
                  {lightbox.index + 1} / {lightbox.gallery.length}
                </span>
              )}
              <button type="button" className="lugares__lightbox-hint" onClick={closeImage}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Lugares;
