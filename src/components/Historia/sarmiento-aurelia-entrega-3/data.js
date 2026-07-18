import sarmientoAureliaEntregaUno from "../sarmiento-aurelia/data";
import nogalCentella from "./nogal-centella.webp";
import nogalCentellaDiario from "./nogal-centella-diario.webp";
import nogalIniciales from "./nogal-iniciales.webp";
import nogalRestoActual from "./nogal-resto-actual.webp";
import nogalRestoActualDos from "./nogal-resto-actual-2.webp";
import nogalRestoBiblioteca from "./nogal-resto-biblioteca.webp";
import estanciaMuseoHistorica from "./estancia-museo-historica.webp";
import estanciaGaleriaHistorica from "./estancia-galeria-historica.webp";

const sarmientoAureliaEntregaTres = {
  ...sarmientoAureliaEntregaUno,
  id: "sarmiento-aurelia-entrega-3",
  title: "Sarmiento y Aurelia: el nogal histórico",
  summary:
    "Entrega III: el nogal histórico, entre la memoria colectiva y los documentos conservados por la tradición local.",
  series: {
    title: "Investigación histórica",
    currentPart: 3,
    totalParts: 4,
    parts: [
      { number: 1, href: "/historia/sarmiento-aurelia" },
      { number: 2, href: "/historia/sarmiento-aurelia-entrega-2" },
      { number: 4, href: "/historia/sarmiento-aurelia-entrega-4" },
    ],
  },
  galleryNote:
    "Galería documental sobre el nogal histórico, sus restos preservados y las vistas de la Estancia que sostienen esta memoria local.",
  gallery: [
    {
      src: nogalIniciales,
      alt: "Fotografía histórica del nogal con las iniciales D.F.S. visibles en el tronco",
      caption: "Fotografía histórica del nogal con las iniciales D.F.S. visibles en el tronco",
    },
    {
      src: nogalCentella,
      alt: "Registro histórico del nogal tras la centella de diciembre de 1942",
      caption: "Registro histórico del nogal tras la centella de diciembre de 1942",
    },
    {
      src: nogalCentellaDiario,
      alt: "Recorte periodístico sobre la centella que dañó el nogal histórico",
      caption: "Recorte periodístico sobre la centella que dañó el nogal histórico",
    },
    {
      src: nogalRestoBiblioteca,
      alt: "Resto preservado del nogal histórico en la biblioteca D. F. Sarmiento de Jesús María",
      caption: "Resto preservado del nogal histórico en la biblioteca D. F. Sarmiento de Jesús María",
    },
    {
      src: nogalRestoActual,
      alt: "Ubicación actual del tronco del nogal histórico cercado dentro del parque",
      caption: "Ubicación actual del tronco del nogal histórico cercado dentro del parque",
    },
    {
      src: nogalRestoActualDos,
      alt: "Otra vista actual del lugar donde se conserva el tronco del nogal histórico",
      caption: "Otra vista actual del lugar donde se conserva el tronco del nogal histórico",
    },
    {
      src: estanciaMuseoHistorica,
      alt: "Vista histórica de la Estancia Jesuítica de Jesús María",
      caption: "Vista histórica de la Estancia Jesuítica de Jesús María",
    },
    {
      src: estanciaGaleriaHistorica,
      alt: "Galería histórica de la Estancia Jesuítica con su arquitectura original",
      caption: "Galería histórica de la Estancia Jesuítica con su arquitectura original",
    },
  ],
  inlineGalleries: [
    {
      afterSectionIndex: 1,
      images: [
        {
          src: nogalIniciales,
          alt: "Fotografía histórica del nogal con las iniciales D.F.S. visibles en el tronco",
          caption: "La tradición local identificó en este tronco las iniciales asociadas a Sarmiento",
          document: {
            number: 1,
            title: "Fotografía histórica del nogal con las iniciales D.F.S. visibles en el tronco",
            description:
              "La tradición local identificó en este tronco las iniciales asociadas a Sarmiento",
          },
        },
        {
          src: estanciaMuseoHistorica,
          alt: "Vista histórica de la Estancia Jesuítica de Jesús María",
          caption: "La Estancia fue el paisaje material donde esta memoria comenzó a fijarse",
          document: {
            number: 2,
            title: "Vista histórica de la Estancia Jesuítica de Jesús María",
            description: "La Estancia fue el paisaje material donde esta memoria comenzó a fijarse",
          },
        },
      ],
    },
    {
      afterSectionIndex: 3,
      images: [
        {
          src: nogalCentella,
          alt: "Registro histórico del nogal tras la centella de diciembre de 1942",
          caption: "La centella de 1942 convirtió al nogal en un símbolo aún más recordado",
          document: {
            number: 3,
            title: "Registro histórico del nogal tras la centella de diciembre de 1942",
            description:
              "La centella de 1942 convirtió al nogal en un símbolo aún más recordado",
          },
        },
        {
          src: nogalCentellaDiario,
          alt: "Recorte periodístico sobre la centella que dañó el nogal histórico",
          caption: "La prensa de época también ayudó a fijar este episodio en la memoria local",
          document: {
            number: 4,
            title: "Recorte periodístico sobre la centella que dañó el nogal histórico",
            description:
              "La prensa de época también ayudó a fijar este episodio en la memoria local",
          },
        },
      ],
    },
    {
      afterSectionIndex: 6,
      images: [
        {
          src: nogalRestoActual,
          alt: "Ubicación actual del tronco del nogal histórico cercado dentro del parque",
          caption: "El tronco cercado sigue marcando el lugar donde la comunidad ubica esta historia",
          document: {
            number: 5,
            title: "Ubicación actual del tronco del nogal histórico cercado dentro del parque",
            description:
              "El tronco cercado sigue marcando el lugar donde la comunidad ubica esta historia",
          },
        },
        {
          src: nogalRestoBiblioteca,
          alt: "Resto preservado del nogal histórico en la biblioteca D. F. Sarmiento de Jesús María",
          caption: "La preservación material del tronco convirtió la tradición en patrimonio visible",
          document: {
            number: 6,
            title:
              "Resto preservado del nogal histórico en la biblioteca D. F. Sarmiento de Jesús María",
            description:
              "La preservación material del tronco convirtió la tradición en patrimonio visible",
          },
        },
      ],
    },
    {
      afterSectionIndex: 8,
      images: [
        {
          src: nogalRestoActualDos,
          alt: "Otra vista actual del lugar donde se conserva el tronco del nogal histórico",
          caption: "Otra vista actual del sitio donde el nogal sigue siendo recordado",
          document: {
            number: 7,
            title: "Otra vista actual del lugar donde se conserva el tronco del nogal histórico",
            description: "Otra vista actual del sitio donde el nogal sigue siendo recordado",
          },
        },
        {
          src: estanciaGaleriaHistorica,
          alt: "Galería histórica de la Estancia Jesuítica con su arquitectura original",
          caption: "La galería histórica completa el paisaje material de esta memoria local",
          document: {
            number: 8,
            title: "Galería histórica de la Estancia Jesuítica con su arquitectura original",
            description:
              "La galería histórica completa el paisaje material de esta memoria local",
          },
        },
      ],
    },
  ],
  referencesTitle: "Referencias y bibliografía",
  references: [
    {
      title: "Museo Jesuítico Nacional de Jesús María",
      subtitle: "El Nogal Histórico de Sarmiento",
      description:
        "Fuente principal de esta entrega. Describe la tradición del nogal histórico, la relación entre Domingo Faustino Sarmiento y Aurelia Vélez Sarsfield en Jesús María, la inscripción de las iniciales D.F.S. según la tradición local y el incendio del árbol por una centella en diciembre de 1942.",
      href: "https://museojesuitico.cultura.gob.ar/noticia/el-nogal-historico-de-sarmiento-1/",
    },
    {
      title: "Estancia de Jesús María – Museo Jesuítico Nacional",
      subtitle: "Archivo de publicaciones históricas",
      description:
        "Repositorio oficial del Museo Jesuítico Nacional donde se encuentra publicada la investigación El Nogal Histórico de Sarmiento y otros trabajos sobre el patrimonio histórico de la Estancia.",
      href: "https://museojesuitico.cultura.gob.ar/ver-noticias/",
    },
    {
      title: "Ministerio de Cultura de la Nación",
      subtitle: "Los museos y sus jardines: Estancia de Jesús María – Museo Jesuítico Nacional",
      description:
        "Describe la evolución histórica del parque, los jardines, el lago artificial, las especies arbóreas y la conservación patrimonial del predio. También menciona el nogal histórico asociado a Domingo Faustino Sarmiento.",
      href: "https://www.cultura.gob.ar/los-museos-y-sus-jardines-hoy-la-estancia-de-jesus-maria-museo-jesuitico-nacional_3943/",
    },
    {
      title: "Museo Jesuítico Nacional de Jesús María",
      subtitle: "La Estancia Jesuítica, Patrimonio de la Humanidad",
      description:
        "Explica la restauración de la Estancia, la creación del Museo Jesuítico Nacional y su incorporación al conjunto declarado Patrimonio Mundial por la UNESCO en el año 2000.",
      href: "https://museojesuitico.cultura.gob.ar/noticia/la-estancia-jesuitica-patrimonio-de-la-humanidad/",
    },
    {
      title: "Ministerio de Cultura de la Nación",
      subtitle: "Estancias Jesuíticas, 20 años como Patrimonio Mundial",
      description:
        "Contextualiza el valor histórico de la Estancia de Jesús María dentro del conjunto de Estancias Jesuíticas de Córdoba y su reconocimiento por la UNESCO.",
      href: "https://www.cultura.gob.ar/20-anos-de-las-estancias-jesuiticas-como-patrimonio-de-la-humanidad-9907/",
    },
  ],
  paragraphs: [
    {
      heading: "Entrega III — El nogal histórico: entre la memoria y los documentos",
      body: [
        "Hay árboles que dan sombra. Otros, además, conservan la memoria de un pueblo.",
        "Desde hace más de un siglo, quienes recorren el parque de la Estancia Jesuítica de Jesús María escuchan una historia que se transmite de generación en generación.",
        "Cuenta la tradición que, durante su permanencia en la villa, Domingo Faustino Sarmiento encontraba un lugar de tranquilidad bajo la sombra de un gran nogal. Allí habría leído, conversado con Aurelia Vélez Sarsfield y encontrado un momento de calma lejos de la intensa vida política que había marcado gran parte de su existencia.",
        "Con el paso de los años, aquel árbol dejó de ser solamente un ejemplar de la naturaleza. Se transformó en uno de los símbolos históricos más queridos de Jesús María.",
        "Pero ¿qué parte de esta historia puede demostrarse? ¿Qué parte pertenece a la memoria colectiva? ¿Y por qué ese nogal continúa siendo recordado hasta nuestros días?",
      ],
    },
    {
      heading: "Cuando la historia y la memoria se encuentran",
      body: [
        "En toda investigación histórica llega un momento en el que los documentos dejan de hablar y comienza la tradición oral.",
        "Lejos de ser un problema, esto forma parte del trabajo del historiador.",
        "Las comunidades conservan recuerdos que muchas veces no quedaron registrados en documentos oficiales. Algunos de esos recuerdos terminan confirmándose años después mediante nuevas evidencias. Otros permanecen como parte del patrimonio cultural sin que sea posible demostrar cada uno de sus detalles.",
        "El caso del nogal de Sarmiento pertenece precisamente a esa categoría.",
        "Hoy no se conoce una carta escrita por Sarmiento donde afirme que pasaba las tardes bajo aquel árbol.",
        "Tampoco existe un diario personal de Aurelia describiendo esos encuentros.",
        "Sin embargo, la memoria local conservó esa historia durante décadas, hasta convertirse en una tradición profundamente arraigada.",
      ],
    },
    {
      heading: "El testimonio del Museo Jesuítico Nacional",
      body: [
        "La principal referencia documental sobre el nogal proviene del Museo Jesuítico Nacional de Jesús María.",
        "En una investigación titulada El Nogal Histórico de Sarmiento, el museo explica que, durante la permanencia de Aurelia Vélez y Domingo Faustino Sarmiento en Jesús María, ambos acostumbraban recorrer el parque de la antigua Estancia.",
        "La publicación recoge la tradición según la cual el antiguo presidente solía detenerse bajo un gran nogal para leer, conversar y descansar.",
        "También menciona un detalle que con el tiempo se volvió parte inseparable de esta historia: la supuesta inscripción de las iniciales D.F.S. sobre el tronco del árbol.",
        "Pero durante muchos años numerosos vecinos aseguraron haberlas visto.",
        "Ese recuerdo fue transmitido de generación en generación hasta incorporarse al patrimonio histórico local.",
      ],
    },
    {
      heading: "Un árbol convertido en símbolo",
      body: [
        "Resulta llamativo pensar que, de todos los edificios, calles y objetos vinculados con aquella época, haya sido precisamente un árbol el que terminó representando la presencia de Sarmiento en Jesús María.",
        "Quizás la respuesta sea sencilla.",
        "Los árboles acompañan silenciosamente el paso del tiempo.",
        "Permanecen cuando cambian las personas, los gobiernos y las ciudades.",
        "Quien visitaba el parque décadas después de la muerte de Sarmiento todavía podía contemplar el mismo nogal.",
        "Era un testigo vivo.",
        "Y esa condición convirtió al árbol en un símbolo mucho más poderoso que cualquier monumento.",
      ],
    },
    {
      heading: "La centella de 1942",
      body: [
        "Durante más de sesenta años el nogal continuó formando parte del paisaje de la Estancia Jesuítica.",
        "Pero el destino quiso escribir un nuevo capítulo.",
        "En diciembre de 1942, una fuerte tormenta descargó una centella sobre el árbol.",
        "El impacto provocó graves daños y terminó destruyendo gran parte del viejo nogal.",
        "Para muchos vecinos fue una verdadera pérdida patrimonial.",
        "No desaparecía solamente un árbol.",
        "Desaparecía uno de los principales símbolos de la memoria histórica de Jesús María.",
        "Sin embargo, la historia no terminó allí.",
      ],
    },
    {
      heading: "El tronco que todavía puede verse",
      body: [
        "Lejos de desechar los restos del nogal, parte de su tronco fue preservada.",
        "Hoy constituye uno de los testimonios materiales más importantes vinculados con esta historia y continúa despertando el interés de quienes visitan el museo y la Estancia Jesuítica.",
        "Su conservación posee un enorme valor simbólico.",
        "Aunque ya no sea posible sentarse bajo su sombra, el tronco recuerda que aquel árbol realmente existió y que ocupó un lugar destacado dentro de la memoria colectiva de la ciudad.",
        "El visitante actual no observa únicamente un fragmento de madera.",
        "Observa un objeto patrimonial cargado de significados.",
      ],
    },
    {
      heading: "¿Qué dicen los historiadores?",
      body: [
        "Las investigaciones modernas coinciden en varios aspectos.",
        "Está ampliamente documentada la relación entre Domingo Faustino Sarmiento y Aurelia Vélez Sarsfield.",
        "También existen fundamentos para afirmar que ambos estuvieron vinculados con Jesús María durante la enfermedad de Rosario Vélez.",
        "Donde aparecen las diferencias es en los detalles cotidianos.",
        "¿Cuántas veces caminaron por el parque?",
        "¿Con qué frecuencia se encontraron?",
        "¿Realmente Sarmiento grabó sus iniciales en el nogal?",
        "Hasta el momento, ninguna fuente primaria permite responder con absoluta certeza esas preguntas.",
        "Y precisamente por eso es importante distinguir entre la documentación y la tradición oral.",
        "Lejos de restarle valor a la historia, esa distinción la fortalece.",
        "Porque demuestra que el patrimonio cultural también está formado por los recuerdos que una comunidad decide conservar.",
      ],
    },
    {
      heading: "Un patrimonio que sigue vivo",
      body: [
        "En el año 2000, la Estancia Jesuítica de Jesús María pasó a integrar el conjunto declarado Patrimonio Mundial por la UNESCO.",
        "La protección internacional alcanzó al edificio histórico, al parque y al conjunto patrimonial que representa siglos de historia cordobesa.",
        "Dentro de ese paisaje, el recuerdo del nogal continúa formando parte del relato que el Museo Jesuítico transmite a quienes visitan el lugar.",
        "El árbol ya no está, solo su tronco que permanece cercado por una reja que identifica su ubicación en el parque de la estancia.",
        "Pero su historia permanece.",
        "Y quizás esa sea la verdadera razón por la que sigue despertando interés más de ciento cuarenta años después de la visita de Sarmiento.",
      ],
    },
    {
      heading: "Más importante que un árbol",
      body: [
        "Esta investigación comenzó intentando responder una pregunta sobre un nogal.",
        "Sin embargo, cuanto más avanzamos, más evidente resulta que el verdadero valor de esta historia no reside únicamente en el árbol.",
        "Lo importante es comprender cómo una comunidad fue construyendo su memoria.",
        "Cómo un hecho íntimo terminó transformándose en patrimonio.",
        "Cómo un espacio cotidiano pasó a convertirse en escenario de una de las tradiciones más queridas de Jesús María.",
        "El nogal ya no ofrece sombra.",
        "Pero continúa ofreciendo algo quizás aún más valioso.",
        "La posibilidad de recordar.",
      ],
    },
    {
      heading: "Hacia la última entrega",
      body: [
        "Después de conocer a los protagonistas, recorrer la Jesús María de 1879 y descubrir la historia del nogal, todavía queda una última etapa.",
        "La investigación concluirá con la mirada sobre Sarmiento y Aurelia.",
        "¿Qué se sabe de aquella historia?",
        "¿Fue solamente una relación de conveniencia política..., hubo una relación que traspasó los limites de una amistad...?",
        "¿Y por qué, casi siglo y medio después, la memoria de Sarmiento y Aurelia continúa viva entre los árboles, los muros y los senderos de Jesús María?",
        "La respuesta llegará en la cuarta y última entrega de esta investigación.",
      ],
    },
  ],
};

export default sarmientoAureliaEntregaTres;
