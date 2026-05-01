import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./AyerHoy.css";
import ayeryhoy from "./galeria/ayeryhoy.webp";
import ayeryhoy1 from "./galeria/ayeryhoy1.webp";
import ayeryhoy2 from "./galeria/ayeryhoy2.webp";
import ayeryhoy3 from "./galeria/ayeryhoy3.webp";
import ayeryhoy4 from "./galeria/ayeryhoy4.webp";
import ayeryhoy5 from "./galeria/ayeryhoy5.webp";
import ayeryhoy6 from "./galeria/ayeryhoy6.webp";
import ayeryhoy7 from "./galeria/ayeryhoy7.webp";
import ayeryhoy8 from "./galeria/ayeryhoy8.webp";
import ayeryhoy9 from "./galeria/ayeryhoy9.webp";
import ayeryhoy10 from "./galeria/ayeryhoy10.webp";
import casaRicardoAntes from "./casa-ricardo/casa-ricardo-antes.webp";
import casaRicardoHoy from "./casa-ricardo/casa-ricardo-hoy.webp";
import tiendaLaNueva from "./tienda-la-nueva/tienda-la-nueva.webp";
import tiendaLaNuevaHoy from "./tienda-la-nueva/tienda-la-nueva-hoy.webp";
import museoAyer from "./museo-jesuitico/museo-ayer.webp";
import museoHoy from "./museo-jesuitico/museo-hoy.webp";
import bvAgueroAyer from "./boulevard-aguero/bvAguero-ayer.webp";
import bvAgueroHoy from "./boulevard-aguero/bvAguero-hoy.webp";
import castuloPenaAyer from "./castillo-cespedes/castuloPena-ayer.webp";
import castuloPenaHoy from "./castillo-cespedes/castuloPena-hoy.webp";
import castilloAyerExtra from "./castillo-cespedes/castillo-ayer.webp";
import ypfAyer from "./ypf/ypf-ayer.webp";
import ypfAyer1 from "./ypf/ypf-ayer-1.webp";
import ypfHoy from "./ypf/ypf-hoy.webp";
import ypfHoy1 from "./ypf/ypf-hoy1.webp";
import rosarioAyer from "./rosario/rosario.webp";
import rosarioHoy from "./rosario/rosario1.webp";
import bodegaAyer from "./bodega/bodega.webp";
import bodegaHoy from "./bodega/bodega1.webp";
import agrariaAyer from "./agraria/agraria.webp";
import agrariaHoy from "./agraria/agraria1.webp";
import ipem69Ayer from "./ipem69/ipem69.webp";
import ipem69Hoy from "./ipem69/ipem691.webp";

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

const casaRicardoGallery = [
  {
    src: casaRicardoAntes,
    alt: "Casa Ricardo Divo en Jesús María, antes",
  },
  {
    src: casaRicardoHoy,
    alt: "Casa Ricardo Divo en Jesús María, hoy",
  },
];

const tiendaLaNuevaGallery = [
  {
    src: tiendaLaNueva,
    alt: "Tienda La Nueva en Jesús María, década de 1930-1940",
  },
  {
    src: tiendaLaNuevaHoy,
    alt: "Actual ubicación de Tienda La Nueva en Jesús María",
  },
];

const museoJesuiticoGallery = [
  {
    src: museoAyer,
    alt: "Estancia de Jesús María, museo jesuítico nacional, antes",
  },
  {
    src: museoHoy,
    alt: "Estancia de Jesús María, museo jesuítico nacional, hoy",
  },
];

const boulevardAgueroGallery = [
  {
    src: bvAgueroAyer,
    alt: "Boulevard Agüero y Juan Bautista Alberdi en Jesús María, antes",
  },
  {
    src: bvAgueroHoy,
    alt: "Boulevard Agüero y Juan Bautista Alberdi en Jesús María, hoy",
  },
];

const castilloCespedesGallery = [
  {
    src: castuloPenaAyer,
    alt: "Castillo Céspedes, antes",
  },
  {
    src: castilloAyerExtra,
    alt: "Castillo Céspedes, vista histórica",
  },
  {
    src: castuloPenaHoy,
    alt: "Castillo Céspedes, hoy",
  },
];

const ypfGallery = [
  {
    src: ypfAyer,
    alt: "YPF en Jesús María, antes",
  },
  {
    src: ypfAyer1,
    alt: "YPF en Jesús María, otra vista histórica",
  },
  {
    src: ypfHoy,
    alt: "YPF en Jesús María, hoy",
  },
  {
    src: ypfHoy1,
    alt: "YPF en Jesús María, vista actual",
  },
];

