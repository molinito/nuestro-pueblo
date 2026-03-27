import sinsacate01 from "./sinsacate-01.webp";
import sinsacate02 from "./sinsacate-02.webp";
import sinsacate03 from "./sinsacate-03.webp";
import sinsacate04 from "./sinsacate-04.webp";
import sinsacate05 from "./sinsacate-05.webp";
import sinsacate06 from "./sinsacate-06.webp";
import sinsacate07 from "./sinsacate-07.webp";
import sinsacate08 from "./sinsacate-08.webp";
import sinsacate09 from "./sinsacate-09.webp";
import sinsacate10 from "./sinsacate-10.webp";
import sinsacate11 from "./sinsacate-11.webp";
import sinsacate12 from "./sinsacate-12.webp";
import sinsacate13 from "./sinsacate-13.webp";
import sinsacate14 from "./sinsacate-14.webp";
import sinsacate15 from "./sinsacate-15.webp";
import sinsacate16 from "./sinsacate-16.webp";

const sinsacatePhotos = [
  { src: sinsacate01, alt: "La Posta de Sinsacate, vista 1" },
  { src: sinsacate02, alt: "La Posta de Sinsacate, vista 2" },
  { src: sinsacate03, alt: "La Posta de Sinsacate, vista 3" },
  { src: sinsacate04, alt: "La Posta de Sinsacate, vista 4" },
  { src: sinsacate05, alt: "La Posta de Sinsacate, vista 5" },
  { src: sinsacate06, alt: "La Posta de Sinsacate, vista 6" },
  { src: sinsacate07, alt: "La Posta de Sinsacate, vista 7" },
  { src: sinsacate08, alt: "La Posta de Sinsacate, vista 8" },
  { src: sinsacate09, alt: "La Posta de Sinsacate, vista 9" },
  { src: sinsacate10, alt: "La Posta de Sinsacate, vista 10" },
  { src: sinsacate11, alt: "La Posta de Sinsacate, vista 11" },
  { src: sinsacate12, alt: "La Posta de Sinsacate, vista 12" },
  { src: sinsacate13, alt: "La Posta de Sinsacate, vista 13" },
  {
    src: sinsacate14,
    alt: "La Posta de Sinsacate, vista 14",
    caption:
      "\"Un detalle interesante de la publicación original, es que se observan dos salas en el espacio donde hoy está el Mástil, sin un uso claramente establecido. También se puede ver que el techo de la capilla no es \"a dos aguas\" como ahora, sino con una sola caída hacia el norte. Tampoco tenía el atrio….\"\nGracias al colaborador Santiago Scalisi de Fotos Antiguas C.Cya y J.M. - Facebook - por el comentario descriptivo."
  },
  { src: sinsacate15, alt: "La Posta de Sinsacate, vista 15" },
  {
    src: sinsacate16,
    alt: "La Posta de Sinsacate, vista 16",
    caption:
      "\"Esa foto anterior a la restauración realizada por el estado nacional entre el 41 y el 46, antes de que fuera convertida en Museo. Si mal no recuerdo, las imágenes fueron tomadas por un fotógrafo de apellido \"González-González\" ...\"\nGracias al colaborador Santiago Scalisi de Fotos Antiguas C.Cya y J.M. - Facebook - por el comentario descriptivo."
  }
];

export const postaSinsacate = {
  id: "posta-sinsacate",
  title: "La Posta de Sinsacate",
  summary: "El lugar de descanso de generales y tropas.",
  address:
    "Ubicación: Se encuentra a unos 55 km de la ciudad de Córdoba y a solo 5 km de Jesús María, accesible por el antiguo Camino Real. Costo: La entrada es libre y gratuita.",
  type: "gallery",
  gallery: sinsacatePhotos,
  videoLabel: "Documental La Posta de Sinsacate",
  videoHref: "https://youtu.be/cNxhqsvA0Fg",
  videoThumbnail: "https://img.youtube.com/vi/cNxhqsvA0Fg/hqdefault.jpg",
  paragraphs: [
    "La Posta de Sinsacate es un sitio histórico clave ubicado en la localidad de Sinsacate, Córdoba, que funcionó como punto de descanso y recambio de caballos en el antiguo Camino Real que conectaba Buenos Aires con el Alto Perú. Actualmente es un Museo Nacional que preserva la arquitectura colonial y objetos de la vida rural del siglo XVIII y XIX.",
    "Importancia Histórica",
    "Hito del Camino Real: Fue considerada una de las postas más lujosas e importantes de la región, ofreciendo servicios de herrería, carpintería y alojamiento.",
    "Protagonistas: Por sus galerías pasaron próceres como Manuel Belgrano, José de San Martín, Juan Lavalle y Martín Miguel de Güemes.",
    "Tragedia de Facundo Quiroga: En febrero de 1835, tras ser asesinado en la cercana Barranca Yaco, los restos del caudillo riojano fueron velados en la capilla de la posta."
  ],
  credit: {
    name: "Texto, fotos y video, autor Marcelo Saravia."
  }
};
