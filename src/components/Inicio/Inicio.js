import React, { useEffect } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Inicio.module.css";
import Carousel from "../Carousel/Carousel";

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
        Nuestro Pueblo: historia, lugares y memoria de Jesús María y Colonia Caroya
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
    </>
  );
};

export default CardList;
