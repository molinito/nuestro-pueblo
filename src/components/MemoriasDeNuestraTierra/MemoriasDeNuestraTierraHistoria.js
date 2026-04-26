import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Error404 from "../Error404/Error404";
import marthaCanalePhoto from "./martha-canale.webp";
import {
  MEMORIAS_BASE_PATH,
  getMemoriasHistoriaBySlug
} from "./data";
import usePageMeta from "./usePageMeta";
import "./MemoriasDeNuestraTierra.css";

const MemoriasDeNuestraTierraHistoria = () => {
  const { memoriaSlug } = useParams();
  const historia = getMemoriasHistoriaBySlug(memoriaSlug);
  const [lightbox, setLightbox] = useState(null);

  const isPublished = Boolean(historia && historia.status === "published");

  usePageMeta({
    title: isPublished
      ? `${historia.title} | Memorias de Nuestra Tierra`
      : "Memorias de Nuestra Tierra | Historias de Martha Canale",
    description: isPublished
      ? historia.description
      : "Historias reales de inmigrantes de Colonia Caroya recopiladas por Martha Canale en su libro Hacer la America."
  });

  const openImage = (gallery, index = 0) => setLightbox({ gallery, index });
  const closeImage = () => setLightbox(null);
  const showPrevImage = () => {
    setLightbox((current) => {
      if (!current || !Array.isArray(current.gallery) || current.gallery.length <= 1) return current;
      const nextIndex = (current.index - 1 + current.gallery.length) % current.gallery.length;
      return { ...current, index: nextIndex };
    });
  };
  const showNextImage = () => {
    setLightbox((current) => {
      if (!current || !Array.isArray(current.gallery) || current.gallery.length <= 1) return current;
      const nextIndex = (current.index + 1) % current.gallery.length;
      return { ...current, index: nextIndex };
    });
  };

  const handleImageKeyDown = (event, gallery, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImage(gallery, index);
    }
  };

  useEffect(() => {
    if (!lightbox) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowLeft") {
        setLightbox((current) => {
          if (!current || !Array.isArray(current.gallery) || current.gallery.length <= 1) return current;
          const nextIndex = (current.index - 1 + current.gallery.length) % current.gallery.length;
          return { ...current, index: nextIndex };
        });
      }
      if (event.key === "ArrowRight") {
        setLightbox((current) => {
          if (!current || !Array.isArray(current.gallery) || current.gallery.length <= 1) return current;
          const nextIndex = (current.index + 1) % current.gallery.length;
          return { ...current, index: nextIndex };
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  if (!isPublished) {
    return <Error404 />;
  }

  return (
    <main className="memorias__detail">
      <header className="memorias__ribbon" aria-label="Creditos del fragmento">
        <img
          className="memorias__ribbonPhoto"
          src={marthaCanalePhoto}
          alt="Martha Canale Vicentini"
          loading="lazy"
        />
        <div className="memorias__ribbonText">
          <p>
            <span>Fragmento del libro:</span>{" "}
            {"\"Hacer la America - Fare I\u2019America\""}
          </p>
          <p>
            <span>Autora:</span> Martha Canale Vicentini
          </p>
          <p className="memorias__ribbonNote">
            <span>Publicado</span> en acuerdo con Patricia Vicentini (hija)
          </p>
        </div>
      </header>

      <h1 className="memorias__detailTitle">{historia.title}</h1>
      <p className="memorias__detailIntro">{historia.intro}</p>

      <section className="memorias__fragment" aria-label="Fragmento pendiente">
        <h3>{historia.fragmentTitle ?? "Fragmento (pendiente de agregar)"}</h3>
        {Array.isArray(historia.fragment) ? (
          historia.fragment.map((paragraph, index) => {
            const gallery = Array.isArray(historia.inlineGalleries)
              ? historia.inlineGalleries.find(
                  (item) => item && item.afterParagraphIndex === index
                )
              : null;

            return (
              <React.Fragment key={`memorias-fragment-${index}`}>
                <p>{paragraph}</p>
                {gallery && Array.isArray(gallery.images) ? (
                  <div
                    className="memorias__gallery"
                    role="group"
                    aria-label="Galeria de imagenes del relato"
                  >
                    {gallery.images.slice(0, 2).map((image, imageIndex) => (
                      <figure
                        key={`memorias-gallery-${index}-${imageIndex}`}
                        className="memorias__galleryItem"
                        role="button"
                        tabIndex={0}
                        onClick={() => openImage(gallery.images, imageIndex)}
                        onKeyDown={(event) => handleImageKeyDown(event, gallery.images, imageIndex)}
                        aria-label={`Agrandar imagen: ${image.alt ?? "Imagen del relato"}`}
                      >
                        <img src={image.src} alt={image.alt ?? ""} loading="lazy" />
                        <div className="memorias__overlay">Haz click para agrandar</div>
                      </figure>
                    ))}
                  </div>
                ) : null}
              </React.Fragment>
            );
          })
        ) : (
          <p>
            {historia.fragmentPlaceholderText ??
              "Aqui se insertara el fragmento del libro, publicado con autorizacion de su familia."}
          </p>
        )}
      </section>

      <p className="memorias__closing">{historia.closing}</p>

      <section className="memorias__promo" aria-label="Promocion del libro">
        <p>
          {historia.bookPromoLead ?? historia.bookPromo ?? ""}
          {historia.bookPromoStrong ? <strong>{historia.bookPromoStrong}</strong> : null}
        </p>
      </section>

      <div className="memorias__backRow">
        <Link className="memorias__cardCta" to={MEMORIAS_BASE_PATH}>
          Volver a Memorias
        </Link>
      </div>

      {lightbox && Array.isArray(lightbox.gallery) ? (
        <div className="memorias__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div
            className="memorias__lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            {lightbox.gallery.length > 1 ? (
              <button
                type="button"
                className="memorias__lightbox-nav is-prev"
                onClick={showPrevImage}
                aria-label="Imagen anterior"
              >
                ‹
              </button>
            ) : null}
            <img
              src={lightbox.gallery[lightbox.index].src}
              alt={lightbox.gallery[lightbox.index].alt ?? ""}
            />
            {lightbox.gallery.length > 1 ? (
              <button
                type="button"
                className="memorias__lightbox-nav is-next"
                onClick={showNextImage}
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            ) : null}
            <div className="memorias__lightbox-actions">
              {lightbox.gallery.length > 1 ? (
                <span className="memorias__lightbox-counter">
                  {lightbox.index + 1} / {lightbox.gallery.length}
                </span>
              ) : null}
              <button type="button" className="memorias__lightbox-hint" onClick={closeImage}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default MemoriasDeNuestraTierraHistoria;
