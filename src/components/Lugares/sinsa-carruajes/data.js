import carruajes01 from "./sinsa-carruajes-01.webp";
import carruajes02 from "./sinsa-carruajes-02.webp";
import carruajes03 from "./sinsa-carruajes-03.webp";
import carruajes04 from "./sinsa-carruajes-04.webp";
import carruajes05 from "./sinsa-carruajes-05.webp";
import carruajes06 from "./sinsa-carruajes-06.webp";
import carruajes07 from "./sinsa-carruajes-07.webp";
import carruajes08 from "./sinsa-carruajes-08.webp";

const carruajesPhotos = [
  {
    src: carruajes01,
    alt: "Wagonette o Breque",
    title: "Wagonette o Breque"
  },
  {
    src: carruajes02,
    alt: "Break francesa",
    title: "Break francesa"
  },
  {
    src: carruajes03,
    alt: "Berlina Francesa",
    title: "Berlina Francesa"
  },
  {
    src: carruajes04,
    alt: "Landau",
    title: "Landau"
  },
  {
    src: carruajes05,
    alt: "Vis-A-Vis",
    title: "Vis-A-Vis"
  },
  {
    src: carruajes06,
    alt: "Break",
    title: "Break"
  },
  {
    src: carruajes07,
    alt: "Coupé",
    title: "Coupé"
  },
  {
    src: carruajes08,
    alt: "Break",
    title: "Break"
  }
];

export const sinsaCarruajes = {
  id: "sinsa-carruajes",
  title: "De caminos, postas y carruajes",
  summary:
    "Rutas coloniales, postas del Camino Real y la historia de las carretas en Córdoba.",
  type: "gallery",
  gallery: carruajesPhotos,
  galleryCaptioned: true,
  videoLabel: "Mini documental de carruajes",
  videoHref: "https://youtu.be/g8zbiQeNKfo",
  videoThumbnail: "https://img.youtube.com/vi/g8zbiQeNKfo/hqdefault.jpg",
  videoCredit: "Video creado por Marcelo Saravia.",
  paragraphs: [
    "La conquista de América necesitó caminos para facilitar los desplazamientos de las expediciones. También para llevar las riquezas y productos a España.",
    "En la provincia de Córdoba, los conquistadores españoles se valieron de una red de caminos ya existentes desde la época prehispánica, verdaderas carreteras por donde los antiguos dueños de la tierra efectuaban sus transportes mediante el empleo de tropillas de llamas cargueras. Los españoles las utilizaron tal cual las encontraron con sus pesadas tropas de carretas.",
    "Camino Real, le llamaron, no por disposición o Cédula Real sino más bien por una cuestión de uso y costumbre. Eran llamados Camino Real los siguientes: de Buenos Aires al Alto Perú, de Buenos Aires a Chile pasando por el sur de Córdoba, de la posta de Los Talas a Catamarca y de Córdoba a Santa Fe.",
    "La carreta fue, durante tres siglos, el más importante medio de transporte de personas y mercancías en gran parte de nuestro territorio, pero también fue ciudad móvil, fortaleza, tesoro nacional, carro fúnebre, imprenta, burdel, correo, etc.",
    "Los primeros carruajes fueron importados, pero poco tiempo tardaron en fabricarse en el país. Tucumán fue la provincia que se especializó en construcción y reparación de carruajes."
  ],
  credit: {
    name:
      "Textos e imágenes extraídos de los salones de exhibición de La Posta de Sinsacate.",
    noteLabel: "Aclaración importante.",
    noteName: "Solo dos carruajes se exhiben actualmente en la Posta."
  }
};
