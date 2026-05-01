import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./Lugares.css";
import { estanciaJesuitica } from "./estancia-jesuitica/data";
import { postaSinsacate } from "./sinsacate/data";
import { sinsaCarruajes } from "./sinsa-carruajes/data";
import { casaGuyon } from "./casa-guyon/data";
import { casaCopetti } from "./copetti/data";
import { iglesiaMonserrat } from "./iglesia-monserrat/data";
import { estacionTren } from "./estacion-tren/data";
import {
  estacionCaroya,
  estacionCaroyaParte2,
  estacionCaroyaParte3
} from "./eynard/data";

const lugares = [
  estanciaJesuitica,
  postaSinsacate,
  sinsaCarruajes,
  estacionTren,
  estacionCaroya,
  estacionCaroyaParte2,
  estacionCaroyaParte3,
  casaGuyon,
  casaCopetti,
  iglesiaMonserrat
];

const hasLugarId = (id) => lugares.some((lugar) => lugar.id === id);

const Lugares = () => {
  const { lugarId } = useParams();
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const currentLightboxPhoto = lightbox ? lightbox.gallery[lightbox.index] : null;
  const lightboxImageSrc =
    currentLightboxPhoto &&
    lightbox?.showReference &&
    currentLightboxPhoto.referenceSrc
      ? currentLightboxPhoto.referenceSrc
      : currentLightboxPhoto?.src;

  const scrollToLugar = (id, behavior = "auto") => {
    const header = document.getElementById(`lugares-header-${id}`);
    if (!header) return;
    header.scrollIntoView({ block: "start", behavior });
    window.scrollBy(0, -90);
  };

  const toggleItem = (id) => {
    setOpenId((current) => {
      const nextId = current === id ? null : id;
      navigate(nextId ? `/lugares/${nextId}` : "/lugares");
      if (nextId) window.setTimeout(() => scrollToLugar(nextId, "smooth"), 60);
      return nextId;
    });
  };

  const openImage = (src, alt, gallery = [{ src, alt }], index = 0) =>
    setLightbox({ gallery, index, showReference: false });
  const closeImage = () => setLightbox(null);
  const showPrevImage = () => {
    setLightbox((current) => {
      if (!current || current.gallery.length <= 1) return current;
      const nextIndex =
        (current.index - 1 + current.gallery.length) % current.gallery.length;
      return { ...current, index: nextIndex, showReference: false };
    });
  };
  const showNextImage = () => {
    setLightbox((current) => {
      if (!current || current.gallery.length <= 1) return current;
      const nextIndex = (current.index + 1) % current.gallery.length;
      return { ...current, index: nextIndex, showReference: false };
    });
  };
  const toggleLightboxReference = () => {
    setLightbox((current) => {
      if (!current) return current;
      const nextShowReference = !current.showReference;
      return {
        ...current,
        showReference: nextShowReference
      };
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

  useLayoutEffect(() => {
    if (!lugarId) return;
    if (!hasLugarId(lugarId)) return;
    setOpenId(lugarId);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => scrollToLugar(lugarId, "auto"))
    );
  }, [lugarId]);

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
                {!isOpen && (
                  <span className="lugares__toggle-secondary">Abrir +</span>
                )}
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
                        {lugar.paragraphs.map((paragraph, index) => {
                          if (typeof paragraph === "string") {
                            return <p key={`${lugar.id}-p-${index}`}>{paragraph}</p>;
                          }
                          return (
                            <p key={`${lugar.id}-p-${index}`}>
                              {paragraph.strong ? (
                                <strong>{paragraph.text}</strong>
                              ) : (
                                paragraph.text
                              )}
                              {paragraph.linkText && paragraph.linkHref && (
                                <>
                                  {" "}
                                  <a href={paragraph.linkHref}>
                                    <strong>{paragraph.linkText}</strong>
                                  </a>
                                </>
                              )}
                            </p>
                          );
                        })}
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
                        {lugar.videoHref && lugar.videoPosition !== "afterGallery" && (
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
                            {lugar.videoCredit && (
                              <p className="lugares__video-credit">{lugar.videoCredit}</p>
                            )}
                          </div>
                        )}
                        {lugar.credit && (
                          <div className="lugares__credit-inline">
                            <span className="lugares__credit-label">Créditos</span>
                            <p className="lugares__credit-name">{lugar.credit.name}</p>
                            {lugar.credit.noteLabel && lugar.credit.noteName && (
                              <>
                                <p className="lugares__credit-note">
                                  {lugar.credit.noteLabel}
                                </p>
                                <p className="lugares__credit-note">
                                  <strong>{lugar.credit.noteName}</strong>
                                </p>
                              </>
                            )}
                            {lugar.credit.note && !lugar.credit.noteLabel && (
                              <p className="lugares__credit-note">{lugar.credit.note}</p>
                            )}
                          </div>
                        )}
                      </div>

                      {(() => {
                        const galleryMarkup = (
                          <div
                            className={`lugares__gallery${
                              lugar.galleryCaptioned ? " is-captioned" : ""
                            }`}
                          >
                            {lugar.gallery.map((photo, index) => {
                              const isFeature = !lugar.galleryCaptioned && index === 0;
                              const isTall = !lugar.galleryCaptioned && index === 4;
                              return (
                                <div
                                  key={photo.src}
                                  className={`lugares__gallery-item${
                                    isFeature ? " is-feature" : ""
                                  }${isTall ? " is-tall" : ""}`}
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
                                  <div className="lugares__gallery-frame">
                                    <img src={photo.src} alt={photo.alt} />
                                    <div className="lugares__overlay">
                                      Haz click para agrandar
                                    </div>
                                  </div>
                                  {(photo.title || photo.caption) && (
                                    <div className="lugares__gallery-caption">
                                      {photo.title && (
                                        <p className="lugares__gallery-title">
                                          {photo.title}
                                        </p>
                                      )}
                                      {photo.caption && (
                                        <p className="lugares__gallery-text">
                                          {photo.caption}
                                        </p>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        );

                        const videoMarkup =
                          lugar.videoHref && lugar.videoPosition === "afterGallery" ? (
                            <div
                              className="lugares__video-card"
                              id={`lugares-video-${lugar.id}`}
                            >
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
                              {lugar.videoCredit && (
                                <p className="lugares__video-credit">{lugar.videoCredit}</p>
                              )}
                              {lugar.videoCreditText && lugar.videoCreditLinkHref && (
                                <p className="lugares__video-credit">
                                  {lugar.videoCreditText}{" "}
                                  <a href={lugar.videoCreditLinkHref}>
                                    <strong>{lugar.videoCreditLinkText}</strong>
                                  </a>
                                </p>
                              )}
                            </div>
                          ) : null;

                        if (videoMarkup || lugar.galleryCredits || lugar.galleryCreditsNote) {
                          return (
                            <div className="lugares__gallery-column">
                              {galleryMarkup}
                              {(lugar.galleryCredits ||
                                lugar.galleryCreditsNote ||
                                lugar.galleryCreditsExtraText) && (
                                <div className="lugares__gallery-credits">
                                  {lugar.galleryCredits && (
                                    <p className="lugares__gallery-credit">
                                      {lugar.galleryCredits}
                                    </p>
                                  )}
                                  {lugar.galleryCreditsNote && (
                                    <p className="lugares__gallery-credit">
                                      {lugar.galleryCreditsNote}
                                    </p>
                                  )}
                                  {lugar.galleryCreditsExtraText && (
                                    <p className="lugares__gallery-credit">
                                      {lugar.galleryCreditsExtraText}{" "}
                                      {lugar.galleryCreditsExtraLinkText &&
                                      lugar.galleryCreditsExtraLinkHref ? (
                                        <a href={lugar.galleryCreditsExtraLinkHref}>
                                          <strong>
                                            {lugar.galleryCreditsExtraLinkText}
                                          </strong>
                                        </a>
                                      ) : null}
                                    </p>
                                  )}
                                </div>
                              )}
                              {videoMarkup}
                            </div>
                          );
                        }

                        return galleryMarkup;
                      })()}
                      {isOpen && (
                        <div className="lugares__panel-actions">
                          <button
                            type="button"
                            className="lugares__panel-toggle"
                            onClick={() => toggleItem(lugar.id)}
                          >
                            Cerrar —
                          </button>
                        </div>
                      )}
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
            <div className="lugares__lightbox-imageWrap">
              <img src={lightboxImageSrc} alt={currentLightboxPhoto?.alt || ""} />
              {(lightbox.showReference || currentLightboxPhoto?.identificationOverlay) &&
                Array.isArray(currentLightboxPhoto?.identification) &&
                currentLightboxPhoto.identification.length > 0 && (
                  <div className="lugares__lightbox-identOverlay" aria-label="Identificación">
                    <p className="lugares__lightbox-identTitle">
                      Identificación (1–{currentLightboxPhoto.identification.length})
                    </p>
                    <p className="lugares__lightbox-identInline">
                      {currentLightboxPhoto.identification
                        .map((name, idx) => `${idx + 1}. ${name}`)
                        .join("; ")}
                      .
                    </p>
                  </div>
                )}
            </div>

            <div className="lugares__lightbox-meta">
            {currentLightboxPhoto?.caption && (
              <p className="lugares__lightbox-caption">
                {currentLightboxPhoto.caption
                  .split("\n")
                    .map((line, idx, arr) => (
                      <span key={`${lightbox.index}-caption-${idx}`}>
                        {line}
                        {idx < arr.length - 1 && <br />}
                      </span>
                    ))}
                </p>
              )}
            </div>
            {Array.isArray(currentLightboxPhoto?.identification) &&
              currentLightboxPhoto.identification.length > 0 &&
              !currentLightboxPhoto.referenceSrc &&
              !currentLightboxPhoto.identificationOverlay && (
                <ol className="lugares__lightbox-ident">
                  {currentLightboxPhoto.identification.map((name, idx) => (
                    <li key={`${lightbox.index}-ident-${idx}`}>{name}</li>
                  ))}
                </ol>
              )}
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
            {currentLightboxPhoto?.lightboxLabel && (
              <p className="lugares__lightbox-description">
                {currentLightboxPhoto.lightboxLabel}
              </p>
            )}
            <div className="lugares__lightbox-actions">
              {lightbox.gallery.length > 1 && (
                <span className="lugares__lightbox-counter">
                  {lightbox.index + 1} / {lightbox.gallery.length}
                </span>
              )}
              {currentLightboxPhoto?.referenceSrc && (
                <button
                  type="button"
                  className="lugares__lightbox-hint"
                  onClick={toggleLightboxReference}
                >
                  {lightbox.showReference
                    ? "Ver foto colorizada"
                    : currentLightboxPhoto.referenceLabel || "Ver foto original numerada"}
                </button>
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
