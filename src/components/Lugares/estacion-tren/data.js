import estacion01 from "./estacion-tren-01.webp";
import estacion02 from "./estacion-tren-02.webp";
import estacion03 from "./estacion-tren-03.webp";
import estacion04 from "./estacion-tren-04.webp";
import estacion05 from "./estacion-tren-05.webp";
import estacion06 from "./estacion-tren-06.webp";
import estacion07 from "./estacion-tren-07.webp";
import estacion08 from "./estacion-tren-08.webp";
import estacion09 from "./estacion-tren-09.webp";
import estacion10 from "./estacion-tren-10.webp";
import estacion11 from "./estacion-tren-11.webp";
import estacion12 from "./estacion-tren-12.webp";
import estacion13 from "./estacion-tren-13.webp";

const estacionFotos = [
  { src: estacion01, alt: "Estación de tren de Jesús María, vista histórica 1" },
  { src: estacion02, alt: "Estación de tren de Jesús María, vista histórica 2" },
  { src: estacion03, alt: "Estación de tren de Jesús María, vista histórica 3" },
  { src: estacion04, alt: "Estación de tren de Jesús María, vista histórica 4" },
  { src: estacion05, alt: "Estación de tren de Jesús María, vista histórica 5" },
  {
    src: estacion06,
    alt: "Estación de tren de Jesús María, vista histórica 6",
    caption: "Créditos: Museo Don Luis Biondi."
  },
  {
    src: estacion07,
    alt: "Estación de tren de Jesús María, vista histórica 7",
    caption: "Imagen modificada artificialmente."
  },
  {
    src: estacion08,
    alt: "Estación de tren de Jesús María, vista histórica 8",
    caption: "Viejo teléfono."
  },
  {
    src: estacion09,
    alt: "Estación de tren de Jesús María, vista histórica 9",
    caption: "Señalizador y bloqueador de vías."
  },
  {
    src: estacion10,
    alt: "Estación de tren de Jesús María, vista histórica 10",
    caption: "Telégrafo de la Estación."
  },
  { src: estacion11, alt: "Estación de tren de Jesús María, vista histórica 11" },
  { src: estacion12, alt: "Estación de tren de Jesús María, vista histórica 12" },
  { src: estacion13, alt: "Estación de tren de Jesús María, vista histórica 13" }
];

export const estacionTren = {
  id: "estacion-tren",
  title: "La estación que trajo el progreso",
  summary: "El tren como corazón de la ciudad y memoria sobre rieles.",
  type: "gallery",
  gallery: estacionFotos,
  videoLabel: "Video de la estación de tren",
  videoHref: "https://youtu.be/h5CfF6HlbbI",
  videoThumbnail: "https://img.youtube.com/vi/h5CfF6HlbbI/hqdefault.jpg",
  paragraphs: [
    "A fines del siglo XIX, cuando el silbido del tren rompía el silencio de los campos, Jesús María comenzaba a transformarse para siempre.",
    "En 1875, la llegada del ferrocarril no solo trajo rieles y locomotoras. Trajo futuro. La estación fue construida por la empresa Telfener y Cía., como parte del Ferrocarril Central Norte Argentino impulsado por la Ley Nº 493, que unió Córdoba con el norte del país.",
    "Por esa estación pasaron inmigrantes, sueños, cartas y mercaderías. El tren permitió transportar la producción agrícola, impulsó el crecimiento urbano e incorporó servicios como el telégrafo.",
    "Durante décadas, el tren fue el corazón de la ciudad. Un punto de encuentro donde la vida cotidiana se cruzaba con destinos lejanos. En 1958, la estación era de primera categoría, con servicios de pasajeros, carga, encomiendas y telégrafo.",
    "En su época dorada paraba el famoso tren \"El Norteño\", que conectaba Buenos Aires con Córdoba, Tucumán, Salta y Jujuy.",
    "Pero el tiempo cambió. En 1993 dejaron de circular trenes de pasajeros y el andén quedó en silencio, en el marco del cierre masivo de ramales en los años 90. Desde entonces, solo pasan trenes de carga de Trenes Argentinos Cargas.",
    "Sin embargo, la estación nunca murió.",
    "Hoy sigue en pie, como testigo de una época en la que el progreso llegaba sobre rieles.",
    "Porque en cada pared, en cada puerta de madera, todavía resuena el eco de aquel silbato.",
    "El sonido del tren… que alguna vez puso en marcha la historia de Jesús María.",
    {
      text:
        "Agradecimientos - Directora del Museo Luis Biondi, la Sra. Carmen Moyano, por la atención recibida y los relatos históricos que me compartió.",
      strong: true
    }
  ]
};
