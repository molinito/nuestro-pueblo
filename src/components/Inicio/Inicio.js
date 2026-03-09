import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Inicio.module.css";
import Carousel from "../Carousel/Carousel";
import sinsacateOrigen from "./origenes/sinsacate 1930.png";
import jesusMariaOrigen from "./origenes/jesus maria 1870-1880.png";
import caroyaOrigen from "./origenes/caroya.png";

const Card = ({ title, description, link, className }) => {
  return (
    <Box className={`${styles.card} ${className}`}>
      {" "}
      {/* Combina las clases para aplicar estilos */}
      <Box className={styles.cardContent}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
      <Flex justifyContent="flex-end">
        <Link to={link}>
          <Button colorScheme="#a30048" className={styles.button}>
            Seguir leyendo...
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

const CardList = () => {
  const location = useLocation();
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <>
      {" "}
      <br />
      <h1 className={styles.title1}>
        Nuestro Pueblo: historia, lugares y memoria de Jesús María, Colonia Caroya y Sinsacate
      </h1>

      <h2 className={styles.title}>Un viaje por nuestra tierra</h2>
      <p className={styles.intro}>
        Nuestro Pueblo es un portal cultural y local dedicado a preservar la historia, las
        costumbres, los lugares y las personas que forman parte de la identidad de Jesús
        María y Colonia Caroya, en el corazón de Córdoba, Argentina. Reunimos relatos del
        ayer y del hoy, fotografías históricas, memorias de vecinos y documentos que
        cuentan cómo se formaron estas ciudades, cómo crecieron sus fiestas, y por qué
        sus tradiciones siguen vivas. Este espacio nace para compartir la historia de
        nuestro pueblo con quienes viven aquí y con quienes se fueron, pero todavía
        buscan en internet recuerdos, nombres y postales de su tierra.
      </p>
      <p className={styles.intro}>
        En la sección Historia vas a encontrar hechos, fechas y relatos que explican el
        origen de la región; en Lugares, sitios y edificios que cuentan quiénes fuimos;
        en Personajes, las voces y rostros que dejaron huella; en Costumbres y Eventos,
        las celebraciones que nos reúnen año tras año. Si buscás "historia de Jesús María",
        "lugares históricos de Colonia Caroya" o "fotos antiguas del pueblo", este portal
        quiere ser tu punto de partida. También abrimos espacio a nuevas historias y
        aportes de la comunidad, para que el archivo siga creciendo.
      </p>

      <section className={styles.origins} aria-labelledby="origenes-title">
        <div className={styles.originsHeader}>
          <p className={styles.originsEyebrow}>Tres pueblos – tres orígenes distintos</p>
          <h2 className={styles.originsTitle} id="origenes-title">
            Los nombres que nos cuentan la historia
          </h2>
          <p className={styles.originsIntro}>
            En pocos kilómetros conviven tres capas de la historia argentina:
            pueblos originarios, colonización española y jesuítica, e inmigración europea.
          </p>
        </div>

        <div className={styles.originsGrid}>
          <article className={`${styles.originCard} ${styles.originCardSinsacate}`}>
            <div className={styles.originTop}>
              <h3>Sinsacate</h3>
              <span className={styles.originTag}>Origen indígena</span>
            </div>
            <p className={styles.originLead}>
              Pueblo del cacique Chin, voz de raíz originaria que aún nombra el territorio.
            </p>
            <details className={styles.originDetails}>
              <summary className={styles.originSummary}>Abrir origen →</summary>
              <p className={styles.originDetailTitle}>Origen del nombre “Sinsacate”</p>
              <p>
                El nombre proviene de la lengua sanavirona. “Chin” era un cacique y
                “Sacat” significaba pueblo o asentamiento. Sinsacate es “el pueblo del
                cacique Chin”, y en registros antiguos aparece como “Chinsacate”.
              </p>
              <p className={styles.originDetailTitle}>Un pueblo anterior a la colonizacion</p>
              <p>
                Antes de la llegada de los espanoles existia un asentamiento sanaviron en
                las lomadas cercanas al actual Camino Real, por eso el nombre conserva la
                memoria indigena del territorio.
              </p>
              <p className={styles.originDetailTitle}>La llegada de los espanoles</p>
              <p>
                Tras la fundacion de Cordoba en 1573, estas tierras fueron otorgadas en
                merced al capitan Miguel de Ardiles, uno de los primeros colonizadores
                de la region, y comenzaron a formarse estancias rurales.
              </p>
              <p className={styles.originDetailTitle}>La etapa jesuitica</p>
              <p>
                En el siglo XVII el territorio se integro al sistema productivo de la
                Estancia Jesus Maria, propiedad de la Compania de Jesus. Los jesuitas
                levantaron una capilla, un molino harinero y un pequeno puesto rural
                conocido como Puesto de San Pablo de Sinsacate.
              </p>
              <p className={styles.originDetailTitle}>
                La Posta de Sinsacate y el Camino Real
              </p>
              <p>
                Con la instalacion de la posta del Camino Real al Alto Peru, el lugar se
                volvio clave para el descanso de viajeros, el cambio de caballos y el
                transporte de correspondencia y mercancias, consolidando su importancia
                regional.
              </p>
              <p className={styles.originDetailTitle}>Etapas historicas</p>
              <ul className={styles.originTimeline}>
                <li>Asentamiento sanaviron de Chin (epoca prehispanica).</li>
                <li>Chinsacate / Sinsacate (pueblo indigena).</li>
                <li>Puesto de San Pablo de Sinsacate (epoca colonial).</li>
                <li>Posta de Sinsacate en el Camino Real.</li>
                <li>Localidad actual de Sinsacate.</li>
              </ul>
              <div
                className={styles.originMedia}
                role="button"
                tabIndex={0}
                onClick={() =>
                  setLightbox({
                    src: sinsacateOrigen,
                    alt: "Foto historica de Sinsacate (circa 1930)"
                  })
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setLightbox({
                      src: sinsacateOrigen,
                      alt: "Foto historica de Sinsacate (circa 1930)"
                    });
                  }
                }}
                aria-label="Agrandar imagen del origen de Sinsacate"
              >
                <img
                  src={sinsacateOrigen}
                  alt="Foto historica de Sinsacate (circa 1930)"
                  className={styles.originThumb}
                />
                <span className={styles.originOverlay}>Click para agrandar</span>
              </div>
              <p className={styles.originCaption}>
                Posta de Sinsacate año 1930. Fuente: museojesuitico.cultura.gob.ar.
              </p>
              <button
                type="button"
                className={styles.originClose}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  const details = event.currentTarget.closest("details");
                  if (!details) return;
                  details.open = false;
                  const summary = details.querySelector("summary");
                  if (summary) {
                    summary.focus();
                    summary.scrollIntoView({ block: "nearest" });
                  }
                }}
              >
                Cerrar origen
              </button>
            </details>
          </article>

          <article className={`${styles.originCard} ${styles.originCardJesusMaria}`}>
            <div className={styles.originTop}>
              <h3>Jesús María</h3>
              <span className={styles.originTag}>Origen jesuítico</span>
            </div>
            <p className={styles.originLead}>
              Estancia Jesuítica de Jesús María, fundada en 1618 como núcleo religioso.
            </p>
            <details className={styles.originDetails}>
              <summary className={styles.originSummary}>Abrir origen →</summary>
              <p className={styles.originDetailTitle}>El origen del nombre “Jesús María”</p>
              <p>
                Antes de que existiera la ciudad, el lugar era una gran estancia colonial
                conocida como Estancia Jesús María, fundada por los jesuitas en el siglo
                XVII.
              </p>
              <p className={styles.originDetailTitle}>La compra de las tierras en 1618</p>
              <p>
                El 15 de enero de 1618, la Compañía de Jesús compró estas tierras al
                alférez real Gaspar de Quevedo. La operación fue encargada al jesuita
                Pedro de Oñate, Provincial de la orden en la región.
              </p>
              <p className={styles.originDetailTitle}>El significado del nombre</p>
              <p>
                La estancia fue bautizada “Jesús María” en honor a Jesucristo y a la
                Virgen María, siguiendo la tradición de dedicar los establecimientos a
                figuras sagradas. Ese nombre se mantuvo y dio identidad a todo el lugar.
              </p>
              <p className={styles.originDetailTitle}>Antes del nombre actual: Guanusacate</p>
              <p>
                Antes de la llegada jesuítica, el territorio era conocido como
                Guanusacate, voz indígena interpretada como “agua muerta” o “bañado”,
                en referencia al río de la zona.
              </p>
              <p className={styles.originDetailTitle}>
                El detalle curioso relacionado con Pío León
              </p>
              <p>
                Cuando Pío León decidió fundar el pueblo en 1873, quería llamarlo “Villa
                Primera”. Sin embargo, la población y la estación del ferrocarril
                conservaron el nombre histórico del lugar: Jesús María, heredado de la
                antigua estancia jesuítica. El pasado colonial terminó imponiéndose
                incluso sobre el nombre pensado por el fundador.
              </p>
              <p className={styles.originDetailTitle}>Evolución del nombre</p>
              <ul className={styles.originTimeline}>
                <li>Guanusacate (época indígena).</li>
                <li>Estancia Jesús María (1618, época jesuítica).</li>
                <li>Villa fundada por Pío León (1873).</li>
                <li>Ciudad de Jesús María.</li>
              </ul>
              <div
                className={styles.originMedia}
                role="button"
                tabIndex={0}
                onClick={() =>
                  setLightbox({
                    src: jesusMariaOrigen,
                    alt: "Foto historica de Jesus Maria (1870-1880)"
                  })
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setLightbox({
                      src: jesusMariaOrigen,
                      alt: "Foto historica de Jesus Maria (1870-1880)"
                    });
                  }
                }}
                aria-label="Agrandar imagen del origen de Jesus Maria"
              >
                <img
                  src={jesusMariaOrigen}
                  alt="Foto historica de Jesus Maria (1870-1880)"
                  className={styles.originThumb}
                />
                <span className={styles.originOverlay}>Click para agrandar</span>
              </div>
              <p className={styles.originCaption}>
                Foto tomada detrás del museo 1870/1880 aproximadamente. Fuente: Grupo
                Facebook (autor sin identificar).
              </p>
              <button
                type="button"
                className={styles.originClose}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  const details = event.currentTarget.closest("details");
                  if (!details) return;
                  details.open = false;
                  const summary = details.querySelector("summary");
                  if (summary) {
                    summary.focus();
                    summary.scrollIntoView({ block: "nearest" });
                  }
                }}
              >
                Cerrar origen
              </button>
            </details>
          </article>

          <article className={`${styles.originCard} ${styles.originCardCaroya}`}>
            <div className={styles.originTop}>
              <h3>Colonia Caroya</h3>
              <span className={styles.originTag}>Origen inmigrante</span>
            </div>
            <p className={styles.originLead}>
              Colonia agrícola italiana fundada en 1878, raíz de un pueblo trabajador.
            </p>
            <details className={styles.originDetails}>
              <summary className={styles.originSummary}>Abrir origen →</summary>
              <p className={styles.originDetailTitle}>Origen del nombre “Colonia Caroya”</p>
              <p>
                El nombre Caroya es anterior a la colonia. Proviene de un término
                indígena, probablemente del quichua “Caroyapa”, interpretado como
                “cara de cuero”, y ya identificaba la zona antes de la colonización.
              </p>
              <p className={styles.originDetailTitle}>
                Caroya existía antes de los inmigrantes italianos
              </p>
              <p>
                El topónimo ya se usaba para identificar el territorio, y por eso se
                mantuvo cuando se creó la colonia agrícola a fines del siglo XIX.
              </p>
              <p className={styles.originDetailTitle}>La Estancia Caroya (siglo XVII)</p>
              <p>
                En 1616 la Compañía de Jesús estableció la Estancia Jesuítica de
                Caroya, uno de los primeros establecimientos rurales organizados por
                los jesuitas en Córdoba.
              </p>
              <p>
                El sistema productivo incluía las estancias Jesús María, Caroya,
                Santa Catalina y Alta Gracia. Allí se producían alimentos, vino y
                otros recursos para sostener al Colegio Monserrat y la Universidad
                de Córdoba.
              </p>
              <p className={styles.originDetailTitle}>El nacimiento de Colonia Caroya</p>
              <p>
                La localidad actual nació en 1878 con la política de colonias agrícolas
                impulsada por el presidente Nicolás Avellaneda. Llegaron familias del
                Friuli (norte de Italia) y se asentaron cerca de la antigua estancia.
                Por eso el nombre final es Colonia (colonia agrícola) + Caroya (nombre
                indígena del lugar).
              </p>
              <p className={styles.originDetailTitle}>Evolución histórica del nombre</p>
              <ul className={styles.originTimeline}>
                <li>Caroyapa (nombre indígena del territorio).</li>
                <li>Estancia Caroya (1616, época jesuítica).</li>
                <li>Colonia Caroya (1878, colonia de inmigrantes italianos).</li>
                <li>Ciudad actual de Colonia Caroya.</li>
              </ul>
              <div
                className={styles.originMedia}
                role="button"
                tabIndex={0}
                onClick={() =>
                  setLightbox({
                    src: caroyaOrigen,
                    alt: "Foto historica de Colonia Caroya"
                  })
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setLightbox({
                      src: caroyaOrigen,
                      alt: "Foto historica de Colonia Caroya"
                    });
                  }
                }}
                aria-label="Agrandar imagen del origen de Colonia Caroya"
              >
                <img
                  src={caroyaOrigen}
                  alt="Foto historica de Colonia Caroya"
                  className={styles.originThumb}
                />
                <span className={styles.originOverlay}>Click para agrandar</span>
              </div>
              <p className={styles.originCaption}>
                Salida inmigrantes desde Génova. Fuente: Museo Casa Caroya.
              </p>
              <button
                type="button"
                className={styles.originClose}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  const details = event.currentTarget.closest("details");
                  if (!details) return;
                  details.open = false;
                  const summary = details.querySelector("summary");
                  if (summary) {
                    summary.focus();
                    summary.scrollIntoView({ block: "nearest" });
                  }
                }}
              >
                Cerrar origen
              </button>
            </details>
          </article>
        </div>
      </section>

      <nav className={styles.quickLinks} aria-label="Secciones principales">
        <Link className={styles.quickLink} to="/historia">
          Historia del pueblo
        </Link>
        <Link className={styles.quickLink} to="/lugares">
          Lugares históricos
        </Link>
        <Link className={styles.quickLink} to="/personajes">
          Personajes de nuestra gente
        </Link>
        <Link className={styles.quickLink} to="/ayer-hoy">
          Ayer y Hoy
        </Link>
        <Link className={styles.quickLink} to="/eventos">
          Eventos y festivales
        </Link>
        <Link className={styles.quickLink} to="/costumbres">
          Costumbres y tradiciones
        </Link>
        <Link className={styles.quickLink} to="/gastronomia">
          Gastronomía de la región
        </Link>
      </nav>

      <br />

      <h3 className={styles.divider}>__________________________</h3>

      <br />

      <h2 className={styles.title}>Un lugar, un evento, una historia</h2>
      <h3 className={styles.subtitle}>
        Elige alguna de las postales para revivir cada momento vivido...
      </h3>
      <br />

      <div className={styles.cardContainer}>
        <Card
          className={styles.card1}
          title="Historia del pueblo"
          description="El museo es un importante sitio histórico y cultural que representa la herencia jesuita en la región. Se encuentra en la ciudad de Jesús María, en el camino real."
          link="/historia"
        />
        <Card
          className={styles.card2}
          title="Eventos y festivales"
          description="Festival Nacional de Doma y Folclore de Jesús María en Córdoba, Argentina. Es uno de los eventos más emblemáticos y tradicionales de la región y atrae a miles de personas..."
          link="/eventos"
        />
        <Card
          className={styles.card3}
          title="Costumbres y tradiciones"
          description="Fiesta Nacional e Internacional del Salame Quintero en Colonia Caroya, Córdoba, Argentina. Esta fiesta es un evento anual que celebra la tradición gastronómica..."
          link="/costumbres"
        />
      </div>

      <br />

      <h3 className={styles.divider}>__________________________</h3>

      <section id="album">
        <h2 className={styles.title}>Visita nuestra galería de fotos</h2>
        <h3 className={styles.subtitle}>
          Reviviremos momentos que quedaron plasmados en el ojo de una cámara, desde
          nuestros ancestros hasta hoy...
        </h3>
        <br />

        <Carousel />
      </section>

      {lightbox && (
        <div
          className={styles.originLightbox}
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <div
            className={styles.originLightboxContent}
            onClick={(event) => event.stopPropagation()}
          >
            <img src={lightbox.src} alt={lightbox.alt} />
            <button
              type="button"
              className={styles.originLightboxClose}
              onClick={() => setLightbox(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardList;
