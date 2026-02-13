import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Carousel.css';
import img1 from '../../img/1.webp';
import img2 from '../../img/2.webp';
import img3 from '../../img/3.webp';
import img4 from '../../img/4.webp';
import img5 from '../../img/5.webp';
import img6 from '../../img/tractor.webp';

const defaultSlides = [img1, img2, img3, img4, img5, img6].map((src, idx, list) => ({
  src,
  alt: `Imagen ${idx + 1} de ${list.length}`,
}));

function CustomCarousel({
  slides = defaultSlides,
  title = 'Descubre Nuestro Pueblo',
  subtitle = 'Un recorrido visual por nuestras tradiciones, lugares y gente',
  ariaLabel = 'Galería de imágenes',
  onImageClick,
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

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

  // Preload images to reduce layout jank
  useEffect(() => {
    normalizedSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, [normalizedSlides]);

  // Auto-slide every 5s
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % normalizedSlides.length);
    }, 5500);
    return () => clearTimeout(timeoutRef.current);
  }, [current, isPaused, normalizedSlides.length]);

  const goToSlide = (idx) => {
    setCurrent(idx);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? normalizedSlides.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % normalizedSlides.length);
  };

  const currentSlide = normalizedSlides[current];
  const showHeader = Boolean(title || subtitle);

  return (
    <section className="npCarousel" aria-label={ariaLabel}>
      {showHeader && (
        <header className="npCarousel__title">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </header>
      )}

      <div
        className="npCarousel__frame"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="npCarousel__arrow npCarousel__arrow--left"
          onClick={prevSlide}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div className="npCarousel__stage">
          {onImageClick ? (
            <button
              type="button"
              className="npCarousel__image-button"
              onClick={() => onImageClick(currentSlide, current)}
              aria-label={`Agrandar imagen: ${currentSlide.alt}`}
            >
              <img
                key={current}
                src={currentSlide.src}
                alt={currentSlide.alt}
                className="npCarousel__image"
                draggable="false"
              />
            </button>
          ) : (
            <img
              key={current}
              src={currentSlide.src}
              alt={currentSlide.alt}
              className="npCarousel__image"
              draggable="false"
            />
          )}
        </div>

        <button
          type="button"
          className="npCarousel__arrow npCarousel__arrow--right"
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      <div className="npCarousel__dots" role="tablist" aria-label="Navegación del carrusel">
        {normalizedSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={idx === current ? 'npCarousel__dot npCarousel__dot--active' : 'npCarousel__dot'}
            onClick={() => goToSlide(idx)}
            aria-label={`Ir a la imagen ${idx + 1}`}
            aria-current={idx === current}
          />
        ))}
      </div>
    </section>
  );
}

export default CustomCarousel;
