import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./Costumbres.css";
import fiestaSalame from "./Fiesta salame.webp";
import chapita from "./chapita.webp";
import chapita1 from "./chapita1.webp";
import chapita2 from "./chapita2.webp";
import chapita3 from "./chapita3.webp";
import chapita4 from "./chapita4.webp";
import chapita5 from "./chapita5.webp";
import campanita from "./campanita.webp";
import campanita1 from "./campanita1.webp";
import campanita2 from "./campanita2.webp";
import pastillitas from "./pastillitas.webp";
import pastillita1 from "./pastillita1.webp";
import pastillita2 from "./pastillita2.webp";
import pastillita3 from "./pastillita3.webp";
import pastillita4 from "./pastillita4.webp";
import pastillita5 from "./pastillita5.webp";
import etiqueta1 from "./etiqueta1.png";
import etiqueta1a from "./etiqueta1a.png";
import etiqueta2 from "./etiqueta2.png";
import etiqueta2a from "./etiqueta2a.png";
import etiqueta3 from "./etiqueta3.png";
import etiqueta3a from "./etiqueta3a.png";
import etiqueta4a from "./etiqueta4a.png";
import etiqueta5 from "./etiqueta5.png";
import etiqueta5a from "./etiqueta5a.png";
import etiqueta6 from "./etiqueta6.png";
import etiqueta6a from "./etiqueta6a.png";
import etiqueta7 from "./etiqueta7.webp";
import etiquetasCover from "./etiquetas.webp";

const chapitas = [
  { src: chapita, alt: "Chapitas clásicas de colección" },
  { src: chapita1, alt: "Chapitas coleccionables de gaseosas" },
  { src: chapita2, alt: "Chapitas con personajes icónicos" },
  { src: chapita3, alt: "Chapitas históricas de marcas locales" },
  { src: chapita4, alt: "Chapitas con diseños de época" },
  { src: chapita5, alt: "Colección de chapitas argentinas" },
];

const campanitas = [
  { src: campanita, alt: "Portada del libro Campanita" },
  { src: campanita1, alt: "Páginas ilustradas del libro Campanita" },
  { src: campanita2, alt: "Lectura en el aula con el libro Campanita" },
];

const golosinas = [
  { src: pastillitas, alt: "Golosinas clásicas de la infancia" },
  { src: pastillita1, alt: "Pastillitas y caramelos nostálgicos" },
  { src: pastillita2, alt: "Golosinas de kiosco de los 70 y 80" },
  { src: pastillita3, alt: "Dulces icónicos de la infancia" },
  { src: pastillita4, alt: "Colección de golosinas clásicas" },
  { src: pastillita5, alt: "Golosinas que marcaron una época" },
];

const etiquetas = [
  { src: etiquetasCover, alt: "Juego de la chantas: colección de etiquetas" },
  { src: etiqueta1, alt: "Juego de la chantas: etiqueta 1" },
  { src: etiqueta1a, alt: "Juego de la chantas: etiqueta 2" },
  { src: etiqueta2, alt: "Juego de la chantas: etiqueta 3" },
  { src: etiqueta2a, alt: "Juego de la chantas: etiqueta 4" },
  { src: etiqueta3, alt: "Juego de la chantas: etiqueta 5" },
  { src: etiqueta3a, alt: "Juego de la chantas: etiqueta 6" },
  { src: etiqueta4a, alt: "Juego de la chantas: etiqueta 7" },
  { src: etiqueta5, alt: "Juego de la chantas: etiqueta 8" },
  { src: etiqueta5a, alt: "Juego de la chantas: etiqueta 9" },
  { src: etiqueta6, alt: "Juego de la chantas: etiqueta 10" },
  { src: etiqueta6a, alt: "Juego de la chantas: etiqueta 11" },
  { src: etiqueta7, alt: "Juego de la chantas: etiqueta 12" },
];

