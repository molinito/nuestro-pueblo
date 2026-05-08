import guyon from "./guyon.webp";
import guyon1 from "./guyon1.webp";
import guyon2 from "./guyon2.webp";
import guyon3 from "./guyon3.webp";
import guyon4 from "./guyon4.webp";
import guyon5 from "./guyon5.webp";
import guyon6 from "./guyon6.webp";
import guyon7 from "./guyon7.webp";
import guyon8 from "./guyon8.webp";

const guyonPhotos = [
  { src: guyon, alt: "Casa Guyón: fachada principal" },
  { src: guyon1, alt: "Casa Guyón: carruaje antiguo en interiores" },
  { src: guyon2, alt: "Casa Guyón: muros y vegetación en el jardín" },
  { src: guyon3, alt: "Casa Guyón: arco y ladrillos cubiertos de hiedra" },
  { src: guyon4, alt: "Casa Guyón: galería interior con vegetación" },
  { src: guyon5, alt: "Casa Guyón: estructura de madera en el parque" },
  { src: guyon6, alt: "Casa Guyón: reja ornamental y campana" },
  { src: guyon7, alt: "Casa Guyón: sendero en el jardín botánico" },
  { src: guyon8, alt: "Casa Guyón: vista lateral de los jardines" },
];

export const casaGuyon = {
  id: "casa-guyon",
  title: "Casa Guyón",
  summary:
    "Entre la grandeza, el poder y el abandono: la historia del chalet Guyón en Colonia Caroya.",
  address: "Dirección: Av. San Martín 1034, Colonia Caroya.",
  type: "gallery",
  gallery: guyonPhotos,
  paragraphs: [
    "En el corazón de Colonia Caroya, sobre la tradicional Avenida San Martín, aún se alzan los restos de una construcción que alguna vez fue símbolo de poder, elegancia y vida social: la Casa Guyón.",
    "Hoy, rodeada por el Parque Urbano María Fogliarini de Guyón, entre jóvenes que recorren el Skate Park y familias que disfrutan del espacio verde, la vieja casona parece observar en silencio el paso del tiempo, conservando ecos de un pasado tan brillante como conflictivo.",
    "Pero la historia de este lugar no comienza con sus muros, sino mucho antes… con un hombre.",
  ],
  featuresTitle: "La historia de la Casa Guyón",
  features: [
    {
      title: "El origen",
      text: "Andrés Fogliarini, inmigrante italiano llegado en los primeros años de la colonia, era —según cuentan— un hombre que no sabía leer ni escribir. Sin embargo, poseía una intuición y una visión poco comunes que le permitieron convertirse en uno de los primeros grandes terratenientes de la región. Fue intendente de Colonia Caroya entre 1902 y 1905, y su influencia se extendía más allá de la política: era propietario de tierras, acciones de agua y estancias como “El Indio”, en la zona de San Durí. Tras un desacuerdo con la Municipalidad —que rechazó comprarle sus acciones de agua— decidió impulsar la creación de un nuevo asentamiento: Colonia Vicente Agüero.",
    },
    {
      title: "Herencia, matrimonio y ascenso social",
      text: "Toda esa riqueza recaería en una sola heredera: María Fogliarini. Dueña de más de 30 propiedades, su figura representaba la continuidad de ese poder económico. Su matrimonio con Antonio Guyón marcaría un giro inesperado: él, un maquinista del ferrocarril, pasó en pocos años de una vida humilde a convertirse en administrador de un vasto patrimonio… y más tarde, en Senador Provincial. Allí crecieron sus cinco hijos: Chicho, Nino, Pipo, Pipina y Porota.",
    },
    {
      title: "El chalet: símbolo de opulencia y vida social",
      text: "En la década de 1940, Antonio Guyón decidió construir una residencia acorde a su nueva posición. Eligió un terreno privilegiado, junto a la bodega Intihuasi, sobre la avenida principal. Así nació el famoso “chalet Guyón”, una casa de estilo ecléctico que muchos describían como un pequeño castillo europeo en medio de la colonia. La propiedad era imponente: siete habitaciones y tres baños, dos comedores amplios, una gran galería de acceso, uno de los primeros teléfonos fijos de la zona, mobiliario importado, cristalería fina y hasta un piano. El entorno la distinguía: un parque que parecía un jardín botánico, con aves exóticas, pajareras y especies vegetales traídas de distintos lugares. Desde la avenida, un túnel de árboles guiaba a los visitantes hasta la parte posterior de la casa, ya que el frente nunca llegó a completarse. La Casa Guyón no era solo una residencia: era un punto de encuentro, un escenario donde se mezclaban la política, las tertulias, las decisiones importantes y la vida social de una época.",
    },
    {
      title: "El inicio del conflicto",
      text: "Con la muerte de Antonio Guyón en 1956, comenzó lentamente el ocaso. Lo que había sido símbolo de unión familiar se transformó en motivo de disputa. La muerte de Rodolfo (Nino) fue el primer quiebre, y a partir de allí comenzaron los conflictos y la fragmentación del patrimonio.",
    },
    {
      title: "El abandono y la memoria",
      text: "Mientras los conflictos se multiplicaban en los papeles, el chalet quedaba vacío. Sin mantenimiento, sin habitantes, sin vida… la casa comenzó a deteriorarse. El paso del tiempo, el vandalismo y los saqueos hicieron el resto. Lo que alguna vez fue un símbolo de opulencia se convirtió en ruina. Hoy, integrada al parque urbano, la Casa Guyón convive con nuevas generaciones que tal vez no conocen su historia completa. Pero sus paredes, aunque desgastadas, todavía cuentan algo.",
    },
  ],
  credit: {
    name: "Fotos: Sr. Leandro Mariano, Facebook. Restauración: M. Saravia",
    note: "Textos: Google Sites",
  },
};
