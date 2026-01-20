import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AyerHoy.css";
import ayeryhoy from "./ayeryhoy.webp";
import ayeryhoy1 from "./ayeryhoy1.webp";
import ayeryhoy2 from "./ayeryhoy2.webp";
import ayeryhoy3 from "./ayeryhoy3.webp";
import ayeryhoy4 from "./ayeryhoy4.webp";
import ayeryhoy5 from "./ayeryhoy5.webp";
import ayeryhoy6 from "./ayeryhoy6.webp";
import ayeryhoy7 from "./ayeryhoy7.webp";
import ayeryhoy8 from "./ayeryhoy8.webp";
import ayeryhoy9 from "./ayeryhoy9.webp";
import ayeryhoy10 from "./ayeryhoy10.webp";

const fotos = [
  { src: ayeryhoy, alt: "Ayer y hoy en Jesús María" },
  { src: ayeryhoy1, alt: "Comparativa histórica en Jesús María" },
  { src: ayeryhoy2, alt: "Edificios y comercios del ayer y hoy" },
  { src: ayeryhoy3, alt: "Postales del tiempo en Jesús María" },
  { src: ayeryhoy4, alt: "Memorias urbanas en Jesús María" },
  { src: ayeryhoy5, alt: "Cambios en las calles de Jesús María" },
  { src: ayeryhoy6, alt: "Ayer y hoy de comercios locales" },
  { src: ayeryhoy7, alt: "Transformaciones del casco urbano" },
  { src: ayeryhoy8, alt: "Rincones emblemáticos ayer y hoy" },
  { src: ayeryhoy9, alt: "Patrimonio y presente en Jesús María" },
  { src: ayeryhoy10, alt: "Miradas cruzadas del pasado y el presente" },
];

const AyerHoy = () => {
  const [openId, setOpenId] = useState("galeria");
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
    <main className="ayer-hoy">
      <header className="ayer-hoy__hero">
        <p className="ayer-hoy__eyebrow">Ayer y hoy</p>
        <h1 className="ayer-hoy__title">Dos tiempos, una misma memoria</h1>
        <p className="ayer-hoy__subtitle">
          Comparativas visuales de edificios y comercios de Jes˙s Mar˝a, Cˇrdoba,
          Argentina.
        </p>
      </header>

      <section className="ayer-hoy__accordion">
        <article className={`ayer-hoy__item${openId === "galeria" ? " is-open" : ""}`}>
          <button
            type="button"
            className="ayer-hoy__toggle"
            onClick={() => toggleItem("galeria")}
            onKeyDown={(event) => handleToggleKeyDown(event, "galeria")}
            aria-expanded={openId === "galeria"}
            aria-controls="ayer-hoy-panel-galeria"
            id="ayer-hoy-header-galeria"
          >
            <span className="ayer-hoy__toggle-title">Galería Ayer y Hoy</span>
            <span className="ayer-hoy__toggle-summary">
              Un recorrido por el tiempo a través de fachadas, esquinas y comercios.
            </span>
            <span className="ayer-hoy__toggle-icon">
              {openId === "galeria" ? "Cerrar —" : "Abrir +"}
            </span>
          </button>

          <div
            className="ayer-hoy__panel"
            id="ayer-hoy-panel-galeria"
            role="region"
            aria-labelledby="ayer-hoy-header-galeria"
          >
            <div className="ayer-hoy__panel-inner">
              <div className="ayer-hoy__content">
                <p>
                  Esta galería reúne comparativas del ayer y el hoy de diferentes
                  edificaciones y comercios de la ciudad de Jesús María. Las imágenes
                  dialogan entre sí y revelan cómo el tiempo transforma las
                  fachadas, los paisajes urbanos y la vida cotidiana sin borrar la
                  esencia de cada lugar.
                </p>
                <p>
                  Cada fotografía es una invitación a mirar con calma: reconocer lo
                  que permanece, agradecer lo que cambió y descubrir el hilo invisible
                  que conecta la memoria con el presente.
                </p>
              </div>

              <div className="ayer-hoy__gallery">
                {fotos.map((foto, index) => (
                  <div
                    key={foto.src}
                    className={`ayer-hoy__gallery-item${
                      index === 0 ? " is-feature" : ""
                    }${index === 3 ? " is-tall" : ""}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => openImage(foto.src, foto.alt)}
                    onKeyDown={(event) => handleImageKeyDown(event, foto.src, foto.alt)}
                    aria-label={`Agrandar imagen: ${foto.alt}`}
                  >
                    <img src={foto.src} alt={foto.alt} />
                    <div className="ayer-hoy__overlay">Haz click para agrandar</div>
                  </div>
                ))}
              </div>

              <div className="ayer-hoy__credits">
                <span className="ayer-hoy__credit-label">Créditos</span>
                <p className="ayer-hoy__credit-text">
                  Fotos: Sr. Guillermo Ordoñez (Facebook)
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <NavLink className="button ayer-hoy__back" to="/">
        Volver al Inicio
      </NavLink>

      {lightbox && (
        <div className="ayer-hoy__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="ayer-hoy__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <button type="button" className="ayer-hoy__lightbox-hint" onClick={closeImage}>
              Click para achicar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default AyerHoy;