const costumbres = [
  {
    id: "salame",
    title: "Fiesta Nacional e Internacional del Salame",
    summary: "Un homenaje a la tradición culinaria que identifica a Colonia Caroya.",
    type: "single",
    image: fiestaSalame,
    alt: "Fiesta Nacional e Internacional del Salame en Colonia Caroya",
    credit: "Créditos Municipalidad Colonia Caroya",
    paragraphs: [
      "Fiesta Nacional e Internacional del Salame en Colonia Caroya, Córdoba, Argentina. Esta fiesta es un evento anual que celebra la tradición gastronómica de la región y, en particular, el famoso salame quintero, un embutido típico de la zona. La Fiesta del Salame se lleva a cabo en Colonia Caroya, una localidad con una rica historia vinculada a la cultura italiana y la producción de embutidos. Durante el festival, los visitantes pueden disfrutar de una amplia variedad de actividades, como degustaciones de salame, concursos para elegir el mejor salame, exhibiciones de artesanías locales, música folclórica, danzas tradicionales y otras expresiones culturales. Es una fiesta muy popular que atrae a turistas locales e internacionales, así como a personas de otras provincias de Argentina. El ambiente festivo y la deliciosa comida hacen que esta celebración sea única y atractiva para todos los amantes de la gastronomía y la cultura. La Fiesta Nacional e Internacional del Salame Quintero es una oportunidad para que los habitantes de Colonia Caroya muestren con orgullo su tradición culinaria y para que los visitantes descubran y disfruten de la riqueza cultural de esta encantadora localidad en Córdoba. Si tienes la oportunidad de visitarla durante el festival, seguramente tendrás una experiencia memorable y sabrosa.",
    ],
  },
  {
    id: "campanita",
    title: "El libro que nos enseñó a leer...",
    summary: "Campanita fue la puerta de entrada a las palabras y a la infancia compartida.",
    type: "gallery",
    paragraphs: [
      "Hubo un tiempo en que el mundo cabía en una mochila de cuero y el aroma de la mañana se mezclaba con el olor a lápiz recién tajado. Para muchos de nosotros, la puerta de entrada al universo de las palabras no fue una pantalla, sino un libro de tapa colorida y nombre musical: Campanita. Abrir sus páginas era iniciar un ritual. Todavía podemos escuchar en la memoria el pasar de sus hojas de papel rústico, mientras el dedo índice recorría con lentitud aquellas letras negras y gruesas. \"Mamá me ama. Amo a mi mamá\". No eran solo frases; eran conquistas. Las ilustraciones del libro tenían esa calidez de la acuarela y el trazo suave. Dibujos de niños con guardapolvos blancos impecables, pelotas de trapo, y una madre que siempre nos esperaba con la mesa puesta. Campanita no solo nos enseñó a leer; nos dibujó una infancia de patio, del juego del tejo, al elástico o la payana. Su método silábico era como una canción que repetíamos a coro en el aula, un eco de voces infantiles que hoy resuena con la nostalgia de lo que fue puro y simple.",
    ],
    gallery: campanitas,
  },
  {
    id: "chapitas",
    title: "Las chapitas de la infancia",
    summary:
      "Un ritual de barrio que convirtió tapas de gaseosa en tesoros inolvidables.",
    type: "gallery",
    paragraphs: [
      "Coleccionar chapitas en la Argentina de los 70, 80 y 90 era un ritual que comenzaba con un sonido seco: el psss-clac de una gaseosa abriéndose en el almacén del barrio. En ese instante, el mundo se detenía. No importaba el sabor del líquido, sino el reverso de esa tapa. Allí, protegida por un disco de goma gris (que a veces mordíamos para descubrir el premio oculto), habitaba la magia.",
      "Era la época donde los héroes no vivían en aplicaciones, sino en el acero litografiado. Los personajes de García Ferré —Hijitus, Anteojito, Larguirucho— nos miraban desde las tapas de Crush. En los 80, el desembarco de Disney de la mano de Coca-Cola convirtió a cada kiosco en una sucursal de la fantasía. Y si tenías la de \"vale por otra\", el día se transformaba en una victoria épica. Esa cultura de la chapita nos enseñó la paciencia del coleccionista y el valor de las cosas pequeñas. Por eso, aunque el metal se oxide, el brillo de ese recuerdo permanece intacto, recordándonos que alguna vez fuimos dueños de un tesoro que cabía perfectamente en la palma de la mano.",
    ],
    gallery: chapitas,
    credits: {
      title: "Imágenes: Diarios",
      links: [
        { href: "https://www.lanacion.com.ar/", label: "www.lanacion.com.ar" },
        { href: "https://www.losandes.com.ar/", label: "www.losandes.com.ar" },
        { href: "https://donchapi.com.ar/", label: "donchapi.com.ar" },
      ],
    },
  },
  {
    id: "golosinas",
    title: "Golosinas de la infancia que ya no están...!!!",
    summary:
      "Sabores de kiosco que marcaron una época y siguen vivos en la memoria.",
    type: "gallery",
    paragraphs: [
      "Hubo un tiempo en que la felicidad cabía en un bolsillo chico y pegajoso. Un tiempo en que salir a la vereda era toda una aventura y el mundo empezaba en la esquina del kiosco. Éramos chicos en los 70 y los 80, cuando la infancia tenía sabor a caramelo Media Hora, que parecía eterno, y a chicle Bazooka, duro como una promesa, con ese papelito que traía un chiste malo… pero inolvidable. Masticábamos risas, inflábamos globos torcidos y creíamos que eso era la eternidad.",
      "Las galletitas Manón crujían como las tardes de tarea a medio hacer, acompañadas por una chocolatada tibia y la radio sonando de fondo. Las pastillitas Billiken y las D.R.F. eran pequeñas joyas de colores, compartidas a escondidas, moneda de cambio en recreos y secretos. Y esos juguitos con forma de pelota, que primero se miraban, después se agitaban y recién al final se tomaban, eran pura magia embotellada: sabían a juego, a verano, a rodillas raspadas y manos sucias.",
      "No teníamos pantallas, pero teníamos tiempo. No había notificaciones, pero sí silbidos desde la ventana llamándonos a entrar. Hoy, muchas de esas golosinas ya no existen, pero siguen viviendo en algún rincón de la memoria, intactas. Porque no eran solo dulces: eran rituales, eran excusas para encontrarnos, eran la prueba de que fuimos niños… y fuimos felices sin saberlo. Y cada vez que recordamos esos sabores, por un instante, volvemos a serlo.",
    ],
    gallery: golosinas,
  },
  {
    id: "chantas-etiquetas",
    title: "El juego de la chantas...!!!(etiquetas)",
    summary: "Etiquetas coleccionables que reviven un juego clásico del barrio.",
    type: "gallery",
    videoLabel: "Video del juego de la chantas",
    videoHref: "https://youtu.be/nk0hjxJ-Wzc",
    videoThumbnail: "https://img.youtube.com/vi/nk0hjxJ-Wzc/hqdefault.jpg",
    paragraphs: [
      "Hubo un tiempo en que la infancia no necesitaba pantallas, ni instrucciones impresas, ni juguetes comprados. Alcanzaba con una vereda, un ladrillo gastado, una piedra cualquiera... y un puñado de etiquetas de cigarrillos dobladas con cuidado, como si fueran un tesoro. Era un juego simple, pero en él se jugaba todo. Las etiquetas se colocaban debajo del ladrillo, una sobre otra, mezcladas: las propias... y las de los otros. Cada una tenía su historia. Algunas venían de un padre, otras de un tío, otras de algún paquete encontrado en la calle. No eran solo papel: eran colores, marcas, rarezas, prestigio. Luego venía el silencio. Ese silencio único que solo existe antes de un intento decisivo. Desde la distancia acordada —nunca exacta, siempre discutida— la piedra viajaba por el aire. Un segundo eterno. Y entonces... el golpe. Si el ladrillo caía, no había dudas ni discusiones. El ganador se llevaba todo. Lo suyo... y lo ajeno. Los bolsillos se llenaban de papel, pero también de orgullo. Se caminaba distinto al volver a casa. Más erguido. Más grande. Y si el ladrillo no se movía... si apenas temblaba... había que aceptar la pérdida. Sin excusas. Sin revancha inmediata. Aprendíamos ahí, sin saberlo, que no siempre se gana. Que el riesgo existe. Que apostar implica perder. El juego no duraba horas. Duraba tardes enteras. Porque no era solo tirar una piedra: era mirar cómo tiraban los otros, era negociar turnos, era discutir reglas que cambiaban según el día, era aprender a esperar. Hoy, ese ladrillo ya no está. La piedra se perdió. Y las etiquetas, amarillentas, quedaron en algún cajón... si es que quedaron. Pero el recuerdo sigue ahí. Vivo. Intacto. Porque ese juego no era solo un juego. Era una escuela. Una forma de entender el mundo. Un ritual de barrio que nos enseñó valor, paciencia y coraje. Y aunque el tiempo haya pasado, cada vez que vemos un ladrillo en el suelo, algo en nosotros vuelve a apuntar... como si la infancia todavía estuviera esperando su turno para tirar.",
    ],
    credits: {
      title: "Fotos, narración y video : Marcelo Saravia",
      links: [],
    },
    gallery: etiquetas,
  },
];

