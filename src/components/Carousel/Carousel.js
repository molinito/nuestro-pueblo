import React, { useEffect, useMemo, useState } from 'react';
import './Carousel.css';
import img1 from '../../img/galeria/1.webp';
import img2 from '../../img/galeria/2.webp';
import img3 from '../../img/galeria/3.webp';
import img4 from '../../img/galeria/4.webp';
import img5 from '../../img/galeria/5.webp';
import anaLondero from '../../img/galeria/ana-londero.webp';
import avenida from '../../img/galeria/avenida.webp';
import chataVieja from '../../img/galeria/chata-vieja.webp';
import familia from '../../img/galeria/familia.webp';
import familia1 from '../../img/galeria/familia1.webp';
import familia2 from '../../img/galeria/familia2.webp';
import friuli from '../../img/galeria/friuli.webp';
import patioInternoCasaCaroya from '../../img/galeria/patiointerno-casacaroya.webp';
import plazaPio from '../../img/galeria/plaza pio.webp';
import copettiColaborado from '../../img/galeria/copetti-colaborado.webp';
import copettiAdultos from '../../img/galeria/copetti-adultos.webp';
import copettiNino from '../../img/galeria/copetti-nino.webp';
import copetti1 from '../../img/galeria/copetti1.webp';
import img6 from '../../img/galeria/tractor.webp';
import familia3 from '../../img/galeria/familia3.webp';
import familia4 from '../../img/galeria/familia4.webp';
import familia5 from '../../img/galeria/familia5.webp';
import familia6 from '../../img/galeria/familia6.webp';
import familia7 from '../../img/galeria/familia7.webp';
import renatoEynard from '../../img/galeria/renato-eynard.webp';
import escuelaVarones1923 from '../../img/galeria/escuela-varones-1923.webp';
import jugadoresClubAgraria1966 from '../../img/galeria/jugadores-club-agraria-1966.webp';
import munecaSusana from '../../img/galeria/la-del-medio-con-la-muneca-susana-de-candido.webp';
import canaleMellizo from '../../img/galeria/sentado-izq-jose-canale-medio-susana-de-candido-y-derc-miguel-canale-mellizo.webp';
import gildaFilomena from '../../img/galeria/parada-izq-gilda-hija-de-filomena-y-debajo-de-ella-la-otra-hija-de-filomena.webp';
import albumCover from '../../img/album.png';

const defaultSlides = [
  img1,
  img2,
  img3,
  img4,
  img5,
  anaLondero,
  avenida,
  chataVieja,
  familia,
  {
    src: familia1,
    alt: 'Familia (foto histórica)',
    caption: 'Familia (archivo histórico). Créditos Susana de Cándido de Facebook.',
  },
  familia2,
  friuli,
  patioInternoCasaCaroya,
  plazaPio,
  {
    src: copettiColaborado,
    alt: 'Imagen de colaboración',
    caption:
      'Colaboración: Alicia Vrc de Fotos antiguas Colonia Caroya y Jesús Maria - Facebook',
  },
  copetti1,
  copettiAdultos,
  copettiNino,
  img6,
  {
    src: familia3,
    alt: 'Familia de Antonio Copetti y María Brollo',
    caption:
      'Créditos Archivo Histórico Colonia Caroya - Facebook - Restauración y color M. Saravia.',
  },
  {
    src: familia4,
    alt: 'Imagen de Archivo Histórico Colonia Caroya',
    caption:
      'Créditos Archivo Histórico Colonia Caroya - Facebook - Restauración y color M. Saravia.',
  },
  {
    src: familia5,
    alt: 'Imagen de Archivo Histórico Colonia Caroya',
    caption:
      'Créditos Archivo Histórico Colonia Caroya - Facebook - Restauración y color M. Saravia.',
  },
  {
    src: familia6,
    alt: 'Imagen de Archivo Histórico Colonia Caroya',
    caption:
      'Créditos Archivo Histórico Colonia Caroya - Facebook - Restauración y color M. Saravia.',
  },
  {
    src: familia7,
    alt: 'Familia de Antonio Copetti y María Brollo',
    caption:
      'Familia de Antonio Copetti y María Brollo. Créditos Archivo Histórico Colonia Caroya - Facebook - Restauración y color M. Saravia.',
  },
  {
    src: renatoEynard,
    alt: 'Escuela de Varones, Jesus Maria, 1923',
    caption:
      'Escuela de Varones Jesus Maria, 1923. Les enseñaban manualidades utiles al hombre de campo: areglar lazos y cinchas, hacer cestería, suela de alpargatas, esterillado ( probablemente es la Antonio Ortiz de ocampo). Alumnos exiben sus trabajos.',
  },
  {
    src: escuelaVarones1923,
    alt: 'Esc de Varones, Jesus María 1923',
    caption:
      'Esc de Varones, Jesus María 1923. La Directora , al centro , es la Srta Lydia Olmos Ossán.',
  },
  {
    src: jugadoresClubAgraria1966,
    alt: 'Jugadores Club Agraria 1966',
    caption: 'Jugadores Club Agraria (1966). Créditos Susana de Cándido de Facebook.',
  },
  {
    src: munecaSusana,
    alt: 'La del medio con la muñeca (Susana de Cándido)',
    caption:
      'La del medio con la muñeca - Susana de Cándido. Créditos Susana de Cándido de Facebook.',
  },
  {
    src: canaleMellizo,
    alt: 'Sentado izq. José Canale, medio Susana de Cándido y derc. Miguel Canale (mellizo)',
    caption:
      'Sentado izq. José Canale, medio Susana de Cándido y derc. Miguel Canale (mellizo). Créditos Susana de Cándido de Facebook.',
  },
  {
    src: gildaFilomena,
    alt: 'Parada izq. Gilda hija de Filomena y debajo de ella la otra hija de Filomena',
    caption:
      'Parada izq. Gilda (hija de Filomena) y debajo de ella la otra hija de Filomena. Créditos Susana de Cándido de Facebook.',
  },
];

