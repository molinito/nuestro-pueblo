import React from "react";
import { Link, useLocation } from "react-router-dom";
import usePageMeta from "../../hooks/usePageMeta";
import "./RecorridosDeLaMemoria.css";
import sinsacateImg from "../Lugares/sinsacate/sinsacate-01.webp";
import museoImg from "../Historia/museo-jesuitico/museo.webp";
import estanciaImg from "../Lugares/estancia-jesuitica/Museo Armas.webp";
import belgranoImg from "../Historia/belgrano/WhatsApp Image 2026-02-25 at 17.18.50.webp";
import sanMartinImg from "../Historia/san-martin/san-martin-01.webp";

const routeStops = [
  {
    id: "sinsacate",
    number: "01",
    title: "Posta de Sinsacate",
    place: "Sinsacate",
    label: "Camino Real",
    image: sinsacateImg,
    alt: "Posta de Sinsacate",
    summary:
      "Punto de descanso, recambio de caballos y paso obligado para viajeros, tropas y mensajeros que recorrían el antiguo Camino Real al Alto Perú.",
    links: [
      { label: "Ver lugar", to: "/lugares/posta-sinsacate" },
      { label: "San Martín en Sinsacate", to: "/historia/san-martin-posta-sinsacate" }
    ]
  },
  {
    id: "jesus-maria",
    number: "02",
    title: "Museo Jesuítico Nacional",
    place: "Jesús María",
    label: "Estancia Jesuítica",
    image: museoImg,
    alt: "Museo Jesuítico Nacional de Jesús María",
    summary:
      "La antigua Estancia Jesús María conserva una de las capas patrimoniales más profundas de la región: producción, religión, caminos y vida colonial.",
    links: [
      { label: "Ver historia", to: "/historia/museo-jesuitico" },
      { label: "Ayer y Hoy", to: "/ayer-hoy/museo-jesuitico" }
    ]
  },
  {
    id: "colonia-caroya",
    number: "03",
    title: "Estancia Caroya",
    place: "Colonia Caroya",
    label: "Patrimonio",
    image: estanciaImg,
    alt: "Estancia Jesuítica de Caroya",
    summary:
      "Casa histórica vinculada al sistema jesuítico, al tránsito colonial y a momentos decisivos de la organización militar durante las guerras de independencia.",
    links: [
      { label: "Ver estancia", to: "/lugares/estancia-jesuitica" },
      { label: "San Martín y Caroya", to: "/historia/san-martin-posta-sinsacate" }
    ]
  },
  {
    id: "belgrano",
    number: "04",
    title: "Belgrano y el Camino Real",
    place: "Jesús María, Sinsacate y Caroya",
    label: "Próceres",
    image: belgranoImg,
    alt: "Relato sobre Manuel Belgrano y el Camino Real",
    summary:
      "El recorrido permite leer la región como un corredor estratégico por donde circularon decisiones, campañas y esperanzas en los años de la independencia.",
    links: [{ label: "Leer relato", to: "/historia/belgrano-camino-real" }]
  },
  {
    id: "san-martin",
    number: "05",
    title: "San Martín en la región",
    place: "Sinsacate y Caroya",
    label: "Independencia",
    image: sanMartinImg,
    alt: "Relato sobre San Martín y la Posta de Sinsacate",
    summary:
      "El paso de San Martín por la Posta de Sinsacate y la vinculación con Estancia Caroya refuerzan el valor local dentro de la historia nacional.",
    links: [{ label: "Leer relato", to: "/historia/san-martin-posta-sinsacate" }]
  }
];

