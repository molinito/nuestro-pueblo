import sarmientoAureliaEntregaUno from "../sarmiento-aurelia/data";
import asientoSobreTejadoDetalle from "./asiento-sobre-tejado-detalle.webp";
import asientoSobreTejado from "./asiento-sobre-tejado.webp";
import estanciaCampana from "./estancia-campana.webp";
import estanciaCampanarioHistorico from "./estancia-campanario-historico.webp";
import estanciaExterior from "./estancia-exterior.webp";
import estanciaMultitudHistorica from "./estancia-multitud-historica.webp";
import estanciaPatioArbol from "./estancia-patio-arbol.webp";
import estanciaPatio from "./estancia-patio.webp";
import parqueHistoricoRelojSol from "./parque-historico-reloj-sol.webp";
import parqueHistorico from "./parque-historico.webp";
import relojSolActual from "./reloj-sol-actual.webp";
import sarmientoRelojSolDetalle from "./sarmiento-reloj-sol-detalle.webp";
import siluetaSobreLaEstanciaHistorica from "./silueta-sobre-la-estancia-historica.webp";
import vistaHistoricaDesdeGaleria from "./vista-historica-desde-galeria.webp";

const sarmientoAureliaEntregaDos = {
  ...sarmientoAureliaEntregaUno,
  id: "sarmiento-aurelia-entrega-2",
  title: "Sarmiento y Aurelia: la villa y la Estancia Jesuítica",
  summary:
    "Entrega II: la villa, la Estancia Jesuítica y los meses que dieron origen a una historia.",
  series: {
    title: "Investigación histórica",
    currentPart: 2,
    totalParts: 3,
    parts: [
      { number: 1, href: "/historia/sarmiento-aurelia" },
      { number: 3, status: "próximamente…" },
    ],
  },
  galleryNote:
    "Galería histórica y actual de la Estancia Jesuítica, su parque, sus patios y distintos registros fotográficos vinculados a la memoria local.",
  gallery: [
    {
      src: estanciaExterior,
      alt: "Vista exterior de la Estancia Jesuítica de Jesús María",
      caption: "Vista exterior de la Estancia Jesuítica de Jesús María",
    },
    {
      src: estanciaPatio,
      alt: "Patio principal y galerías de la Estancia Jesuítica",
      caption: "Patio principal y galerías de la Estancia Jesuítica",
    },
    {
      src: estanciaPatioArbol,
      alt: "Patio interior con gran arbolado en la Estancia Jesuítica",
      caption: "Patio interior con gran arbolado en la Estancia Jesuítica",
    },
    {
      src: parqueHistorico,
      alt: "Vista histórica del parque de la Estancia Jesuítica",
      caption: "Vista histórica del parque de la Estancia Jesuítica",
    },
    {
      src: parqueHistoricoRelojSol,
      alt: "Fotografía histórica del parque con el antiguo pedestal del reloj solar",
      caption: "Fotografía histórica del parque con el antiguo pedestal del reloj solar",
    },
    {
      src: relojSolActual,
      alt: "Detalle actual del reloj solar de la Estancia Jesuítica",
      caption: "Detalle actual del reloj solar de la Estancia Jesuítica",
    },
    {
      src: sarmientoRelojSolDetalle,
      alt: "Detalle del muro del reloj solar sobre la cubierta de la Estancia",
      caption: "Detalle del muro del reloj solar sobre la cubierta de la Estancia",
    },
    {
      src: estanciaCampana,
      alt: "Campana histórica de la Estancia Jesuítica de Jesús María",
      caption: "Campana histórica de la Estancia Jesuítica de Jesús María",
    },
    {
      src: vistaHistoricaDesdeGaleria,
      alt: "Vista histórica desde la galería hacia el patio y el entorno de la Estancia",
      caption: "Asiento de ladrillo sobre la cubierta de la Estancia en una fotografía histórica",
    },
    {
      src: estanciaCampanarioHistorico,
      alt: "Campanario y muro perimetral de la Estancia en una fotografía histórica",
      caption: "Campanario y muro perimetral de la Estancia en una fotografía histórica",
    },
    {
      src: asientoSobreTejado,
      alt: "Asiento de ladrillo sobre la cubierta de la Estancia en una fotografía histórica",
      caption: "Vista histórica desde la galería hacia el patio y el entorno de la Estancia",
    },
    {
      src: asientoSobreTejadoDetalle,
      alt: "Detalle del asiento de ladrillo conservado sobre la cubierta de la Estancia",
      caption: "Detalle del asiento de ladrillo conservado sobre la cubierta de la Estancia",
    },
    {
      src: siluetaSobreLaEstanciaHistorica,
      alt: "Figura humana sobre la cubierta de la Estancia en un registro histórico",
      caption: "Figura humana sobre la cubierta de la Estancia en un registro histórico",
    },
    {
      src: estanciaMultitudHistorica,
      alt: "Concentración histórica frente a la Estancia Jesuítica de Jesús María",
      caption: "Concentración histórica frente a la Estancia Jesuítica de Jesús María",
    },
  ],
  inlineGalleries: [
    {
      afterSectionIndex: 1,
      images: [
        {
          src: estanciaExterior,
          alt: "Vista exterior de la Estancia Jesuítica de Jesús María",
          caption: "La antigua Estancia como centro visual e histórico de la villa",
          document: {
            number: 1,
            title: "Vista exterior de la Estancia Jesuítica de Jesús María",
            description: "La antigua Estancia como centro visual e histórico de la villa",
          },
        },
        {
          src: estanciaPatio,
          alt: "Patio principal y galerías de la Estancia Jesuítica",
          caption: "Patio principal y galerías interiores del conjunto jesuítico",
          document: {
            number: 2,
            title: "Patio principal y galerías de la Estancia Jesuítica",
            description: "Patio principal y galerías interiores del conjunto jesuítico",
          },
        },
      ],
    },
    {
      afterSectionIndex: 2,
      images: [
        {
          src: estanciaPatioArbol,
          alt: "Patio interior con gran arbolado en la Estancia Jesuítica",
          caption: "El arbolado del patio como parte del paisaje histórico de la Estancia",
          document: {
            number: 3,
            title: "Patio interior con gran arbolado en la Estancia Jesuítica",
            description: "El arbolado del patio como parte del paisaje histórico de la Estancia",
          },
        },
        {
          src: parqueHistorico,
          alt: "Vista histórica del parque de la Estancia Jesuítica",
          caption: "Registro histórico de un parque más abierto y rural que el actual",
          document: {
            number: 4,
            title: "Vista histórica del parque de la Estancia Jesuítica",
            description: "Registro histórico de un parque más abierto y rural que el actual",
          },
        },
      ],
    },
    {
      afterSectionIndex: 3,
      images: [
        {
          src: parqueHistoricoRelojSol,
          alt: "Fotografía histórica del parque con el antiguo pedestal del reloj solar",
          caption: "Fotografía histórica del parque y su entorno abierto",
          document: {
            number: 5,
            title: "Fotografía histórica del parque con el antiguo pedestal del reloj solar",
            description: "Fotografía histórica del parque y su entorno abierto",
          },
        },
        {
          src: relojSolActual,
          alt: "Detalle actual del reloj solar de la Estancia Jesuítica",
          caption: "Detalle actual del reloj solar, uno de los signos materiales del lugar",
          document: {
            number: 6,
            title: "Detalle actual del reloj solar de la Estancia Jesuítica",
            description: "Detalle actual del reloj solar, uno de los signos materiales del lugar",
          },
        },
      ],
    },
    {
      afterSectionIndex: 4,
      images: [
        {
          src: sarmientoRelojSolDetalle,
          alt: "Detalle del muro del reloj solar sobre la cubierta de la Estancia",
          caption: "El reloj solar y su soporte edilicio como huellas materiales del conjunto",
          document: {
            number: 7,
            title: "Detalle del muro del reloj solar sobre la cubierta de la Estancia",
            description:
              "El reloj solar y su soporte edilicio como huellas materiales del conjunto",
          },
        },
        {
          src: asientoSobreTejado,
          alt: "Asiento de ladrillo sobre la cubierta de la Estancia en una fotografía histórica",
          caption: "Vista histórica desde la galería, entre patios, muros y horizonte rural",
          document: {
            number: 8,
            title: "Vista histórica desde la galería hacia el patio y el entorno de la Estancia",
            description: "Vista histórica desde la galería, entre patios, muros y horizonte rural",
          },
        },
      ],
    },
    {
      afterSectionIndex: 5,
      images: [
        {
          src: estanciaCampana,
          alt: "Campana histórica de la Estancia Jesuítica de Jesús María",
          caption: "La campana histórica como parte del paisaje sonoro de la Estancia",
          document: {
            number: 9,
            title: "Campana histórica de la Estancia Jesuítica de Jesús María",
            description: "La campana histórica como parte del paisaje sonoro de la Estancia",
          },
        },
        {
          src: vistaHistoricaDesdeGaleria,
          alt: "Vista histórica desde la galería hacia el patio y el entorno de la Estancia",
          caption: "Asiento de ladrillo sobre la cubierta en un registro asociado a la memoria local",
          document: {
            number: 10,
            title: "Asiento de ladrillo sobre la cubierta de la Estancia en una fotografía histórica",
            description:
              "Asiento de ladrillo sobre la cubierta en un registro asociado a la memoria local",
          },
        },
      ],
    },
    {
      afterSectionIndex: 6,
      images: [
        {
          src: estanciaCampanarioHistorico,
          alt: "Campanario y muro perimetral de la Estancia en una fotografía histórica",
          caption: "Campanario y muro perimetral en un registro fotográfico de época",
          document: {
            number: 11,
            title: "Campanario y muro perimetral de la Estancia en una fotografía histórica",
            description: "Campanario y muro perimetral en un registro fotográfico de época",
          },
        },
        {
          src: siluetaSobreLaEstanciaHistorica,
          alt: "Figura humana sobre la cubierta de la Estancia en un registro histórico",
          caption: "Figura humana sobre la cubierta en una imagen asociada a la memoria local",
          document: {
            number: 12,
            title: "Figura humana sobre la cubierta de la Estancia en un registro histórico",
            description: "Figura humana sobre la cubierta en una imagen asociada a la memoria local",
          },
        },
      ],
    },
    {
      afterSectionIndex: 6,
      images: [
        {
          src: asientoSobreTejadoDetalle,
          alt: "Detalle del asiento de ladrillo conservado sobre la cubierta de la Estancia",
          caption: "Detalle actual del asiento de ladrillo todavía visible sobre la cubierta",
          document: {
            number: 13,
            title: "Detalle del asiento de ladrillo conservado sobre la cubierta de la Estancia",
            description:
              "Detalle actual del asiento de ladrillo todavía visible sobre la cubierta",
          },
        },
        {
          src: estanciaMultitudHistorica,
          alt: "Concentración histórica frente a la Estancia Jesuítica de Jesús María",
          caption: "La Estancia como escenario de memoria pública y reunión comunitaria",
          document: {
            number: 14,
            title: "Concentración histórica frente a la Estancia Jesuítica de Jesús María",
            description:
              "La Estancia como escenario de memoria pública y reunión comunitaria",
          },
        },
      ],
    },
  ],
  paragraphs: [
    {
      heading: "Entrega II — La villa, la Estancia Jesuítica y los meses que dieron origen a una historia",
      body: [
        "La historia no ocurre en el vacío. Siempre necesita un lugar. Y en este caso, ese lugar fue Jesús María.",
        "En la primera entrega conocimos a los protagonistas de esta investigación. Supimos quién era Domingo Faustino Sarmiento en los últimos años de su vida, descubrimos la importancia de Aurelia Vélez Sarsfield y comprendimos por qué la enfermedad de Rosario Vélez llevó a la familia a instalarse en Jesús María.",
        "Ahora es momento de cambiar el escenario.",
        "Porque antes de imaginar a Sarmiento caminando por el parque de la Estancia Jesuítica, debemos conocer cómo era aquella pequeña villa cordobesa a fines del siglo XIX.",
        "No era la ciudad que conocemos hoy.",
        "No existían las avenidas actuales, el movimiento comercial ni el crecimiento urbano que transformó la región durante el siglo XX.",
        "Jesús María era entonces una población tranquila, profundamente ligada a la antigua Estancia Jesuítica y al paisaje rural que la rodeaba.",
      ],
    },
    {
      heading: "Una villa nacida alrededor de la Estancia",
      body: [
        "Para 1879, Jesús María conservaba gran parte de la fisonomía heredada de los tiempos coloniales.",
        "La Estancia Jesuítica seguía siendo el edificio más importante del lugar. Sus gruesos muros de piedra, sus galerías, patios internos y la iglesia dominaban el paisaje. Aunque la Compañía de Jesús había sido expulsada de los dominios españoles más de un siglo antes, el conjunto arquitectónico continuaba siendo el corazón histórico de la villa.",
        "Alrededor de la Estancia se distribuían las viviendas, algunos comercios, pequeñas chacras y caminos de tierra que comunicaban el poblado con otras localidades del norte cordobés.",
        "La vida transcurría a un ritmo muy distinto del de Buenos Aires o Córdoba capital. El silencio del campo, el sonido de los carros y las tareas agrícolas formaban parte del paisaje cotidiano.",
      ],
    },
    {
      heading: "El parque que hoy conocemos",
      body: [
        "Quien visite hoy la Estancia Jesuítica encontrará un amplio parque con árboles de gran porte, senderos, espacios verdes y un tajamar que aporta serenidad al conjunto.",
        "Aunque el parque ha cambiado con el paso del tiempo, continúa siendo el mismo espacio histórico donde la tradición local sitúa los paseos de Domingo Faustino Sarmiento junto a Aurelia Vélez Sarsfield.",
        "Ese detalle es importante.",
        "Cuando observamos hoy esos árboles centenarios, no estamos viendo simplemente un parque. Estamos recorriendo un espacio que ya existía cuando Sarmiento llegó a Jesús María.",
        "Muchos de los ejemplares actuales fueron plantados décadas después. Otros ya formaban parte del paisaje hacia fines del siglo XIX. Entre ellos se encontraba un nogal que, con el correr de los años, adquiriría un significado muy especial para la memoria de la ciudad.",
        "Pero todavía no es momento de hablar de él.",
      ],
    },
    {
      heading: "Una villa elegida por su clima",
      body: [
        "En la segunda mitad del siglo XIX, la medicina disponía de muy pocos recursos para enfrentar enfermedades como la tuberculosis.",
        "Era frecuente que los médicos recomendaran abandonar las grandes ciudades y trasladarse hacia lugares donde el aire fuera más seco y saludable.",
        "Jesús María reunía esas condiciones.",
        "Su entorno natural, la tranquilidad del lugar y el clima serrano hacían pensar que podía ofrecer mejores condiciones para la recuperación de quienes padecían enfermedades respiratorias.",
        "Fue precisamente esa recomendación médica la que llevó a Aurelia Vélez y a su familia a instalarse temporalmente en la villa.",
        "La decisión no respondía al turismo ni al descanso. Era una búsqueda de alivio para Rosario Vélez, cuya salud se deterioraba rápidamente.",
      ],
    },
    {
      heading: "El viaje de Sarmiento",
      body: [
        "Cuando Aurelia escribió a Sarmiento para contarle la situación familiar, el antiguo presidente comprendió la gravedad del momento.",
        "No viajó como funcionario del Estado ni encabezando una misión política.",
        "Viajó para acompañar a una familia amiga en circunstancias dolorosas.",
        "No se conservan hasta el momento documentos que permitan reconstruir día por día su itinerario, pero las investigaciones coinciden en que permaneció un tiempo en Córdoba y visitó Jesús María durante ese período.",
        "Esta diferencia resulta fundamental.",
        "Muchas veces las visitas de personajes históricos a una localidad responden a actos oficiales o acontecimientos públicos. En este caso, la presencia de Sarmiento estuvo ligada a un motivo estrictamente personal.",
        "Eso explica por qué existen menos documentos administrativos y más referencias provenientes de cartas, memorias familiares y trabajos historiográficos posteriores.",
      ],
    },
    {
      heading: "La Estancia como lugar de encuentro",
      body: [
        "Es fácil comprender por qué la antigua Estancia Jesuítica terminó ocupando un lugar central en esta historia.",
        "No solo era el edificio más importante de la villa.",
        "También constituía el principal espacio de paseo, reunión y contemplación.",
        "Sus patios ofrecían sombra durante el verano.",
        "El parque invitaba a caminar.",
        "Los árboles proporcionaban un ambiente fresco y silencioso.",
        "El tajamar reflejaba el cielo cordobés mientras el agua acompañaba el ritmo pausado de la vida cotidiana.",
        "Para una familia atravesada por la enfermedad y la preocupación, aquel entorno representaba un lugar de calma.",
        "Y para un hombre como Sarmiento, acostumbrado al bullicio de la política y las ciudades, debió significar un espacio propicio para la lectura, la reflexión y las largas conversaciones.",
      ],
    },
    {
      heading: "La memoria comienza a construirse",
      body: [
        "No todas las historias nacen como hechos históricos.",
        "Algunas comienzan como simples recuerdos.",
        "Una caminata.",
        "Una conversación.",
        "Un árbol bajo cuya sombra alguien se detuvo a leer.",
        "Con el paso de los años, esos recuerdos se transforman en memoria colectiva.",
        "Eso ocurrió en Jesús María.",
        "La presencia de Sarmiento dejó una huella que fue transmitiéndose entre generaciones de vecinos. Con el tiempo, aquella memoria se concentró alrededor de un árbol específico del parque: un viejo nogal cuya historia sobrevivió incluso después de su desaparición.",
        "Pero antes de analizar esa tradición es necesario detenerse y formular una pregunta fundamental.",
        "¿Qué parte de esa historia puede demostrarse mediante documentos y qué parte pertenece a la memoria oral de la comunidad?",
        "Esa será precisamente la tarea de la próxima entrega.",
      ],
    },
  ],
};

export default sarmientoAureliaEntregaDos;
