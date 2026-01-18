import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Costumbres.css";
import fiestaSalame from "./Fiesta salame.jpg";
import chapita from "./chapita.png";
import chapita1 from "./chapita1.png";
import chapita2 from "./chapita2.jpg";
import chapita3 from "./chapita3.jpg";
import chapita4 from "./chapita4.jpg";
import chapita5 from "./chapita5.jpg";

const chapitas = [
  { src: chapita, alt: "Chapitas clásicas de colección" },
  { src: chapita1, alt: "Chapitas coleccionables de gaseosas" },
  { src: chapita2, alt: "Chapitas con personajes icónicos" },
  { src: chapita3, alt: "Chapitas históricas de marcas locales" },
  { src: chapita4, alt: "Chapitas con diseños de época" },
  { src: chapita5, alt: "Colección de chapitas argentinas" },
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
];

const Costumbres = () => {
  const [openId, setOpenId] = useState(costumbres[0]?.id ?? null);
  const [lightbox, setLightbox] = useState(null);

  const toggleItem = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const openImage = (src, alt) => setLightbox({ src, alt });
  const closeImage = () => setLightbox(null);
  const handleImageKeyDown = (event, src, alt) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImage(src, alt);
    }
  };
  const handleToggleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <main className="costumbres">
      <header className="costumbres__hero">
        <p className="costumbres__eyebrow">Nuestras costumbres</p>
        <h1 className="costumbres__title">Costumbres de Colonia Caroya</h1>
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
                              onClick={() => openImage(photo.src, photo.alt)}
                              onKeyDown={(event) =>
                                handleImageKeyDown(event, photo.src, photo.alt)
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
            <img src={lightbox.src} alt={lightbox.alt} />
            <button type="button" className="costumbres__lightbox-hint" onClick={closeImage}>
              Click para achicar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Costumbres;