const hasCostumbreId = (id) => costumbres.some((costumbre) => costumbre.id === id);

const Costumbres = () => {
  const { costumbreId } = useParams();
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const toggleItem = (id) => {
    setOpenId((current) => {
      const nextId = current === id ? null : id;
      navigate(nextId ? `/costumbres/${nextId}` : "/costumbres");
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
  const handleImageKeyDown = (event, src, alt, gallery = [{ src, alt }], index = 0) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImage(src, alt, gallery, index);
    }
  };
  const handleToggleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(id);
    }
  };

  useEffect(() => {
    if (!costumbreId) return;
    if (hasCostumbreId(costumbreId)) return;
    navigate("/costumbres", { replace: true });
  }, [costumbreId, navigate]);

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
    <main className="costumbres">
      <header className="costumbres__hero">
        <p className="costumbres__eyebrow">Nuestras costumbres</p>
        <h1 className="costumbres__title">Costumbres de mi tierra...mi gente ...!!!</h1>
        <p className="costumbres__subtitle">
          Tradiciones, festivales y memorias que siguen vivas en la comunidad.
        </p>
      </header>

      <section className="costumbres__accordion">
        {costumbres.map((costumbre) => {
          const isOpen = openId === costumbre.id;
          const panelId = `costumbres-panel-${costumbre.id}`;
          const headerId = `costumbres-header-${costumbre.id}`;

          return (
            <article
              key={costumbre.id}
              className={`costumbres__item${isOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="costumbres__toggle"
                onClick={() => toggleItem(costumbre.id)}
                onKeyDown={(event) => handleToggleKeyDown(event, costumbre.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                id={headerId}
              >
                <span className="costumbres__toggle-title">{costumbre.title}</span>
                <span className="costumbres__toggle-summary">{costumbre.summary}</span>
                <span className="costumbres__toggle-icon">
                  {isOpen ? "Cerrar —" : "Abrir +"}
                </span>
              </button>

              <div
                className="costumbres__panel"
                id={panelId}
                role="region"
                aria-labelledby={headerId}
              >
                <div className="costumbres__panel-inner">
                  {costumbre.type === "single" && (
                    <div className="costumbres__panel-grid">
                      <div className="costumbres__media-block">
                        <div
                          className="costumbres__media"
                          role="button"
                          tabIndex={0}
                          onClick={() => openImage(costumbre.image, costumbre.alt)}
                          onKeyDown={(event) =>
                            handleImageKeyDown(event, costumbre.image, costumbre.alt)
                          }
                          aria-label="Agrandar imagen"
                        >
                          <img src={costumbre.image} alt={costumbre.alt} />
                          <div className="costumbres__overlay">Haz click para agrandar</div>
                        </div>
                        <p className="costumbres__credit">{costumbre.credit}</p>
                      </div>
                      <div className="costumbres__content">
                        {costumbre.paragraphs.map((paragraph, index) => (
                          <p key={`${costumbre.id}-p-${index}`}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {costumbre.type === "gallery" && (
                    <>
                      <div className="costumbres__panel-grid costumbres__panel-grid--gallery">
                        <div className="costumbres__section-text">
                          {costumbre.paragraphs.map((paragraph, index) => (
                            <p key={`${costumbre.id}-p-${index}`}>{paragraph}</p>
                          ))}
                          {costumbre.videoHref && (
                            <div className="costumbres__video-card">
                              <p className="costumbres__video-title">{costumbre.videoLabel}</p>
                              <a
                                className="costumbres__video-link"
                                href={costumbre.videoHref}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  className="costumbres__video-thumb"
                                  src={costumbre.videoThumbnail}
                                  alt={costumbre.videoLabel}
                                />
                                <span className="costumbres__video-cta">
                                  Ver video en YouTube
                                </span>
                              </a>
                            </div>
                          )}
                        </div>
                        <div className="costumbres__gallery">
                          {costumbre.gallery.map((photo, index) => (
                            <div
                              key={photo.src}
                              className={`costumbres__gallery-item${
                                index === 0 ? " is-feature" : ""
                              }${index === 3 ? " is-tall" : ""}`}
                              role="button"
                              tabIndex={0}
                            onClick={() =>
                              openImage(photo.src, photo.alt, costumbre.gallery, index)
                            }
                            onKeyDown={(event) =>
                              handleImageKeyDown(event, photo.src, photo.alt, costumbre.gallery, index)
                            }
                            aria-label={`Agrandar imagen: ${photo.alt}`}
                          >
                              <img src={photo.src} alt={photo.alt} />
                              <div className="costumbres__overlay">Haz click para agrandar</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {costumbre.credits && (
                        <div className="costumbres__credits">
                          <span className="costumbres__credit-label">Créditos</span>
                          <p className="costumbres__credit-text">{costumbre.credits.title}</p>
                          <div className="costumbres__credit-links">
                            {costumbre.credits.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <NavLink className="button costumbres__back" to="/">
        Volver al Inicio
      </NavLink>

      {lightbox && (
        <div className="costumbres__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="costumbres__lightbox-content" onClick={(event) => event.stopPropagation()}>
            {lightbox.gallery.length > 1 && (
              <button
                type="button"
                className="costumbres__lightbox-nav is-prev"
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
                className="costumbres__lightbox-nav is-next"
                onClick={showNextImage}
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            )}
            <div className="costumbres__lightbox-actions">
              {lightbox.gallery.length > 1 && (
                <span className="costumbres__lightbox-counter">
                  {lightbox.index + 1} / {lightbox.gallery.length}
                </span>
              )}
              <button type="button" className="costumbres__lightbox-hint" onClick={closeImage}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Costumbres;
