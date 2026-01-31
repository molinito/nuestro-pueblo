import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Historia.css";
import museoImg from "./museo.webp";
import historiaImg from "./1.webp";
import castillo1 from "./castillo1.webp";
import castillo2 from "./castillo2.webp";
import castillo3 from "./castillo3.webp";
import castillo4 from "./castillo4.webp";
import castillo5 from "./castillo5.webp";
import festivalAyer from "./festival-ayer.webp";
import festivalAntes from "./festival-antes.webp";
import festivalAntes1 from "./festival-antes1.webp";
import festivalAntes2 from "./festival-antes2.webp";
import festivalAntes3 from "./festival-antes3.webp";
import festivalAntes4 from "./festival-antes4.webp";

const torreCespedesPhotos = [
  { src: castillo1, alt: "Torre Céspedes (Club Social), vista principal" },
  { src: castillo2, alt: "Torre Céspedes, fachada con vegetación" },
  { src: castillo3, alt: "Torre Céspedes, torreón y muros de piedra" },
  { src: castillo4, alt: "Torre Céspedes, detalles de la arquitectura" },
  { src: castillo5, alt: "Torre Céspedes, vista del parque" },
];

const festivalPhotos = [
  { src: festivalAyer, alt: "Festival Nacional de Doma y Folklore de Jesús María" },
  { src: festivalAntes, alt: "Primeros años del festival en el Anfiteatro José Hernández" },
  { src: festivalAntes1, alt: "Escena histórica de la doma en Jesús María" },
  { src: festivalAntes2, alt: "Jineteada histórica en Jesús María" },
  { src: festivalAntes3, alt: "Noche de folklore en el escenario principal" },
  { src: festivalAntes4, alt: "Postales del público en el festival" },
];

