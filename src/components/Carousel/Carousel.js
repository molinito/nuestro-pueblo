import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Carousel.css';
import img1 from '../../img/1.webp';
import img2 from '../../img/2.webp';
import img3 from '../../img/3.webp';
import img4 from '../../img/4.webp';
import img5 from '../../img/5.webp';
import img6 from '../../img/tractor.webp';

const images = [img1, img2, img3, img4, img5, img6];

function CustomCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const slides = useMemo(() => images, []);

  // Preload images to reduce layout jank
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [slides]);

  // Auto-slide every 5s
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearTimeout(timeoutRef.current);
  }, [current, isPaused, slides.length]);

  const goToSlide = (idx) => {
    setCurrent(idx);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="npCarousel" aria-label="Galería de imágenes">
      <header className="npCarousel__title">
        <h2>Descubre Nuestro Pueblo</h2>
        <p>Un recorrido visual por nuestras tradiciones, lugares y gente</p>
      </header>

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
          <img
            key={current}
            src={slides[current]}
            alt={`Imagen ${current + 1} de ${slides.length}`}
            className="npCarousel__image"
            draggable="false"
          />
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
        {slides.map((_, idx) => (
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
