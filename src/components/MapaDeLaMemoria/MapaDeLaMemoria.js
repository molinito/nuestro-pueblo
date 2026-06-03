import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../../hooks/usePageMeta";
import "./MapaDeLaMemoria.css";
import sinsacateThumb from "../Lugares/sinsacate/sinsacate-01.webp";
import estanciaThumb from "../Lugares/estancia-jesuitica/Museo Armas.webp";
import museoThumb from "../Historia/museo-jesuitico/museo.webp";
import estacionThumb from "../Lugares/estacion-tren/estacion-tren-01.webp";
import pioLeonThumb from "../Personajes/pio-leon/pio-leon-01.webp";
import copettiThumb from "../Lugares/copetti/IMG_5374.webp";
import platanosThumb from "../MemoriasDeNuestraTierra/platanos.webp";
import caroyaThumb from "../MemoriasDeNuestraTierra/san-antonio/1.webp";
import jesusMariaThumb from "../Historia/jesus-maria/portada.webp";
import festivalThumb from "../Historia/festival-jesus-maria/festival-antes.webp";
import torreCespedesThumb from "../Historia/torre-cespedes/castillo1.webp";
import casaGuyonThumb from "../Lugares/casa-guyon/guyon.webp";
import monserratThumb from "../Lugares/iglesia-monserrat/monserrat-1.webp";
import bodegaThumb from "../AyerHoy/bodega/bodega.webp";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "historia", label: "Historia" },
  { id: "lugares", label: "Lugares" },
  { id: "personajes", label: "Personajes" },
  { id: "memorias", label: "Memorias" },
  { id: "camino-real", label: "Camino Real" },
  { id: "inmigracion", label: "Inmigración" },
  { id: "ferrocarril", label: "Ferrocarril" }
];