const rosarioGallery = [
  {
    src: rosarioAyer,
    alt: "Iglesia del Santísimo Rosario Lote XI, vista histórica",
  },
  {
    src: rosarioHoy,
    alt: "Iglesia del Santísimo Rosario Lote XI, vista actual",
  },
];

const bodegaGallery = [
  {
    src: bodegaAyer,
    alt: "Bodega La Caroyense, vista histórica",
  },
  {
    src: bodegaHoy,
    alt: "Bodega La Caroyense, vista actual",
  },
];

const agrariaGallery = [
  {
    src: agrariaAyer,
    alt: "Club Agraria de Colonia Caroya, vista histórica",
  },
  {
    src: agrariaHoy,
    alt: "Club Agraria de Colonia Caroya, vista actual",
  },
];

const ipem69Gallery = [
  {
    src: ipem69Ayer,
    alt: "Escuela técnica IPEM 69 de Jesús María, vista histórica",
  },
  {
    src: ipem69Hoy,
    alt: "Escuela técnica IPEM 69 de Jesús María, vista actual",
  },
];

const ayerHoyIds = [
  "galeria",
  "casa-ricardo",
  "tienda-la-nueva",
  "museo-jesuitico",
  "boulevard-aguero",
  "castillo-cespedes",
  "ypf",
  "rosario",
  "bodega",
  "agraria",
  "ipem69",
];

const hasAyerHoyId = (id) => ayerHoyIds.includes(id);

