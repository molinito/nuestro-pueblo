import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./Lugares.css";
import { estanciaJesuitica } from "./estancia-jesuitica/data";
import { casaGuyon } from "./casa-guyon/data";
import { casaCopetti } from "./copetti/data";
import { iglesiaMonserrat } from "./iglesia-monserrat/data";

const lugares = [estanciaJesuitica, casaGuyon, casaCopetti, iglesiaMonserrat];

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
                {lugar.address && (
                  <span className="lugares__toggle-address">{lugar.address}</span>
                )}
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
                            {lugar.credit.noteLabel && lugar.credit.noteName && (
                              <p className="lugares__credit-note">
                                {lugar.credit.noteLabel} <strong>{lugar.credit.noteName}</strong>
                              </p>
                            )}
                            {lugar.credit.note && !lugar.credit.noteLabel && (
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
