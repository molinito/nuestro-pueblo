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
import familia2 from '../../img/galeria/familia2.webp';
import friuli from '../../img/galeria/friuli.webp';
import patioInternoCasaCaroya from '../../img/galeria/patiointerno-casacaroya.webp';
import plazaPio from '../../img/galeria/plaza pio.webp';
import copettiColaborado from '../../img/galeria/copetti-colaborado.webp';
import copettiAdultos from '../../img/galeria/copetti-adultos.webp';
import copettiNino from '../../img/galeria/copetti-nino.webp';
import copetti1 from '../../img/galeria/copetti1.webp';
import img6 from '../../img/galeria/tractor.webp';
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
];

function CustomCarousel({
  slides = defaultSlides,
  title = 'Descubre Nuestro Pueblo',
  subtitle = 'Un recorrido visual por nuestras tradiciones, lugares y gente',
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
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

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
        <div className="npAlbum__lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <div className="npAlbum__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <button type="button" className="npAlbum__lightbox-hint" onClick={() => setLightbox(null)}>
              Click para achicar y volver al álbum
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default CustomCarousel;