const historias = [
  {
    id: "festival-jesus-maria",
    title: "Festival Nacional de Doma y Folklore de Jesús María",
    summary:
      "El Festival, la casa más grande de Argentina, donde conviven las tradiciones, el folclore, la doma y el canto.",
    type: "gallery",
    gallery: festivalPhotos,
    paragraphs: [
      "El Festival Nacional de Doma y Folklore de Jesús María nació en enero de 1966 en Córdoba, Argentina, impulsado por la cooperadora de la Escuela Primer Teniente Morandini para recaudar fondos, combinando la jineteada con el canto nativo. Con 60 ediciones en 2026, consolidó a la ciudad como sede folclórica, destacándose por su fin solidario que beneficia a más de 20 escuelas.",
      "El evento se realiza ininterrumpidamente, salvo en 2021 por la pandemia, consolidándose como una de las fiestas más importantes del país durante el verano cordobés.",
    ],
    listTitle: "Hitos y Detalles de su Historia",
    list: [
      "Orígenes (1965): La idea surgió el 16 de mayo de 1965, impulsada por Enrique Jarbas Pereyra, para realizar un evento de doma y folklore con el objetivo de ayudar a instituciones escolares.",
      "Primera Edición (1966): Se llevó a cabo del 8 al 16 de enero de 1966 en el Anfiteatro José Hernández, con la participación de figuras como Jorge Cafrune y el Chango Nieto.",
      "Compromiso Comunitario: Miembros de la primera comisión llegaron a hipotecar sus casas para financiar el evento, construyendo el anfiteatro que hoy es un coloso de la tradición.",
      "Crecimiento: De recibir 45,000 personas en su inicio, pasó a superar las 200,000 localidades vendidas en años recientes, convirtiéndose en uno de los festivales más importantes de América.",
      "Tradición: El festival mantiene la esencia criolla, la música folclórica y las competencias de jineteada (crina limpia, gurupa sureña y bastos).",
    ],
  },
  {
    id: "museo-jesuitico",
    title: "Museo Jesuítico de Jesús María",
    summary:
      "Una visita a la herencia jesuita que marcó el camino cultural de la región.",
    type: "single",
    image: museoImg,
    alt: "Museo Jesuítico de Jesús María",
    paragraphs: [
      "Museo Jesuítico de Jesús María en Córdoba, Argentina. El museo es un importante sitio histórico y cultural que representa la herencia jesuita en la región. Se encuentra en la ciudad de Jesús María, que tiene una rica historia relacionada con la presencia de la Compañía de Jesús en el siglo XVII. El Museo Jesuítico se estableció en una antigua estancia jesuita, conocida como Estancia de Jesús María, que data del siglo XVII. La estancia fue un centro agrícola y ganadero, y los jesuitas jugaron un papel significativo en el desarrollo de la región durante su estadía en el lugar.",
      "El museo exhibe una variedad de objetos y artefactos históricos que ilustran la vida y el trabajo de los jesuitas en la estancia, así como la influencia que tuvieron en la comunidad local y en la evangelización de la población indígena. Además de las exposiciones permanentes, el museo también alberga eventos culturales y actividades educativas para los visitantes. Es un destino interesante para aquellos interesados en la historia jesuita, la historia colonial argentina y la preservación del patrimonio cultural. Si tienes la oportunidad de visitar Jesús María, te recomiendo que no te pierdas la experiencia de conocer este fascinante museo y sumergirte en la historia de la región.",
    ],
  },
  {
    id: "colonia-san-martin",
    title: "Colonia San Martín y el nombre Caroya",
    summary:
      "El nombre Caroya prevaleció y quedó grabado en la memoria fundacional.",
    type: "single",
    image: historiaImg,
    alt: "Fotografía histórica de Colonia Caroya",
    paragraphs: [
      "Cuando llegaron los inmigrantes, la nueva localidad ya estaban bautizada como Colonia San Martín. Al final, la palabra Caroya, que identificó a estas tierras desde el Siglo XVII, quedó como nombre de la colonia.",
      'La "Calle Ancha" fue bautizada como Avenida San Martín en 1959.',
      "El año 1878 quedó marcado por ser el de la fundación de Colonia Caroya, pero en el país se conmemoraba el primer centenario del General San Martín, el Padre de la Patria y Libertador también de Chile y Perú.",
      "Exactamente 100 años después, Argentina estaba a punto de recibir al grupo de inmigrantes que había partido del puerto de Génova atraídos por una Ley que ofrecía tierras listas para producir.",
      'Por eso, este lugar estaba destinado a llamarse "Colonia San Martín", en homenaje al prócer.',
      '"Por notas existentes en el Archivo general de la Nación, y ante la inexistencia de Decretos oficiales, se sabe que a la Colonia se la denominó en un principio "Colonia San Martín", como homenaje al Padre de la Patria, ya que ese año se celebraban los cien años del nacimiento del General. Mas se desconoce por qué circunstancia se cambió el nombre y por qué se adoptó el de CAROYA, ni en qué momento se produjo tal adopción", está escrito en el libro "100 años de Historia de Colonia Caroya", de Marta Nuñez.',
      'El diario "Eco de Córdoba" hace referencia a eso cuando los inmigrantes llegaron a la Capital cordobesa después del viaje en tren desde Buenos Aires.',
      '"... Los trescientos colonos que poblarán la Colonia San Martín en Caroya llegaron anoche. Todos ellos vienen muy contentos y más lo estarán una vez que lleguen a su destino y vean la excelente calidad de los terrenos que van a ocupar y labrar para arrancarle el secreto de la prosperidad", reza en sus históricas páginas.',
      "Pero finalmente prevaleció el nombre Caroya, que ya identificaba a estas tierras desde 1616, cuando se construye la Estancia Jesuítica.",
      "Al cumplirse un siglo de la muerte del General, el 1950, se bautizó a un nuevo club caroyense con el nombre de San Martín.",
      'El pueblo "Colonia San Martín" existe en el Sur de Buenos Aires, pero no por homenaje al héroe nacional sino por el San Martín de Tours.',
    ],
    credit: "Foto y Texto: Sr. Mariano Aliaga (tomados de Facebook)",
  },
  {
    id: "torre-cespedes",
    title: "Torre Céspedes (Club Social)",
    summary:
      "Un pequeño castillo inspirado en las torres francesas y la memoria del Club Social.",
    type: "gallery",
    gallery: torreCespedesPhotos,
    paragraphs: [
      "La torre fue diseñada y construida entre 1896 y 1898, en el parque de la casa de la familia Céspedes, el actual Club Social.",
      "Fue encargada por Don Gabriel Céspedes al ingeniero y constructor Pedro Buscá, oriundo de Mataró, España, para completar su casa de veraneo. Es un pequeño castillo, único en su tipo, con orígenes en las torres de homenaje francesas.",
      "Ubicada en la calle Cástulo Peña 387 en Jesús María, la construcción evoca a Alicante, ciudad natal del inmigrante español Gabriel Céspedes. En el parque, árboles exóticos crecían en perfecta armonía con la construcción y conformaban un verdadero jardín botánico, todo regado por una red de acequias.",
    ],
    video: {
      title: "Los misterios de la Torre Céspedes",
      source: "el doce.tv",
      href: "https://www.youtube.com/watch?v=2q0W3hPAKwE",
      label: "Ver nota en YouTube",
    },
  },
];