const memoryPoints = [
  {
    id: "posta-sinsacate",
    title: "Posta de Sinsacate",
    place: "Sinsacate",
    category: "camino-real",
    categoryLabel: "Camino Real",
    x: 54,
    y: 8,
    thumb: sinsacateThumb,
    thumbAlt: "Posta de Sinsacate",
    summary:
      "Un punto clave del antiguo Camino Real al Alto Perú, asociado al descanso de viajeros, tropas patriotas y relatos fundacionales de la región.",
    links: [
      { label: "Ver lugar", to: "/lugares/posta-sinsacate" },
      { label: "San Martín y Sinsacate", to: "/historia/san-martin-posta-sinsacate" },
      { label: "Belgrano y el Camino Real", to: "/historia/belgrano-camino-real" }
    ]
  },
  {
    id: "estancia-caroya",
    title: "Estancia Caroya",
    place: "Colonia Caroya",
    category: "historia",
    categoryLabel: "Historia",
    x: 28,
    y: 45,
    thumb: estanciaThumb,
    thumbAlt: "Estancia Caroya",
    summary:
      "Casa histórica, estancia jesuítica y escenario de paso en los caminos que unieron la vida colonial, la independencia y la inmigración.",
    links: [
      { label: "Ver estancia", to: "/lugares/estancia-jesuitica" },
      { label: "Historia de San Martín", to: "/historia/san-martin-posta-sinsacate" }
    ]
  },
  {
    id: "museo-jesuitico",
    title: "Museo Jesuítico Nacional",
    place: "Jesús María",
    category: "lugares",
    categoryLabel: "Lugares",
    x: 44,
    y: 27,
    thumb: museoThumb,
    thumbAlt: "Museo Jesuítico Nacional",
    summary:
      "La antigua Estancia Jesuítica de Jesús María conserva una de las capas históricas más profundas del norte cordobés.",
    links: [
      { label: "Ver historia", to: "/historia/museo-jesuitico" },
      { label: "Ver lugar", to: "/lugares/estancia-jesuitica" }
    ]
  },
  {
    id: "estacion-tren",
    title: "Estación de tren",
    place: "Jesús María",
    category: "ferrocarril",
    categoryLabel: "Ferrocarril",
    x: 41,
    y: 55,
    thumb: estacionThumb,
    thumbAlt: "Estación de tren de Jesús María",
    summary:
      "El ferrocarril transformó el crecimiento urbano, conectó pueblos y dejó una memoria material que todavía ordena la ciudad.",
    links: [{ label: "Ver estación", to: "/lugares/estacion-tren" }]
  },
  {
    id: "pio-leon",
    title: "Pío León",
    place: "Jesús María",
    category: "personajes",
    categoryLabel: "Personajes",
    x: 48,
    y: 43,
    thumb: pioLeonThumb,
    thumbAlt: "Pío León",
    summary:
      "Figura central en la fundación urbana de Jesús María, ligada al crecimiento del pueblo y a la memoria institucional de la ciudad.",
    links: [{ label: "Ver personaje", to: "/personajes/pio-leon" }]
  },
  {
    id: "casa-copetti",
    title: "Casa Copetti",
    place: "Colonia Caroya",
    category: "lugares",
    categoryLabel: "Lugares",
    x: 79,
    y: 73,
    thumb: copettiThumb,
    thumbAlt: "Casa Copetti",
    summary:
      "Una casa museo íntima donde objetos familiares, fotografías y relatos conservan la memoria friulana de Colonia Caroya.",
    links: [{ label: "Ver Casa Copetti", to: "/lugares/casa-copetti" }]
  },
  {
    id: "avenida-platanos",
    title: "Av. San Martín y sus plátanos",
    place: "Colonia Caroya",
    category: "memorias",
    categoryLabel: "Memorias",
    x: 56,
    y: 63,
    thumb: platanosThumb,
    thumbAlt: "Plátanos de Colonia Caroya",
    summary:
      "El túnel verde de la avenida principal guarda una historia de paisaje, trabajo comunitario e identidad caroyense.",
    links: [{ label: "Leer memoria", to: "/memorias/platanos" }]
  },
  {
    id: "colonia-caroya",
    title: "Colonia Caroya",
    place: "Colonia Caroya",
    category: "inmigracion",
    categoryLabel: "Inmigración",
    x: 70,
    y: 78,
    thumb: caroyaThumb,
    thumbAlt: "Memoria de la inmigración en Colonia Caroya",
    summary:
      "Territorio de inmigración friulana, chacras, viñedos, lengua, comidas y memorias familiares que siguen marcando la identidad local.",
    links: [
      { label: "Rol de la mujer", to: "/memorias/rol-de-la-mujer" },
      { label: "San Antonio", to: "/memorias/san-antonio" }
    ]
  },
  {
    id: "jesus-maria",
    title: "Jesús María",
    place: "Jesús María",
    category: "historia",
    categoryLabel: "Historia",
    x: 47,
    y: 32,
    thumb: jesusMariaThumb,
    thumbAlt: "Jesús María histórica",
    summary:
      "Ciudad de raíz jesuítica, desarrollo ferroviario, festival, personajes y postales que conectan el pasado con la vida urbana actual.",
    links: [
      { label: "Historia del pueblo", to: "/historia/jesus-maria" },
      { label: "Personajes", to: "/personajes" }
    ]
  },
  {
    id: "festival-jesus-maria",
    title: "Festival de Jesús María",
    place: "Jesús María",
    category: "historia",
    categoryLabel: "Historia",
    x: 60,
    y: 29,
    thumb: festivalThumb,
    thumbAlt: "Festival Nacional de Doma y Folklore de Jesús María",
    summary:
      "Uno de los hitos culturales más reconocidos de la ciudad, nacido del esfuerzo comunitario y ligado a la identidad popular del norte cordobés.",
    links: [{ label: "Ver historia", to: "/historia/festival-jesus-maria" }]
  },
  {
    id: "torre-cespedes",
    title: "Torre Céspedes",
    place: "Jesús María",
    category: "historia",
    categoryLabel: "Historia",
    x: 61,
    y: 42,
    thumb: torreCespedesThumb,
    thumbAlt: "Torre Céspedes",
    summary:
      "Una postal urbana que conserva el recuerdo de una arquitectura singular y de las familias que marcaron la vida social de Jesús María.",
    links: [
      { label: "Ver historia", to: "/historia/torre-cespedes" },
      { label: "Ayer y Hoy", to: "/ayer-hoy/castillo-cespedes" }
    ]
  },
  {
    id: "casa-guyon",
    title: "Casa Guyón",
    place: "Colonia Caroya",
    category: "lugares",
    categoryLabel: "Lugares",
    x: 50,
    y: 57,
    thumb: casaGuyonThumb,
    thumbAlt: "Casa Guyón",
    summary:
      "El antiguo chalet Guyón reúne memoria familiar, poder económico, vida social y abandono en un punto muy reconocible de Colonia Caroya.",
    links: [{ label: "Ver Casa Guyón", to: "/lugares/casa-guyon" }]
  },
  {
    id: "iglesia-monserrat",
    title: "Iglesia de Monserrat",
    place: "Colonia Caroya",
    category: "lugares",
    categoryLabel: "Lugares",
    x: 73,
    y: 66,
    thumb: monserratThumb,
    thumbAlt: "Iglesia Nuestra Señora de Monserrat",
    summary:
      "Centro espiritual e histórico de Colonia Caroya, construido por inmigrantes friulanos y parte esencial del paisaje de la avenida.",
    links: [{ label: "Ver iglesia", to: "/lugares/iglesia-monserrat" }]
  },
  {
    id: "bodega-caroyense",
    title: "Bodega La Caroyense",
    place: "Colonia Caroya",
    category: "inmigracion",
    categoryLabel: "Inmigración",
    x: 62,
    y: 73,
    thumb: bodegaThumb,
    thumbAlt: "Bodega La Caroyense",
    summary:
      "Un emblema productivo de la colonia, donde la tradición vitivinícola y la memoria inmigrante siguen presentes en la identidad local.",
    links: [{ label: "Ver Ayer y Hoy", to: "/ayer-hoy/bodega" }]
  }
];

