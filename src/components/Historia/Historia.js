import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Historia.css";
import museoImg from "./museo.webp";
import historiaImg from "./1.webp";

const historias = [
  {
    id: "museo-jesuitico",
    title: "Museo Jesuítico de Jesús María",
    summary:
      "Una visita a la herencia jesuita que marcó el camino cultural de la región.",
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
];

const Historia = () => {
  const [openId, setOpenId] = useState(historias[0]?.id ?? null);
  const [lightbox, setLightbox] = useState(null);

  const toggleItem = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const openImage = (src, alt) => setLightbox({ src, alt });
  const closeImage = () => setLightbox(null);
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
        <h1 className="historia__title">Relatos de Colonia Caroya</h1>
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
                <div className="historia__panel-inner">
                  <div
                    className="historia__media"
                    role="button"
                    tabIndex={0}
                    onClick={() => openImage(historia.image, historia.alt)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openImage(historia.image, historia.alt);
                      }
                    }}
                    aria-label={`Agrandar imagen de ${historia.title}`}
                  >
                    <img src={historia.image} alt={historia.alt} />
                    <div className="historia__overlay">Haz click para agrandar</div>
                  </div>
                  <div className="historia__content">
                    {historia.paragraphs.map((paragraph, index) => (
                      <p key={`${historia.id}-p-${index}`}>{paragraph}</p>
                    ))}
                    {historia.credit && (
                      <div className="historia__credit-inline">
                        <span>Créditos</span>
                        <p>{historia.credit}</p>
                      </div>
                    )}
                  </div>
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
