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
import casaRicardoAntes from "./casa-ricardo-antes.webp";
import casaRicardoHoy from "./casa-ricardo-hoy.webp";
import tiendaLaNueva from "./tienda-la-nueva.webp";
import tiendaLaNuevaHoy from "./tienda-la-nueva-hoy.webp";
import museoAyer from "./museo-ayer.webp";
import museoHoy from "./museo-hoy.webp";

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
          Comparativas visuales de edificios y comercios de Jesús María, Córdoba,
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
        <article className={`ayer-hoy__item${openId === "casa-ricardo" ? " is-open" : ""}`}>
          <button
            type="button"
            className="ayer-hoy__toggle"
            onClick={() => toggleItem("casa-ricardo")}
            onKeyDown={(event) => handleToggleKeyDown(event, "casa-ricardo")}
            aria-expanded={openId === "casa-ricardo"}
            aria-controls="ayer-hoy-panel-casa-ricardo"
            id="ayer-hoy-header-casa-ricardo"
          >
            <span className="ayer-hoy__toggle-title">Casa Ricardo Divo</span>
            <span className="ayer-hoy__toggle-summary">
              Una tienda emblemática de Jesús María en los años 70 y 80.
            </span>
            <span className="ayer-hoy__toggle-icon">
              {openId === "casa-ricardo" ? "Cerrar —" : "Abrir +"}
            </span>
          </button>

          <div
            className="ayer-hoy__panel"
            id="ayer-hoy-panel-casa-ricardo"
            role="region"
            aria-labelledby="ayer-hoy-header-casa-ricardo"
          >
            <div className="ayer-hoy__panel-inner">
              <div className="ayer-hoy__content">
                <p>
                  Esta era una tienda en Jesús María, propiedad del Sr. Ricardo Divo,
                  un lugar de compras muy reconocido en las décadas del 70 y 80.
                </p>
              </div>

              <div className="ayer-hoy__gallery">
                {[
                  {
                    src: casaRicardoAntes,
                    alt: "Casa Ricardo Divo en Jesús María, antes",
                  },
                  {
                    src: casaRicardoHoy,
                    alt: "Casa Ricardo Divo en Jesús María, hoy",
                  },
                ].map((foto) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
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
            </div>
          </div>
        </article>
        <article className={`ayer-hoy__item${openId === "tienda-la-nueva" ? " is-open" : ""}`}>
          <button
            type="button"
            className="ayer-hoy__toggle"
            onClick={() => toggleItem("tienda-la-nueva")}
            onKeyDown={(event) => handleToggleKeyDown(event, "tienda-la-nueva")}
            aria-expanded={openId === "tienda-la-nueva"}
            aria-controls="ayer-hoy-panel-tienda-la-nueva"
            id="ayer-hoy-header-tienda-la-nueva"
          >
            <span className="ayer-hoy__toggle-title">Tienda La Nueva</span>
            <span className="ayer-hoy__toggle-summary">
              De la esquina histórica a la memoria comercial de Jesús María.
            </span>
            <span className="ayer-hoy__toggle-icon">
              {openId === "tienda-la-nueva" ? "Cerrar —" : "Abrir +"}
            </span>
          </button>

          <div
            className="ayer-hoy__panel"
            id="ayer-hoy-panel-tienda-la-nueva"
            role="region"
            aria-labelledby="ayer-hoy-header-tienda-la-nueva"
          >
            <div className="ayer-hoy__panel-inner">
              <div className="ayer-hoy__content">
                <p>
                  Tienda La Nueva de la década de los 30 / 40, en la esq. de Juilio A.
                  Roca y Córdoba. Más adelante en la esquina en la esq. de John Kenedy
                  y San Martín, frente al banco Córdoba, funcionó por muchos años
                  Tienda La Nueva dedicada a ropa, calzado y artículos del hogar. Hoy
                  en lugar de la tienda está calzados La Focce.
                </p>
              </div>

              <div className="ayer-hoy__gallery">
                {[
                  {
                    src: tiendaLaNueva,
                    alt: "Tienda La Nueva en Jesús María, década de 1930-1940",
                  },
                  {
                    src: tiendaLaNuevaHoy,
                    alt: "Actual ubicación de Tienda La Nueva en Jesús María",
                  },
                ].map((foto) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
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
                <span className="ayer-hoy__credit-label">Fuente</span>
                <p className="ayer-hoy__credit-text">
                  Extracto de texto, extraído de{" "}
                  <a
                    href="https://diarioeldespertador.com.ar/contenido/14066/daguerrotipos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    diarioeldespertador.com.ar
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className={`ayer-hoy__item${openId === "museo-jesuitico" ? " is-open" : ""}`}>
          <button
            type="button"
            className="ayer-hoy__toggle"
            onClick={() => toggleItem("museo-jesuitico")}
            onKeyDown={(event) => handleToggleKeyDown(event, "museo-jesuitico")}
            aria-expanded={openId === "museo-jesuitico"}
            aria-controls="ayer-hoy-panel-museo-jesuitico"
            id="ayer-hoy-header-museo-jesuitico"
          >
            <span className="ayer-hoy__toggle-title">
              Estancia de Jesús María - Museo Jesuítico Nacional
            </span>
            <span className="ayer-hoy__toggle-summary">
              Un legado jesuítico que marcó la identidad vitivinícola de la región.
            </span>
            <span className="ayer-hoy__toggle-icon">
              {openId === "museo-jesuitico" ? "Cerrar —" : "Abrir +"}
            </span>
          </button>

          <div
            className="ayer-hoy__panel"
            id="ayer-hoy-panel-museo-jesuitico"
            role="region"
            aria-labelledby="ayer-hoy-header-museo-jesuitico"
          >
            <div className="ayer-hoy__panel-inner">
              <div className="ayer-hoy__content">
                <p>
                  Estancia de Jesús María - Museo Jesuítico Nacional - Fundada en
                  1618, por los jesuitas, esta estancia se destacó por su producción
                  vitivinícola, que marcó la identidad de la región y sigue vigente
                  hasta hoy.
                </p>
              </div>

              <div className="ayer-hoy__gallery">
                {[
                  {
                    src: museoAyer,
                    alt: "Estancia de Jesús María, museo jesuítico nacional, antes",
                  },
                  {
                    src: museoHoy,
                    alt: "Estancia de Jesús María, museo jesuítico nacional, hoy",
                  },
                ].map((foto) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
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