function CustomCarousel({
  slides = defaultSlides,
  title = 'Descubre Nuestro Pueblo',
  subtitle = 'Un recorrido visual por nuestras tradiciones, lugares y gente',
  credits = 'Créditos Susana de Cándido de Facebook.',
  ariaLabel = 'Galería de imágenes',
  onImageClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [isTurning, setIsTurning] = useState(false);
  const [turnDirection, setTurnDirection] = useState('next');
  const [lightbox, setLightbox] = useState(null);

  const normalizedSlides = useMemo(() => {
    const source = Array.isArray(slides) && slides.length ? slides : defaultSlides;
    return source.map((slide, idx) => {
      if (typeof slide === 'string') {
        return { src: slide, alt: `Imagen ${idx + 1} de ${source.length}` };
      }
      return {
        ...slide,
        alt: slide.alt || `Imagen ${idx + 1} de ${source.length}`,
      };
    });
  }, [slides]);

  useEffect(() => {
    normalizedSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, [normalizedSlides]);

  useEffect(() => {
    if (!lightbox) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightbox(null);
      }
      if (event.key === 'ArrowLeft') {
        setLightbox((current) => {
          if (!current || current.index <= 0) return current;
          const nextIndex = current.index - 1;
          return { ...normalizedSlides[nextIndex], index: nextIndex };
        });
      }
      if (event.key === 'ArrowRight') {
        setLightbox((current) => {
          if (!current || current.index >= normalizedSlides.length - 1) return current;
          const nextIndex = current.index + 1;
          return { ...normalizedSlides[nextIndex], index: nextIndex };
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, normalizedSlides]);

  const totalPages = Math.max(1, normalizedSlides.length);
  const currentSlide = normalizedSlides[pageIndex];
  const showHeader = Boolean(title || subtitle);

  const canGoPrev = pageIndex > 0;
  const canGoNext = pageIndex < totalPages - 1;

  const handleTurn = (direction) => {
    if (isTurning) return;
    if (direction === 'next' && !canGoNext) return;
    if (direction === 'prev' && !canGoPrev) return;
    setIsTurning(true);
    setTurnDirection(direction);
    window.setTimeout(() => {
      setPageIndex((prev) => (direction === 'next' ? prev + 1 : prev - 1));
      setIsTurning(false);
    }, 520);
  };

  const handleLightboxTurn = (direction) => {
    setLightbox((current) => {
      if (!current) return current;
      if (direction === 'prev' && current.index <= 0) return current;
      if (direction === 'next' && current.index >= normalizedSlides.length - 1) return current;
      const nextIndex = direction === 'next' ? current.index + 1 : current.index - 1;
      return { ...normalizedSlides[nextIndex], index: nextIndex };
    });
  };

  const renderPhoto = (slide) => {
    if (!slide) {
      return (
        <div className="npAlbum__placeholder" aria-hidden="true">
          Página en blanco
        </div>
      );
    }

    return (
      <button
        type="button"
        className="npAlbum__photo-button"
        onClick={() => {
          const index = pageIndex;
          if (onImageClick) {
            onImageClick(slide, index);
          }
          setLightbox({ ...slide, index });
        }}
        aria-label={`Agrandar imagen: ${slide.alt}`}
      >
        <img src={slide.src} alt={slide.alt} draggable="false" />
        <span className="npAlbum__zoom-hint">Click para agrandar</span>
      </button>
    );
  };

  return (
    <section className="npAlbum" aria-label={ariaLabel}>
      {showHeader && (
        <header className="npAlbum__title">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
          {credits && <p className="npAlbum__credits">{credits}</p>}
        </header>
      )}

      {!isOpen ? (
        <button
          type="button"
          className="npAlbum__cover"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir album fotográfico"
        >
          <img
            className="npAlbum__cover-image"
            src={albumCover}
            alt="Tapa del album fotográfico"
            draggable="false"
          />
          <span className="npAlbum__cover-button">Abrir</span>
        </button>
      ) : (
        <div className="npAlbum__book">
          <div className="npAlbum__controls">
            <button
              type="button"
              className="npAlbum__control"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar album"
            >
              Cerrar album
            </button>
            <div className="npAlbum__counter">
              {pageIndex + 1} / {totalPages}
            </div>
          </div>

          <div
            className="npAlbum__spread npAlbum__spread--single"
            role="group"
            aria-label={`Página ${pageIndex + 1}`}
          >
            <div
              className={`npAlbum__page npAlbum__page--single${
                isTurning
                  ? turnDirection === 'prev'
                    ? ' npAlbum__page--turn-prev'
                    : ' npAlbum__page--turn-next'
                  : ''
              }`}
            >
              <div className="npAlbum__page-inner">{renderPhoto(currentSlide)}</div>
              {currentSlide?.caption && (
                <p className="npAlbum__caption">{currentSlide.caption}</p>
              )}
              <div className="npAlbum__page-number">{pageIndex + 1}</div>
              <div className="npAlbum__page-nav">
                <button
                  type="button"
                  className="npAlbum__nav npAlbum__nav--left"
                  onClick={() => handleTurn('prev')}
                  disabled={!canGoPrev || isTurning}
                  aria-label="Página anterior"
                >
                  <span>‹</span>
                  <span>Anterior</span>
                </button>
                <button
                  type="button"
                  className="npAlbum__nav npAlbum__nav--right"
                  onClick={() => handleTurn('next')}
                  disabled={!canGoNext || isTurning}
                  aria-label="Página siguiente"
                >
                  <span className="npAlbum__hand" aria-hidden="true">
                    <svg viewBox="0 0 64 64" role="img" focusable="false">
                      <path
                        d="M20 30v-8a3 3 0 0 1 6 0v7h2v-10a3 3 0 0 1 6 0v10h2v-8a3 3 0 0 1 6 0v12h2v-5a3 3 0 0 1 6 0v10c0 8-6 14-14 14H28c-6 0-10-4-12-9l-4-12a3 3 0 0 1 6-2l2 5z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span>Pasar página</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {lightbox && (
        <div
          className="npAlbum__lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="npAlbum__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="npAlbum__lightbox-nav is-prev"
              onClick={() => handleLightboxTurn('prev')}
              aria-label="Imagen anterior"
              disabled={lightbox.index <= 0}
            >
              ‹
            </button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <button
              type="button"
              className="npAlbum__lightbox-nav is-next"
              onClick={() => handleLightboxTurn('next')}
              aria-label="Imagen siguiente"
              disabled={lightbox.index >= normalizedSlides.length - 1}
            >
              ›
            </button>
            {lightbox.caption && <p className="npAlbum__lightbox-caption">{lightbox.caption}</p>}
            <div className="npAlbum__lightbox-actions">
              <span className="npAlbum__lightbox-counter">
                {lightbox.index + 1} / {normalizedSlides.length}
              </span>
              <button
                type="button"
                className="npAlbum__lightbox-hint"
                onClick={() => setLightbox(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CustomCarousel;
