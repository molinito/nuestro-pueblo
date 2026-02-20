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
    "La casona en ruinas y su parque botánico, testigos de una época de esplendor social.",
  address: "Dirección: Av. San Martín 1034, Colonia Caroya.",
  type: "gallery",
  gallery: guyonPhotos,
  paragraphs: [
    "La Casa Guyón en Colonia Caroya, también conocida como el Chalet de Guyón o \"castillo\", es una histórica casona en ruinas ubicada en el Parque Urbano María Fogliarini de Guyón, en Avenida San Martín 1034, un espacio verde municipal que ahora alberga el Skate Bike Park y zonas recreativas, conservando vestigios de su opulencia pasada como parque botánico y lugar de vida social, a pesar de las disputas de herencia que la llevaron al abandono y la posterior recuperación municipal.",
  ],
  featuresTitle: "Historia y características",
  features: [
    {
      title: "Orígenes",
      text: "Construida por Antonio Guyón y María Fogliarini, una adinerada familia que heredó propiedades, convirtiéndola en un símbolo de riqueza con materiales importados y un estilo ecléctico.",
    },
    {
      title: "Lujo y grandeza",
      text: "Era un lugar suntuoso, con mobiliario importado, cristalería, un piano y un gran jardín que funcionaba casi como un zoológico con aves exóticas, pajareras y diversas plantas.",
    },
    {
      title: "Vida social",
      text: "Fue centro de reuniones políticas y tertulias, con un estilo que recordaba a un castillo europeo.",
    },
  ],
  credit: {
    name: "Fotos: Sr. Leandro Mariano, Facebook. Restauración: M. Saravia",
    note: "Textos: Google Sites",
  },
};
