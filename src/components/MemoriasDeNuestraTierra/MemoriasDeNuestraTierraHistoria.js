import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Error404 from "../Error404/Error404";
import marthaCanalePhoto from "./martha-canale.webp";
import {
  MEMORIAS_BASE_PATH,
  getMemoriasHistoriaBySlug
} from "./data";
import usePageMeta from "../../hooks/usePageMeta";
import "./MemoriasDeNuestraTierra.css";

const SITE_ORIGIN = "https://nuestro-pueblo.vercel.app";

const toAbsoluteUrl = (value) => {
  if (!value) return undefined;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `${SITE_ORIGIN}${value.startsWith("/") ? value : `/${value}`}`;
};

const MemoriasDeNuestraTierraHistoria = () => {
  const { memoriaSlug } = useParams();
  const location = useLocation();
  const historia = getMemoriasHistoriaBySlug(memoriaSlug);
  const [lightbox, setLightbox] = useState(null);
  const [closingNoticeAccepted, setClosingNoticeAccepted] = useState(() =>
    Boolean(location.state?.skipClosingNotice)
  );

  const isPublished = Boolean(historia && historia.status === "published");
  const shouldGateClosingStory = historia?.slug === "costumbres-comercios-personajes";
  const shouldSkipClosingNotice = Boolean(location.state?.skipClosingNotice);
  const shouldShowClosingNotice =
    isPublished && shouldGateClosingStory && !closingNoticeAccepted;
  const searchParams = new URLSearchParams(location.search);
  const timelineMission = searchParams.get("mision");
  const mapPoint = searchParams.get("punto");
  const source = searchParams.get("desde");
  const timelineReturnPath = timelineMission
    ? `/linea-de-tiempo?mision=${encodeURIComponent(timelineMission)}#misiones`
    : "/linea-de-tiempo#misiones";
  const mapReturnPath = mapPoint
    ? `/mapa-de-la-memoria?punto=${encodeURIComponent(mapPoint)}`
    : "/mapa-de-la-memoria";
  const shouldShowTimelineReturn = source === "linea-de-tiempo";
  const shouldShowMapReturn = source === "mapa-de-la-memoria";
  const pagePath = isPublished ? `${MEMORIAS_BASE_PATH}/${historia.slug}` : MEMORIAS_BASE_PATH;
  const pageUrl = `${SITE_ORIGIN}${pagePath}`;
  const articleSchema = isPublished
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: historia.title,
        description: historia.description,
        image: toAbsoluteUrl(historia.image),
        mainEntityOfPage: pageUrl,
        inLanguage: "es-AR",
        author: {
          "@type": "Person",
          name: "Martha Canale Vicentini"
        },
        publisher: {
          "@type": "Organization",
          name: "Nuestro Pueblo",
          url: SITE_ORIGIN
        },
        isPartOf: {
          "@type": "Book",
          name: "Hacer la América - Fare I’America"
        },
        ...(historia.relatedVideo
          ? {
              associatedMedia: {
                "@type": "VideoObject",
                name: historia.relatedVideo.title,
                url: historia.relatedVideo.href,
                thumbnailUrl: historia.relatedVideo.thumbnail
              }
            }
          : {})
      }
    : null;

  usePageMeta({
    title: isPublished
      ? `${historia.title} | Memorias de Nuestra Tierra`
      : "Memorias de Nuestra Tierra | Historias de Martha Canale",
    description: isPublished
      ? historia.description
      : "Historias reales de inmigrantes de Colonia Caroya recopiladas por Martha Canale en su libro Hacer la America."
    ,
    path: pagePath,
    image: isPublished ? historia.image : undefined,
    imageAlt: isPublished ? historia.imageAlt || historia.title : "Memorias de Nuestra Tierra",
    type: isPublished ? "article" : "website",
    structuredData: articleSchema
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
    setClosingNoticeAccepted(shouldSkipClosingNotice);
  }, [memoriaSlug, shouldSkipClosingNotice]);

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

  if (shouldShowClosingNotice) {
    return (
      <main className="memorias__detail memorias__detail--noticeOnly">
        <section
          className="memorias__closingNotice memorias__closingNotice--inline"
          role="dialog"
          aria-modal="false"
          aria-labelledby="memorias-closing-detail-notice-title"
        >
          <p className="memorias__closingNoticeEyebrow">Agradecimiento especial</p>
          <h2 id="memorias-closing-detail-notice-title">
            Antes de ingresar al último relato
          </h2>
          <p>
            Esta última historia ha sido editada y resumida para mostrar la mayor cantidad
            de contenido referente a los oficios, comercios y recuerdos de la primera
            Colonia, siempre respetando la esencia del libro{" "}
            <strong>Hacer la América</strong>.
          </p>
          <p>
            Mi más profundo agradecimiento a Patricia y Mónica Vicentini por permitirme
            publicar parte de este hermoso libro y honrar a Martha Canale Vicentini, su
            autora.
          </p>
          <p>
            Este último relato contiene nombres y apellidos, casi todos conocidos. Invito a
            familiares y amigos que quieran compartir alguna anécdota o foto de los
            personajes a hacerlo sin ningún compromiso, enviándome su mensaje por Facebook o
            WhatsApp.
          </p>
          <p>Gracias por permitirme ser parte de esta comunidad.</p>
          <div className="memorias__closingNoticeActions">
            <Link className="memorias__closingNoticeSecondary" to={MEMORIAS_BASE_PATH}>
              Volver
            </Link>
            <button
              className="memorias__closingNoticePrimary"
              type="button"
              onClick={() => setClosingNoticeAccepted(true)}
            >
              Ir al relato
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="memorias__detail">
      <header className="memorias__ribbon" aria-label="Creditos del fragmento">
        <img
          className="memorias__ribbonPhoto"
          src={marthaCanalePhoto}
          alt="Martha Canale Vicentini"
          loading="lazy"
          decoding="async"
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
            <span>Publicado</span> en acuerdo con Patricia y Mónica Vicentini (hijas)
          </p>
        </div>
      </header>

      <div className="memorias__detailHeader">
        <h1 className="memorias__detailTitle">{historia.title}</h1>
        {shouldShowTimelineReturn && (
          <Link className="memorias__timelineReturn memorias__timelineReturn--top" to={timelineReturnPath}>
            Volver a la Línea de tiempo
          </Link>
        )}
        {shouldShowMapReturn && (
          <Link className="memorias__mapReturn memorias__mapReturn--top" to={mapReturnPath}>
            Volver al Mapa
          </Link>
        )}
      </div>
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
                        <img
                          src={image.src}
                          alt={image.alt ?? ""}
                          loading="lazy"
                          decoding="async"
                        />
                        {image.caption ? (
                          <figcaption className="memorias__galleryCaption">
                            {image.caption}
                          </figcaption>
                        ) : null}
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

        {historia.relatedVideo ? (
          <div className="memorias__videoShare">
            <a
              className="memorias__videoLink"
              href={historia.relatedVideo.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="memorias__videoThumb">
                <img
                  src={historia.relatedVideo.thumbnail}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span className="memorias__videoPlay" aria-hidden="true">
                  ▶
                </span>
              </span>
              <span className="memorias__videoText">
                {historia.relatedVideo.title}
              </span>
            </a>
          </div>
        ) : null}
      </section>

      <p className="memorias__closing">{historia.closing}</p>

      <section className="memorias__promo" aria-label="Promocion del libro">
        <p>
          {historia.bookPromoLead ?? historia.bookPromo ?? ""}
          {historia.bookPromoStrong ? <strong>{historia.bookPromoStrong}</strong> : null}
        </p>
      </section>

      <div className="memorias__backRow">
        {shouldShowTimelineReturn && (
          <Link className="memorias__timelineReturn" to={timelineReturnPath}>
            Volver a la Línea de tiempo
          </Link>
        )}
        {shouldShowMapReturn && (
          <Link className="memorias__mapReturn" to={mapReturnPath}>
            Volver al Mapa
          </Link>
        )}
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
              decoding="async"
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