const AyerHoy = () => {
  const { ayerHoyId } = useParams();
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const scrollToAyerHoy = (id, behavior = "auto") => {
    const header = document.getElementById(`ayer-hoy-header-${id}`);
    if (!header) return;
    header.scrollIntoView({ block: "start", behavior });
    window.scrollBy(0, -90);
  };

  const toggleItem = (id) => {
    setOpenId((current) => {
      const nextId = current === id ? null : id;
      navigate(nextId ? `/ayer-hoy/${nextId}` : "/ayer-hoy");
      if (nextId) window.setTimeout(() => scrollToAyerHoy(nextId, "smooth"), 60);
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
  const handleToggleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(id);
    }
  };
  const handleImageKeyDown = (event, src, alt, gallery = [{ src, alt }], index = 0) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImage(src, alt, gallery, index);
    }
  };

  useEffect(() => {
    if (!ayerHoyId) return;
    if (hasAyerHoyId(ayerHoyId)) return;
    navigate("/ayer-hoy", { replace: true });
  }, [ayerHoyId, navigate]);

  useLayoutEffect(() => {
    if (!ayerHoyId) return;
    if (!hasAyerHoyId(ayerHoyId)) return;
    setOpenId(ayerHoyId);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => scrollToAyerHoy(ayerHoyId, "auto"))
    );
  }, [ayerHoyId]);

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
            {openId !== "galeria" && (
              <span className="ayer-hoy__toggle-secondary">Abrir +</span>
            )}
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
                    onClick={() => openImage(foto.src, foto.alt, fotos, index)}
                    onKeyDown={(event) =>
                      handleImageKeyDown(event, foto.src, foto.alt, fotos, index)
                    }
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
            <div className="ayer-hoy__panel-actions">
              <button
                type="button"
                className="ayer-hoy__panel-toggle"
                onClick={() => toggleItem("galeria")}
              >
                Cerrar —
              </button>
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
            {openId !== "casa-ricardo" && (
              <span className="ayer-hoy__toggle-secondary">Abrir +</span>
            )}
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
                {casaRicardoGallery.map((foto, index) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
                    role="button"
                    tabIndex={0}
                    onClick={() => openImage(foto.src, foto.alt, casaRicardoGallery, index)}
                    onKeyDown={(event) =>
                      handleImageKeyDown(event, foto.src, foto.alt, casaRicardoGallery, index)
                    }
                    aria-label={`Agrandar imagen: ${foto.alt}`}
                  >
                    <img src={foto.src} alt={foto.alt} />
                    <div className="ayer-hoy__overlay">Haz click para agrandar</div>
                  </div>
                ))}
              </div>
            <div className="ayer-hoy__panel-actions">
              <button
                type="button"
                className="ayer-hoy__panel-toggle"
                onClick={() => toggleItem("casa-ricardo")}
              >
                Cerrar —
              </button>
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
            {openId !== "tienda-la-nueva" && (
              <span className="ayer-hoy__toggle-secondary">Abrir +</span>
            )}
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
                {tiendaLaNuevaGallery.map((foto, index) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      openImage(foto.src, foto.alt, tiendaLaNuevaGallery, index)
                    }
                    onKeyDown={(event) =>
                      handleImageKeyDown(event, foto.src, foto.alt, tiendaLaNuevaGallery, index)
                    }
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
            <div className="ayer-hoy__panel-actions">
              <button
                type="button"
                className="ayer-hoy__panel-toggle"
                onClick={() => toggleItem("tienda-la-nueva")}
              >
                Cerrar —
              </button>
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
            {openId !== "museo-jesuitico" && (
              <span className="ayer-hoy__toggle-secondary">Abrir +</span>
            )}
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
                {museoJesuiticoGallery.map((foto, index) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      openImage(foto.src, foto.alt, museoJesuiticoGallery, index)
                    }
                    onKeyDown={(event) =>
                      handleImageKeyDown(event, foto.src, foto.alt, museoJesuiticoGallery, index)
                    }
                    aria-label={`Agrandar imagen: ${foto.alt}`}
                  >
                    <img src={foto.src} alt={foto.alt} />
                    <div className="ayer-hoy__overlay">Haz click para agrandar</div>
                  </div>
                ))}
              </div>
            <div className="ayer-hoy__panel-actions">
              <button
                type="button"
                className="ayer-hoy__panel-toggle"
                onClick={() => toggleItem("museo-jesuitico")}
              >
                Cerrar —
              </button>
            </div>
            </div>
          </div>
        </article>
        <article className={`ayer-hoy__item${openId === "rosario" ? " is-open" : ""}`}>
          <button
            type="button"
            className="ayer-hoy__toggle"
            onClick={() => toggleItem("rosario")}
            onKeyDown={(event) => handleToggleKeyDown(event, "rosario")}
            aria-expanded={openId === "rosario"}
            aria-controls="ayer-hoy-panel-rosario"
            id="ayer-hoy-header-rosario"
          >
            <span className="ayer-hoy__toggle-title">
              Iglesia del Santísimo Rosario Lote XI
            </span>
            <span className="ayer-hoy__toggle-summary">
              La memoria de la comunidad del Lote XI en dos tiempos.
            </span>
            {openId !== "rosario" && (
              <span className="ayer-hoy__toggle-secondary">Abrir +</span>
            )}
          </button>

          <div
            className="ayer-hoy__panel"
            id="ayer-hoy-panel-rosario"
            role="region"
            aria-labelledby="ayer-hoy-header-rosario"
          >
            <div className="ayer-hoy__panel-inner">
              <div className="ayer-hoy__content">
                <p>
                  La Iglesia del Santísimo Rosario del Lote XI acompaña la vida
                  espiritual y social de la zona. Estas imágenes muestran su
                  presencia a través del tiempo.
                </p>
              </div>

              <div className="ayer-hoy__gallery">
                {rosarioGallery.map((foto, index) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
                    role="button"
                    tabIndex={0}
                    onClick={() => openImage(foto.src, foto.alt, rosarioGallery, index)}
                    onKeyDown={(event) =>
                      handleImageKeyDown(event, foto.src, foto.alt, rosarioGallery, index)
                    }
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
                  Archivo Histórico Colonia Caroya, Facebook
                  <br />
                  Imagen hoy. Marcelo Saravia
                </p>
              </div>
            <div className="ayer-hoy__panel-actions">
              <button
                type="button"
                className="ayer-hoy__panel-toggle"
                onClick={() => toggleItem("rosario")}
              >
                Cerrar —
              </button>
            </div>
            </div>
          </div>
        </article>
        <article className={`ayer-hoy__item${openId === "bodega" ? " is-open" : ""}`}>
          <button
            type="button"
            className="ayer-hoy__toggle"
            onClick={() => toggleItem("bodega")}
            onKeyDown={(event) => handleToggleKeyDown(event, "bodega")}
            aria-expanded={openId === "bodega"}
            aria-controls="ayer-hoy-panel-bodega"
            id="ayer-hoy-header-bodega"
          >
            <span className="ayer-hoy__toggle-title">Bodega La Caroyense</span>
            <span className="ayer-hoy__toggle-summary">
              Un símbolo del trabajo vitivinícola en Colonia Caroya.
            </span>
            {openId !== "bodega" && (
              <span className="ayer-hoy__toggle-secondary">Abrir +</span>
            )}
          </button>

          <div
            className="ayer-hoy__panel"
            id="ayer-hoy-panel-bodega"
            role="region"
            aria-labelledby="ayer-hoy-header-bodega"
          >
            <div className="ayer-hoy__panel-inner">
              <div className="ayer-hoy__content">
                <p>
                  La Bodega La Caroyense es parte de la identidad productiva de la
                  zona. Estas comparativas muestran su evolución y permanencia en el
                  paisaje local.
                </p>
              </div>

              <div className="ayer-hoy__gallery">
                {bodegaGallery.map((foto, index) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
                    role="button"
                    tabIndex={0}
                    onClick={() => openImage(foto.src, foto.alt, bodegaGallery, index)}
                    onKeyDown={(event) =>
                      handleImageKeyDown(event, foto.src, foto.alt, bodegaGallery, index)
                    }
                    aria-label={`Agrandar imagen: ${foto.alt}`}
                  >
                    <img src={foto.src} alt={foto.alt} />
                    <div className="ayer-hoy__overlay">Haz click para agrandar</div>
                  </div>
                ))}
              </div>
            <div className="ayer-hoy__panel-actions">
              <button
                type="button"
                className="ayer-hoy__panel-toggle"
                onClick={() => toggleItem("bodega")}
              >
                Cerrar —
              </button>
            </div>
            </div>
          </div>
        </article>
        <article className={`ayer-hoy__item${openId === "agraria" ? " is-open" : ""}`}>
          <button
            type="button"
            className="ayer-hoy__toggle"
            onClick={() => toggleItem("agraria")}
            onKeyDown={(event) => handleToggleKeyDown(event, "agraria")}
            aria-expanded={openId === "agraria"}
            aria-controls="ayer-hoy-panel-agraria"
            id="ayer-hoy-header-agraria"
          >
            <span className="ayer-hoy__toggle-title">Club Agraria de Colonia Caroya</span>
            <span className="ayer-hoy__toggle-summary">
              Deporte, encuentros y vida social en dos épocas.
            </span>
            {openId !== "agraria" && (
              <span className="ayer-hoy__toggle-secondary">Abrir +</span>
            )}
          </button>

          <div
            className="ayer-hoy__panel"
            id="ayer-hoy-panel-agraria"
            role="region"
            aria-labelledby="ayer-hoy-header-agraria"
          >
            <div className="ayer-hoy__panel-inner">
              <div className="ayer-hoy__content">
                <p>
                  El Club Agraria es un punto de encuentro histórico para la
                  comunidad de Colonia Caroya. Las imágenes reflejan su rol social
                  y su continuidad en el tiempo.
                </p>
              </div>

              <div className="ayer-hoy__gallery">
                {agrariaGallery.map((foto, index) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
                    role="button"
                    tabIndex={0}
                    onClick={() => openImage(foto.src, foto.alt, agrariaGallery, index)}
                    onKeyDown={(event) =>
                      handleImageKeyDown(event, foto.src, foto.alt, agrariaGallery, index)
                    }
                    aria-label={`Agrandar imagen: ${foto.alt}`}
                  >
                    <img src={foto.src} alt={foto.alt} />
                    <div className="ayer-hoy__overlay">Haz click para agrandar</div>
                  </div>
                ))}
              </div>
            <div className="ayer-hoy__panel-actions">
              <button
                type="button"
                className="ayer-hoy__panel-toggle"
                onClick={() => toggleItem("agraria")}
              >
                Cerrar —
              </button>
            </div>
            </div>
            </div>
        </article>
        <article className={`ayer-hoy__item${openId === "ipem69" ? " is-open" : ""}`}>
          <button
            type="button"
            className="ayer-hoy__toggle"
            onClick={() => toggleItem("ipem69")}
            onKeyDown={(event) => handleToggleKeyDown(event, "ipem69")}
            aria-expanded={openId === "ipem69"}
            aria-controls="ayer-hoy-panel-ipem69"
            id="ayer-hoy-header-ipem69"
          >
            <span className="ayer-hoy__toggle-title">
              Escuela Técnica IPEM 69 de Jesús María
            </span>
            <span className="ayer-hoy__toggle-summary">
              Formación técnica y vida estudiantil a través del tiempo.
            </span>
            {openId !== "ipem69" && (
              <span className="ayer-hoy__toggle-secondary">Abrir +</span>
            )}
          </button>

          <div
            className="ayer-hoy__panel"
            id="ayer-hoy-panel-ipem69"
            role="region"
            aria-labelledby="ayer-hoy-header-ipem69"
          >
            <div className="ayer-hoy__panel-inner">
              <div className="ayer-hoy__content">
                <p>
                  La escuela técnica IPEM 69 de Jesús María es parte del recorrido
                  educativo de muchas generaciones. Estas fotos muestran su presencia
                  en el pasado y su imagen actual.
                </p>
              </div>

              <div className="ayer-hoy__gallery">
                {ipem69Gallery.map((foto, index) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
                    role="button"
                    tabIndex={0}
                    onClick={() => openImage(foto.src, foto.alt, ipem69Gallery, index)}
                    onKeyDown={(event) =>
                      handleImageKeyDown(event, foto.src, foto.alt, ipem69Gallery, index)
                    }
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
                  Nora Veronica Peralta
                  <br />
                  Ipetym 69 año 1947 ( gentileza de la srta Gringa Gris de Scrosoppi)
                  <br />
                  Facebook Fotos Antiguas de Colonia Caroya y Jesús María
                  <br />
                  Imagen hoy. Marcelo Saravia
                </p>
              </div>
            <div className="ayer-hoy__panel-actions">
              <button
                type="button"
                className="ayer-hoy__panel-toggle"
                onClick={() => toggleItem("ipem69")}
              >
                Cerrar —
              </button>
            </div>
            </div>
          </div>
        </article>
        <article className={`ayer-hoy__item${openId === "boulevard-aguero" ? " is-open" : ""}`}>
          <button
            type="button"
            className="ayer-hoy__toggle"
            onClick={() => toggleItem("boulevard-aguero")}
            onKeyDown={(event) => handleToggleKeyDown(event, "boulevard-aguero")}
            aria-expanded={openId === "boulevard-aguero"}
            aria-controls="ayer-hoy-panel-boulevard-aguero"
            id="ayer-hoy-header-boulevard-aguero"
          >
            <span className="ayer-hoy__toggle-title">
              Boulevard Agüero esquina Juan Bautista Alberdi en Jesús María. Ahora hay unos
              consultorios.
            </span>
            <span className="ayer-hoy__toggle-summary">
              Una esquina familiar que cambió con el tiempo.
            </span>
            {openId !== "boulevard-aguero" && (
              <span className="ayer-hoy__toggle-secondary">Abrir +</span>
            )}
          </button>

          <div
            className="ayer-hoy__panel"
            id="ayer-hoy-panel-boulevard-aguero"
            role="region"
            aria-labelledby="ayer-hoy-header-boulevard-aguero"
          >
            <div className="ayer-hoy__panel-inner">
              <div className="ayer-hoy__content">
                <p>
                  Comentó el sr. Edu Coltsauer que era la casa de sus abuelos Ester
                  D&apos;olivo y Luis Bergagna proxi 1935.
                </p>
                <p>
                  Fuente sr. Norma Aussello de Facebook. La foto actualizada por mi.
                </p>
              </div>

              <div className="ayer-hoy__gallery">
                {boulevardAgueroGallery.map((foto, index) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      openImage(foto.src, foto.alt, boulevardAgueroGallery, index)
                    }
                    onKeyDown={(event) =>
                      handleImageKeyDown(event, foto.src, foto.alt, boulevardAgueroGallery, index)
                    }
                    aria-label={`Agrandar imagen: ${foto.alt}`}
                  >
                    <img src={foto.src} alt={foto.alt} />
                    <div className="ayer-hoy__overlay">Haz click para agrandar</div>
                  </div>
                ))}
              </div>
            <div className="ayer-hoy__panel-actions">
              <button
                type="button"
                className="ayer-hoy__panel-toggle"
                onClick={() => toggleItem("boulevard-aguero")}
              >
                Cerrar —
              </button>
            </div>
            </div>
          </div>
        </article>
        <article className={`ayer-hoy__item${openId === "castillo-cespedes" ? " is-open" : ""}`}>
          <button
            type="button"
            className="ayer-hoy__toggle"
            onClick={() => toggleItem("castillo-cespedes")}
            onKeyDown={(event) => handleToggleKeyDown(event, "castillo-cespedes")}
            aria-expanded={openId === "castillo-cespedes"}
            aria-controls="ayer-hoy-panel-castillo-cespedes"
            id="ayer-hoy-header-castillo-cespedes"
          >
            <span className="ayer-hoy__toggle-title">Castillo Céspedes</span>
            <span className="ayer-hoy__toggle-summary">
              La torre histórica en el actual Club Social.
            </span>
            {openId !== "castillo-cespedes" && (
              <span className="ayer-hoy__toggle-secondary">Abrir +</span>
            )}
          </button>

          <div
            className="ayer-hoy__panel"
            id="ayer-hoy-panel-castillo-cespedes"
            role="region"
            aria-labelledby="ayer-hoy-header-castillo-cespedes"
          >
            <div className="ayer-hoy__panel-inner">
              <div className="ayer-hoy__content">
                <p>
                  La torre fue diseñada y construida entre 1896 y 1898 en el parque de la
                  casa de la familia Céspedes, actual Club Social.
                </p>
              </div>

              <div className="ayer-hoy__gallery">
                {castilloCespedesGallery.map((foto, index) => (
                  <div
                    key={foto.src}
                    className="ayer-hoy__gallery-item"
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      openImage(foto.src, foto.alt, castilloCespedesGallery, index)
                    }
                    onKeyDown={(event) =>
                      handleImageKeyDown(event, foto.src, foto.alt, castilloCespedesGallery, index)
                    }
                    aria-label={`Agrandar imagen: ${foto.alt}`}
                  >
                    <img src={foto.src} alt={foto.alt} />
                    <div className="ayer-hoy__overlay">Haz click para agrandar</div>
                  </div>
                ))}
              </div>
            <div className="ayer-hoy__panel-actions">
              <button
                type="button"
                className="ayer-hoy__panel-toggle"
                onClick={() => toggleItem("castillo-cespedes")}
              >
                Cerrar —
              </button>
            </div>
            </div>
          </div>
        </article>
        <article className={`ayer-hoy__item${openId === "ypf" ? " is-open" : ""}`}>
          <button
            type="button"
            className="ayer-hoy__toggle"
            onClick={() => toggleItem("ypf")}
            onKeyDown={(event) => handleToggleKeyDown(event, "ypf")}
            aria-expanded={openId === "ypf"}
            aria-controls="ayer-hoy-panel-ypf"
            id="ayer-hoy-header-ypf"
          >
            <span className="ayer-hoy__toggle-title">YPF</span>
            <span className="ayer-hoy__toggle-summary">
              La estación de servicio en distintas épocas.
            </span>
            {openId !== "ypf" && (
              <span className="ayer-hoy__toggle-secondary">Abrir +</span>
            )}
          </button>

          <div
            className="ayer-hoy__panel"
            id="ayer-hoy-panel-ypf"
            role="region"
            aria-labelledby="ayer-hoy-header-ypf"
          >
            <div className="ayer-hoy__panel-inner">
              <div className="ayer-hoy__content">
                <p>
                  Imágenes de la YPF de Jesús María que muestran su evolución con el
                  paso del tiempo y los cambios en su entorno.
                </p>
              </div>

              <div className="ayer-hoy__gallery">
                {ypfGallery.map((foto, index) => (
                  <div
                    key={foto.src}
                    className={`ayer-hoy__gallery-item${
                      index === 0 ? " is-feature" : ""
                    }${index === 3 ? " is-tall" : ""}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => openImage(foto.src, foto.alt, ypfGallery, index)}
                    onKeyDown={(event) =>
                      handleImageKeyDown(event, foto.src, foto.alt, ypfGallery, index)
                    }
                    aria-label={`Agrandar imagen: ${foto.alt}`}
                  >
                    <img src={foto.src} alt={foto.alt} />
                    <div className="ayer-hoy__overlay">Haz click para agrandar</div>
                  </div>
                ))}
              </div>
            <div className="ayer-hoy__panel-actions">
              <button
                type="button"
                className="ayer-hoy__panel-toggle"
                onClick={() => toggleItem("ypf")}
              >
                Cerrar —
              </button>
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
            {lightbox.gallery.length > 1 && (
              <button
                type="button"
                className="ayer-hoy__lightbox-nav is-prev"
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
                className="ayer-hoy__lightbox-nav is-next"
                onClick={showNextImage}
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            )}
            <div className="ayer-hoy__lightbox-actions">
              {lightbox.gallery.length > 1 && (
                <span className="ayer-hoy__lightbox-counter">
                  {lightbox.index + 1} / {lightbox.gallery.length}
                </span>
              )}
              <button type="button" className="ayer-hoy__lightbox-hint" onClick={closeImage}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default AyerHoy;