const Historia = () => {
  const [openId, setOpenId] = useState(historias[0]?.id ?? null);
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
  const handleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <main className="historia">
      <header className="historia__hero">
        <p className="historia__eyebrow">Nuestra historia</p>
        <h1 className="historia__title">Relatos de mi tierra...!!</h1>
        <p className="historia__subtitle">
          Memorias que explican el origen de nuestros nombres, caminos y
          tradiciones.
        </p>
      </header>

      <section className="historia__accordion">
        {historias.map((historia) => {
          const isOpen = openId === historia.id;
          const panelId = `historia-panel-${historia.id}`;
          const headerId = `historia-header-${historia.id}`;

          return (
            <article
              key={historia.id}
              className={`historia__item${isOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="historia__toggle"
                onClick={() => toggleItem(historia.id)}
                onKeyDown={(event) => handleKeyDown(event, historia.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                id={headerId}
              >
                <span className="historia__toggle-title">{historia.title}</span>
                <span className="historia__toggle-summary">{historia.summary}</span>
                <span className="historia__toggle-icon">
                  {isOpen ? "Cerrar —" : "Abrir +"}
                </span>
              </button>
              <div
                className="historia__panel"
                id={panelId}
                role="region"
                aria-labelledby={headerId}
              >
                <div
                  className={`historia__panel-inner${
                    historia.type === "gallery" ? " historia__panel-inner--gallery" : ""
                  }`}
                >
                  {historia.type === "single" && (
                    <>
                      <div
                        className="historia__media"
                        role="button"
                        tabIndex={0}
                        onClick={() => openImage(historia.image, historia.alt)}
                        onKeyDown={(event) =>
                          handleImageKeyDown(event, historia.image, historia.alt)
                        }
                        aria-label={`Agrandar imagen de ${historia.title}`}
                      >
                        <img src={historia.image} alt={historia.alt} />
                        <div className="historia__overlay">Haz click para agrandar</div>
                      </div>
                      <div className="historia__content">
                        {historia.paragraphs.map((paragraph, index) => (
                          <p key={`${historia.id}-p-${index}`}>{paragraph}</p>
                        ))}
                        {historia.list && (
                          <>
                            {historia.listTitle && (
                              <p className="historia__list-title">{historia.listTitle}</p>
                            )}
                            <ul className="historia__list">
                              {historia.list.map((item, index) => (
                                <li key={`${historia.id}-li-${index}`}>{item}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        {historia.credit && (
                          <div className="historia__credit-inline">
                            <span>Créditos</span>
                            <p>{historia.credit}</p>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {historia.type === "gallery" && (
                    <>
                      <div className="historia__content">
                        {historia.paragraphs.map((paragraph, index) => (
                          <p key={`${historia.id}-p-${index}`}>{paragraph}</p>
                        ))}
                        {historia.list && (
                          <>
                            {historia.listTitle && (
                              <p className="historia__list-title">{historia.listTitle}</p>
                            )}
                            <ul className="historia__list">
                              {historia.list.map((item, index) => (
                                <li key={`${historia.id}-li-${index}`}>{item}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        {historia.video && (
                          <div className="historia__video">
                            <span className="historia__video-label">
                              Mira el video…!!
                            </span>
                            <p className="historia__video-title">{historia.video.title}</p>
                            <p className="historia__video-source">
                              Fuente: {historia.video.source}
                            </p>
                            <a
                              className="historia__video-link"
                              href={historia.video.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {historia.video.label}
                            </a>
                          </div>
                        )}
                      </div>
                      <div className="historia__gallery">
                        {historia.gallery.map((photo, index) => (
                          <div
                            key={photo.src}
                            className={`historia__gallery-item${
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
                            <div className="historia__overlay">Haz click para agrandar</div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <NavLink className="button historia__back" to="/">
        Volver al Inicio
      </NavLink>

      {lightbox && (
        <div className="historia__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="historia__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <button type="button" className="historia__lightbox-hint" onClick={closeImage}>
              Click para achicar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Historia;
