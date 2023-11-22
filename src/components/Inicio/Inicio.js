import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Inicio.module.css";
import Carousel from "../Carousel/Carousel";

const Card = ({ title, description, link, className }) => {
  return (
    <Box className={`${styles.card} ${className}`}>
      {" "}
      {/* Combina las clases para aplicar estilos */}
      <Box className={styles.cardContent}>
        <Heading as="h2" size="md">
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
  return (
    <>
      {" "}
      <br />
      <h1 className={styles.title1}>Mi tierra, mi gente...!!</h1>

      <h1 className={styles.title}>Un viaje por nuestra tierra</h1>
      <h3 className={styles.subtitle}>
        ¡Bienvenidos a un viaje en el tiempo... a la historia de una tierra llena
        de encanto y misterio! Acompáñanos a descubrir los secretos y maravillas
        de Jesús María y Colonia Caroya, una joya escondida en el corazón de
        Argentina. Desde sus humildes comienzos con nuestros ancestros los
        Comechingones.., la llegada y la influencia de los Jesuitas en los siglos
        XVII y XVIII, hasta la mezcla fascinante de culturas que conformaron
        los colonos españoles, italianos, europeos y criollos desde épocas
        coloniales hasta principios del siglo XX. Cada rincón de esta tierra
        cuenta una historia, una leyenda, una tradición. Únete a nosotros en
        este fascinante recorrido mientras revelamos los relatos de sus
        personajes históricos, costumbres arraigadas y la vida vibrante de sus
        habitantes. ¡Prepárate para enamorarte de nuestra Tierra y su legado!
      </h3>

      <br />

      <h3 className={styles.divider}>__________________________</h3>

      <br />


             <h1 className={styles.title}>Un lugar, un evento, una historia</h1>
             <h3 className={styles.subtitle}>
              Elije alguna de las postales para revivir cada momento vivido...</h3>
              <br />
        
      <div className={styles.cardContainer}>
       
        <Card
          className={styles.card1}
          description="El museo es un importante sitio histórico y cultural que representa la herencia jesuita en la región. Se encuentra en la ciudad de Jesús Maria, en el camino real.."
          link="/historia"
        />
        <Card
          className={styles.card2}
          description="Festival Nacional de Doma y Folclore de Jesús María en Córdoba, Argentina. Es uno de los eventos más emblemáticos y tradicionales de la región y atrae a miles de personas..."
          link="/eventos"
        />
        <Card
          className={styles.card3}
          description="Fiesta Nacional e Internacional del Salame Quintero en Colonia Caroya, Córdoba, Argentina. Esta fiesta es un evento anual que celebra la tradición gastronómica de la región y..."
          link="/costumbres"
        />
      </div>

      <br />

      <h3 className={styles.divider}>__________________________</h3>

<h1 className={styles.title}>Visita nuestra galeria de fotos</h1>
<h3 className={styles.subtitle}>
 Reviviremos momentos que quedaron plasmados en el ojo de una camara, desde nuestros ancestros hasta hoy...</h3>
 <br />

 < Carousel />


      


    </>
  );
};

export default CardList;