const MapaDeLaMemoria = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [selectedId, setSelectedId] = useState(memoryPoints[0].id);
  const [previewedId, setPreviewedId] = useState(null);

  usePageMeta({
    title: "Mapa de la Memoria | Nuestro Pueblo",
    description:
      "Mapa interactivo de historias, lugares, memorias y caminos de Jesus Maria, Colonia Caroya y Sinsacate.",
    path: "/mapa-de-la-memoria"
  });

  const visiblePoints = useMemo(() => {
    if (activeCategory === "todos") return memoryPoints;
    return memoryPoints.filter((point) => point.category === activeCategory);
  }, [activeCategory]);

  const selectedPoint =
    memoryPoints.find((point) => point.id === selectedId) || visiblePoints[0] || memoryPoints[0];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const nextPoint =
      categoryId === "todos"
        ? memoryPoints[0]
        : memoryPoints.find((point) => point.category === categoryId);
    if (nextPoint) setSelectedId(nextPoint.id);
    setPreviewedId(null);
  };

  const handlePointSelect = (pointId) => {
    setSelectedId(pointId);
  };

  const handlePointPointerDown = (pointId) => {
    handlePointSelect(pointId);
    setPreviewedId(pointId);
  };

  return (
    <main className="memoriaMap">
      <header className="memoriaMap__hero">
        <p className="memoriaMap__eyebrow">Memoria en el territorio</p>
        <h1 className="memoriaMap__title">Mapa de la Memoria</h1>
        <p className="memoriaMap__intro">
          Un recorrido visual por los lugares donde la historia local todavía puede
          leerse: postas, estancias, casas, caminos, estaciones y paisajes que conectan
          relatos ya publicados en Nuestro Pueblo.
        </p>
      </header>

      <section className="memoriaMap__filters" aria-label="Filtrar puntos del mapa">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`memoriaMap__filter ${
              activeCategory === category.id ? "is-active" : ""
            }`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </section>

      <section className="memoriaMap__workspace" aria-label="Mapa interactivo de la memoria">
        <div className="memoriaMap__canvasWrap">
          <div className="memoriaMap__canvas" role="img" aria-label="Mapa esquemático de la región">
            <svg className="memoriaMap__drawing" viewBox="0 0 100 100" aria-hidden="true">
              <path
                className="memoriaMap__green memoriaMap__green--west"
                d="M0 0 H45 C43 12 36 19 27 24 C16 30 11 41 11 54 C11 70 6 82 0 91 Z"
              />
              <path
                className="memoriaMap__green memoriaMap__green--east"
                d="M58 0 H100 V100 H78 C74 87 70 76 64 67 C58 57 56 45 60 33 C64 21 62 10 58 0 Z"
              />
              <path
                className="memoriaMap__town memoriaMap__town--jesus"
                d="M34 24 H56 V54 H31 V37 C31 31 32 27 34 24 Z"
              />
              <path
                className="memoriaMap__town memoriaMap__town--caroya"
                d="M43 50 H82 V91 H54 C48 82 44 72 41 61 C40 56 40 52 43 50 Z"
              />
              <g className="memoriaMap__urbanGrid memoriaMap__urbanGrid--jesus">
                <path d="M34 29 H56 M33 34 H56 M32 39 H56 M32 44 H55 M35 49 H54" />
                <path d="M37 25 V53 M42 24 V54 M47 24 V54 M52 25 V52" />
              </g>
              <g className="memoriaMap__urbanGrid memoriaMap__urbanGrid--caroya">
                <path d="M45 56 H78 M47 62 H80 M49 68 H82 M51 74 H82 M54 80 H80 M58 86 H78" />
                <path d="M49 52 V88 M55 52 V91 M61 52 V91 M67 54 V91 M73 57 V89" />
              </g>
              <path
                className="memoriaMap__river"
                d="M0 30 C12 30 20 33 31 30 C39 28 42 25 48 26 C55 28 58 32 67 33 C78 34 86 36 100 34"
              />
              <path
                className="memoriaMap__road"
                d="M55 0 C55 15 54 26 52 36 C50 46 47 57 45 67 C43 78 42 90 42 100"
              />
              <path
                className="memoriaMap__avenue"
                d="M37 43 C44 48 51 54 58 61 C66 69 73 78 83 90"
              />
              <path
                className="memoriaMap__secondaryRoad memoriaMap__secondaryRoad--ascochinga"
                d="M44 39 C34 37 25 36 16 35 C9 34 4 33 0 31"
              />
              <path
                className="memoriaMap__secondaryRoad memoriaMap__secondaryRoad--sierras"
                d="M37 43 C30 45 22 46 14 47 C7 48 3 50 0 53"
              />
              <path
                className="memoriaMap__secondaryRoad memoriaMap__secondaryRoad--cordoba"
                d="M45 67 C43 78 42 90 42 100"
              />
              <path
                className="memoriaMap__secondaryRoad memoriaMap__secondaryRoad--ruta"
                d="M83 90 C89 94 94 98 100 100"
              />
              <path
                className="memoriaMap__rail"
                d="M47 0 C47 16 46 29 45 40 C44 52 44 64 45 79 C46 88 47 94 48 100"
              />
              <path className="memoriaMap__routeShield" d="M49 42 h5 v5 h-5 z" />
              <text className="memoriaMap__routeNumber" x="51.5" y="45.9">9</text>
            </svg>

            <span className="memoriaMap__label memoriaMap__label--sinsacate">Sinsacate</span>
            <span className="memoriaMap__label memoriaMap__label--caroya">Colonia Caroya</span>
            <span className="memoriaMap__label memoriaMap__label--jesus">Jesús María</span>
            <span className="memoriaMap__routeLabel memoriaMap__routeLabel--road">Camino Real</span>
            <span className="memoriaMap__routeLabel memoriaMap__routeLabel--avenue">Av. San Martín</span>
            <span className="memoriaMap__routeLabel memoriaMap__routeLabel--river">Río Guanusacate</span>
            <span className="memoriaMap__routeLabel memoriaMap__routeLabel--rail">Ferrocarril</span>
            <span className="memoriaMap__routeLabel memoriaMap__routeLabel--ascochinga">Camino a Ascochinga</span>
            <span className="memoriaMap__routeLabel memoriaMap__routeLabel--cordoba">Hacia Córdoba</span>
            <span className="memoriaMap__routeLabel memoriaMap__routeLabel--ruta">Hacia Colonia Tirolesa</span>

            {visiblePoints.map((point) => (
              <button
                key={point.id}
                type="button"
                className={`memoriaMap__pin memoriaMap__pin--${point.category} ${
                  selectedPoint.id === point.id ? "is-selected" : ""
                } ${previewedId === point.id ? "is-previewed" : ""}`}
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                onPointerDown={() => handlePointPointerDown(point.id)}
                onClick={() => handlePointSelect(point.id)}
                aria-label={`Ver ${point.title}`}
              >
                <span className="memoriaMap__pinDot" />
                <span className="memoriaMap__pinText">{point.title}</span>
                <span className="memoriaMap__pinPreview" aria-hidden="true">
                  <img
                    src={point.thumb}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <span>
                    <strong>{point.title}</strong>
                    <small>{point.place}</small>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <aside className={`memoriaMap__detail memoriaMap__detail--${selectedPoint.category}`}>
          <p className="memoriaMap__detailKicker">{selectedPoint.categoryLabel}</p>
          <h2>{selectedPoint.title}</h2>
          <p className="memoriaMap__place">{selectedPoint.place}</p>
          <p className="memoriaMap__summary">{selectedPoint.summary}</p>
          <div className="memoriaMap__links" aria-label="Relatos relacionados">
            {selectedPoint.links.map((link) => (
              <Link key={`${selectedPoint.id}-${link.to}`} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <section className="memoriaMap__cards" aria-label="Puntos de memoria">
        {visiblePoints.map((point) => (
          <article
            key={`card-${point.id}`}
            className={`memoriaMap__card memoriaMap__card--${point.category} ${
              selectedPoint.id === point.id ? "is-selected" : ""
            }`}
          >
            <button type="button" onClick={() => handlePointSelect(point.id)}>
              <span>{point.categoryLabel}</span>
              <strong>{point.title}</strong>
            </button>
          </article>
        ))}
      </section>
    </main>
  );
};

export default MapaDeLaMemoria;