const RecorridosDeLaMemoria = () => {
  const location = useLocation();

  usePageMeta({
    title: "Recorridos de la Memoria | Nuestro Pueblo",
    description:
      "Rutas patrimoniales por el Camino Real, la Posta de Sinsacate, Jesus Maria y Colonia Caroya.",
    path: location.pathname
  });

  return (
    <main className="recorridosMemoria">
      <header className="recorridosMemoria__hero">
        <div className="recorridosMemoria__heroCopy">
          <p className="recorridosMemoria__eyebrow">Recorridos de la Memoria</p>
          <h1>Camino Real: Sinsacate, Jesús María y Caroya</h1>
          <p>
            Una ruta guiada para recorrer el territorio como corredor histórico:
            postas, estancias jesuíticas y relatos vinculados al paso de Belgrano,
            San Martín y las campañas de la independencia.
          </p>
          <div className="recorridosMemoria__actions">
            <a href="#etapas">Ver etapas</a>
            <Link to="/mapa-de-la-memoria">Abrir mapa</Link>
          </div>
        </div>
        <aside className="recorridosMemoria__summary" aria-label="Datos del recorrido">
          <span>Primera ruta</span>
          <strong>5 etapas</strong>
          <p>Camino Real, patrimonio jesuítico e independencia.</p>
          <ul>
            <li>
              <a href="#sinsacate">Sinsacate</a>
            </li>
            <li>
              <a href="#jesus-maria">Jesús María</a>
            </li>
            <li>
              <a href="#colonia-caroya">Colonia Caroya</a>
            </li>
          </ul>
        </aside>
      </header>

      <section className="recorridosMemoria__intro" aria-label="Presentación del recorrido">
        <p>
          Este recorrido reúne contenidos ya publicados en el portal y los ordena como
          una experiencia territorial. Cada etapa permite entrar a relatos, lugares e
          historias relacionadas para comprender cómo la región participó en una red de
          caminos, estancias y decisiones que exceden lo local.
        </p>
      </section>

      <section className="recorridosMemoria__guide" aria-label="Cómo recorrer la ruta">
        <article>
          <span>Sentido sugerido</span>
          <h2>De norte a sur</h2>
          <p>
            Empezar por Sinsacate ayuda a leer el Camino Real como puerta de entrada,
            luego Jesús María permite entender la capa jesuítica y Caroya completa el
            vínculo entre estancia, independencia e inmigración.
          </p>
        </article>
        <article>
          <span>Modo de lectura</span>
          <h2>Territorio + relato</h2>
          <p>
            La ruta no reemplaza cada historia: las ordena. Primero se entiende el
            lugar en el recorrido y después se entra al relato completo desde los enlaces
            de cada etapa.
          </p>
        </article>
        <article>
          <span>Apoyo visual</span>
          <h2>Usar con el mapa</h2>
          <p>
            El Mapa de la Memoria permite ubicar cada punto y volver al recorrido para
            seguir el hilo narrativo sin perder la relación entre pueblos, caminos y
            edificios históricos.
          </p>
        </article>
      </section>

      <section className="recorridosMemoria__thread" aria-label="Hilo histórico del recorrido">
        <div className="recorridosMemoria__threadHeader">
          <p className="recorridosMemoria__eyebrow">Hilo histórico</p>
          <h2>Tres capas de una misma ruta</h2>
          <p>
            El Camino Real no se entiende como una sola fecha. Es una superposición de
            momentos: primero el sistema colonial y jesuítico, luego el tránsito de las
            campañas patriotas y finalmente la memoria inmigrante que resignificó el
            territorio.
          </p>
        </div>
        <div className="recorridosMemoria__threadItems">
          <article>
            <span>Siglos XVII-XVIII</span>
            <h3>Estancias y Camino Real</h3>
            <p>
              Las estancias jesuíticas organizaron producción, caminos y circulación de
              personas en una región que ya funcionaba como corredor estratégico.
            </p>
          </article>
          <article>
            <span>1810-1816</span>
            <h3>Independencia en tránsito</h3>
            <p>
              La ruta fue parte del movimiento de hombres, órdenes, caballos y campañas
              vinculadas a Belgrano, San Martín y el Ejército del Norte.
            </p>
          </article>
          <article>
            <span>Siglo XIX</span>
            <h3>Colonia e inmigración</h3>
            <p>
              Caroya sumó una nueva capa: familias inmigrantes, trabajo rural y una
              identidad friulana que se apoyó sobre un territorio con larga historia.
            </p>
          </article>
        </div>
      </section>

      <section className="recorridosMemoria__route" id="etapas" aria-label="Etapas del recorrido">
        {routeStops.map((stop) => (
          <article className="recorridosMemoria__stop" id={stop.id} key={stop.title}>
            <div className="recorridosMemoria__media">
              <img src={stop.image} alt={stop.alt} loading="lazy" decoding="async" />
            </div>
            <div className="recorridosMemoria__stopBody">
              <p className="recorridosMemoria__stopMeta">
                <span>{stop.number}</span>
                {stop.label}
              </p>
              <h2>{stop.title}</h2>
              <p className="recorridosMemoria__place">{stop.place}</p>
              <p className="recorridosMemoria__stopText">{stop.summary}</p>
              <div className="recorridosMemoria__links">
                {stop.links.map((link) => (
                  <Link key={`${stop.title}-${link.to}`} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="recorridosMemoria__closing" aria-label="Relaciones del recorrido">
        <div>
          <p className="recorridosMemoria__eyebrow">Territorio conectado</p>
          <h2>Del mapa al relato</h2>
          <p>
            La ruta funciona junto al Mapa de la Memoria: el mapa ubica los puntos y
            este recorrido propone una lectura ordenada para seguirlos como camino.
          </p>
        </div>
        <Link to="/mapa-de-la-memoria">Explorar en el mapa</Link>
      </section>
    </main>
  );
};

export default RecorridosDeLaMemoria;
