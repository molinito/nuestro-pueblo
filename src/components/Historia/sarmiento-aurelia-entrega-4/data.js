import sarmientoAureliaEntregaUno from "../sarmiento-aurelia/data";

const entregaCuatroImageContext = require.context("./", false, /\.webp$/);
const entregaCuatroImage = (file) => entregaCuatroImageContext(`./${file}`);

const anaFaustina = entregaCuatroImage("Ana Faustina primera hija con María Jesús del Canto.webp");
const aureliaCuatro = entregaCuatroImage("Aurelia4.webp");
const benitaPastoriza = entregaCuatroImage("Benita Pastoriza segunda mujer de Sarmiento.webp");
const casaSarmiento = entregaCuatroImage("Casa de Sarmiento hoy.webp");
const dalmacioVelez = entregaCuatroImage("Dalmacio Velez Sarsfield padre Aurelia.webp");
const tipografiaSarmiento = entregaCuatroImage("Ejemplo-tipografia-sarmiento.webp");
const paulaAlbarracin = entregaCuatroImage("Paula Albarracín madre y su Hija Bienvenida hermana Sarmiento.webp");
const sarmientoJesusMaria = entregaCuatroImage("Sarmiento-edad-aproximada en jesus maria.webp");

const sarmientoAureliaEntregaCuatro = {
  ...sarmientoAureliaEntregaUno,
  id: "sarmiento-aurelia-entrega-4",
  title: "Sarmiento y Aurelia: ¿el gran amor de Sarmiento?",
  summary:
    "Entrega IV: Aurelia Vélez Sarsfield entre las cartas, la historia y el misterio.",
  series: {
    title: "Investigación histórica",
    currentPart: 4,
    totalParts: 4,
    parts: [
      { number: 1, href: "/historia/sarmiento-aurelia" },
      { number: 2, href: "/historia/sarmiento-aurelia-entrega-2" },
      { number: 3, href: "/historia/sarmiento-aurelia-entrega-3" },
    ],
  },
  galleryNote:
    "Galería histórica sobre Sarmiento, Aurelia Vélez Sarsfield y el paisaje patrimonial donde la memoria local conserva esta relación.",
  gallery: [
    {
      src: aureliaCuatro,
      alt: "Aurelia Vélez Sarsfield",
      caption: "Aurelia Vélez Sarsfield",
    },
    {
      src: sarmientoJesusMaria,
      alt: "Domingo Faustino Sarmiento en edad aproximada a su paso por Jesús María",
      caption: "Domingo Faustino Sarmiento en edad aproximada a su paso por Jesús María",
    },
    {
      src: dalmacioVelez,
      alt: "Dalmacio Vélez Sarsfield, padre de Aurelia",
      caption: "Dalmacio Vélez Sarsfield, padre de Aurelia",
    },
    {
      src: benitaPastoriza,
      alt: "Benita Pastoriza, segunda mujer de Sarmiento",
      caption: "Benita Pastoriza, segunda mujer de Sarmiento",
    },
    {
      src: tipografiaSarmiento,
      alt: "Ejemplo de tipografía y escritura asociada a Sarmiento",
      caption: "Ejemplo de tipografía y escritura asociada a Sarmiento",
    },
    {
      src: casaSarmiento,
      alt: "Casa de Sarmiento en la actualidad",
      caption: "Casa de Sarmiento en la actualidad",
    },
    {
      src: paulaAlbarracin,
      alt: "Paula Albarracín, madre de Sarmiento, junto a Bienvenida, hermana de Sarmiento",
      caption: "Paula Albarracín, madre de Sarmiento, junto a Bienvenida, hermana de Sarmiento",
    },
    {
      src: anaFaustina,
      alt: "Ana Faustina, primera hija de Sarmiento, con María Jesús del Canto",
      caption: "Ana Faustina, primera hija de Sarmiento, con María Jesús del Canto",
    },
  ],
  inlineGalleries: [
    {
      afterSectionIndex: 1,
      images: [
        {
          src: aureliaCuatro,
          alt: "Aurelia Vélez Sarsfield",
          caption: "Aurelia Vélez Sarsfield, una mujer culta y activa en la vida intelectual del siglo XIX",
          document: {
            number: 1,
            title: "Aurelia Vélez Sarsfield",
            description:
              "Aurelia Vélez Sarsfield, una mujer culta y activa en la vida intelectual del siglo XIX",
          },
        },
        {
          src: dalmacioVelez,
          alt: "Dalmacio Vélez Sarsfield, padre de Aurelia",
          caption: "Dalmacio Vélez Sarsfield, padre de Aurelia",
          document: {
            number: 2,
            title: "Dalmacio Vélez Sarsfield",
            description: "Dalmacio Vélez Sarsfield, padre de Aurelia",
          },
        },
      ],
    },
    {
      afterSectionIndex: 2,
      images: [
        {
          src: sarmientoJesusMaria,
          alt: "Domingo Faustino Sarmiento en edad aproximada a su paso por Jesús María",
          caption: "Sarmiento en su madurez, entre la vida pública y los vínculos personales",
          document: {
            number: 3,
            title: "Domingo Faustino Sarmiento",
            description:
              "Sarmiento en su madurez, entre la vida pública y los vínculos personales",
          },
        },
        {
          src: tipografiaSarmiento,
          alt: "Ejemplo de tipografía y escritura asociada a Sarmiento",
          caption: "La correspondencia permite acercarse al tono íntimo de la relación",
          document: {
            number: 4,
            title: "Ejemplo de tipografía y escritura asociada a Sarmiento",
            description: "La correspondencia permite acercarse al tono íntimo de la relación",
          },
        },
      ],
    },
    {
      afterSectionIndex: 5,
      images: [
        {
          src: benitaPastoriza,
          alt: "Benita Pastoriza, segunda mujer de Sarmiento",
          caption: "Benita Pastoriza, una presencia central en los silencios de esta historia",
          document: {
            number: 5,
            title: "Benita Pastoriza",
            description:
              "Benita Pastoriza, una presencia central en los silencios de esta historia",
          },
        },
        {
          src: casaSarmiento,
          alt: "Casa de Sarmiento en la actualidad",
          caption: "La casa de Sarmiento como lugar de memoria del antiguo presidente",
          document: {
            number: 6,
            title: "Casa de Sarmiento en la actualidad",
            description: "La casa de Sarmiento como lugar de memoria del antiguo presidente",
          },
        },
      ],
    },
    {
      afterSectionIndex: 8,
      images: [
        {
          src: paulaAlbarracin,
          alt: "Paula Albarracín, madre de Sarmiento, junto a Bienvenida, hermana de Sarmiento",
          caption: "Paula Albarracín, madre de Sarmiento, junto a Bienvenida, hermana de Sarmiento",
          document: {
            number: 7,
            title: "Paula Albarracín y Bienvenida Sarmiento",
            description:
              "Paula Albarracín, madre de Sarmiento, junto a Bienvenida, hermana de Sarmiento",
          },
        },
        {
          src: anaFaustina,
          alt: "Ana Faustina, primera hija de Sarmiento, con María Jesús del Canto",
          caption: "Ana Faustina, primera hija de Sarmiento, con María Jesús del Canto",
          document: {
            number: 8,
            title: "Ana Faustina y María Jesús del Canto",
            description: "Ana Faustina, primera hija de Sarmiento, con María Jesús del Canto",
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
        "Contiene referencias a la permanencia de Sarmiento en Jesús María, a la correspondencia con Aurelia Vélez y reproduce algunos de los fragmentos más conocidos de las cartas entre ambos.",
      href: "https://museojesuitico.cultura.gob.ar/noticia/el-nogal-historico-de-sarmiento/",
    },
    {
      title: "Ministerio de Cultura de la Nación",
      subtitle: "Aurelia Vélez Sarsfield, la mujer detrás de la candidatura presidencial",
      description:
        "Describe el papel político e intelectual de Aurelia Vélez, su participación en la candidatura presidencial de Sarmiento y recupera su figura más allá de la dimensión sentimental.",
      href: "https://www.cultura.gob.ar/aurelia-velez-sarsfield-la-mujer-detras-de-la-candidatura-presidencial-9109/",
    },
    {
      title: "Museo Histórico Sarmiento",
      subtitle: "Nacimiento de Aurelia Vélez Sarsfield",
      description:
        "Presenta una visión actualizada sobre Aurelia, destacando su rol como colaboradora, escritora e interlocutora de Sarmiento.",
      href: "https://museosarmiento.cultura.gob.ar/noticia/nacimiento-de-aurelia-velez-sarsfield/",
    },
    {
      title: "Casa Natal de Sarmiento",
      subtitle: "De puño y letra de Sarmiento",
      description:
        "Publicación dedicada a la correspondencia personal de Sarmiento, con referencias a cartas dirigidas a Aurelia Vélez Sarsfield.",
      href: "https://casanatalsarmiento.cultura.gob.ar/noticia/de-puno-y-letra-de-sarmiento/",
    },
    {
      title: "Bellotta, Araceli",
      subtitle: "Aurelia Vélez. La amante de Sarmiento.",
      description:
        "Editorial Sudamericana, Buenos Aires. Obra de referencia que analiza la correspondencia entre ambos y sostiene que Aurelia fue el gran amor de la madurez de Sarmiento.",
    },
    {
      title: "García Hamilton, José Ignacio",
      subtitle: "Vida de un ausente. Biografía de Domingo Faustino Sarmiento.",
      description:
        "Editorial Sudamericana. Biografía ampliamente documentada que dedica un capítulo a la relación entre Sarmiento y Aurelia Vélez Sarsfield.",
    },
  ],
  paragraphs: [
    {
      heading: "Entrega IV — ¿El gran amor de Sarmiento?",
      body: [
        { text: "Aurelia Vélez Sarsfield entre las cartas, la historia y el misterio", emphasis: true },
        {
          text:
            "Hay historias que nunca terminan de escribirse. Algunas quedan suspendidas entre las cartas que sobrevivieron, los recuerdos de quienes las vivieron y el silencio del tiempo. La relación entre Domingo Faustino Sarmiento y Aurelia Vélez Sarsfield es una de ellas.",
          quote: true,
          emphasis: true,
        },
        "Al comenzar esta investigación nos propusimos reconstruir el paso de Domingo Faustino Sarmiento por Jesús María.",
        "Conocimos el contexto histórico.",
        "Recorrimos la antigua Estancia Jesuítica.",
        "Descubrimos la historia del nogal que la memoria popular convirtió en símbolo.",
        "Pero todavía quedaba una pregunta pendiente.",
        "Quizás la más difícil de responder.",
        "¿Quién fue realmente Aurelia Vélez Sarsfield en la vida de Domingo Faustino Sarmiento?",
        "¿Fue una colaboradora política?",
        "¿Una amiga excepcional?",
        "¿Una confidente?",
        "¿O el gran amor de los últimos años del hombre que transformó la educación argentina?",
        "La respuesta, como ocurre tantas veces en la historia, no es sencilla.",
      ],
    },
    {
      heading: "Una mujer muy distinta a las demás",
      body: [
        "Para comprender esta historia es necesario dejar de pensar en Aurelia como un personaje secundario.",
        'Durante mucho tiempo, numerosas publicaciones la presentaron únicamente como "la amante de Sarmiento".',
        "Sin embargo, esa definición resulta profundamente injusta.",
        "Aurelia Vélez Sarsfield fue una de las mujeres más cultas de la Argentina del siglo XIX.",
        "Hija del jurista Dalmacio Vélez Sarsfield, recibió una educación extraordinaria para su época. Leía varios idiomas, escribía con notable elegancia y participaba de reuniones donde se discutían cuestiones políticas e intelectuales reservadas casi exclusivamente a los hombres.",
        "Su padre confiaba tanto en ella que colaboró en tareas relacionadas con la redacción del Código Civil.",
        "Mucho antes de que las mujeres pudieran intervenir en la vida pública, Aurelia ya demostraba una capacidad intelectual poco común.",
      ],
    },
    {
      heading: "Cuando dos inteligencias se encontraron",
      body: [
        "Sarmiento encontró en Aurelia algo que pocas personas podían ofrecerle.",
        "No era una simple admiradora.",
        "Era alguien capaz de discutir con él.",
        "De cuestionarlo.",
        "De comprender sus ideas.",
        "Y también de aconsejarlo.",
        "Las cartas conservadas muestran una relación sostenida durante décadas.",
        "En ellas hablan de política, de la situación del país, de proyectos personales, de preocupaciones familiares y también de sentimientos.",
        "Es precisamente ese tono íntimo el que ha dado origen a uno de los mayores debates de la historiografía argentina.",
      ],
    },
    {
      heading: "Las cartas",
      body: [
        "Las cartas constituyen el documento más importante de toda esta historia.",
        "No porque revelen un romance de manera explícita.",
        "Sino porque permiten conocer la profundidad del vínculo que existía entre ambos.",
        "En una de ellas, Aurelia escribió:",
        {
          text:
            "Escríbeme, dime que me amas, que no estás enojado, que no estás enojado con tu amiga que tanto te quiere.",
          quote: true,
          emphasis: true,
        },
        "La frase ha sido reproducida por diversos historiadores y por el Museo Jesuítico Nacional, convirtiéndose en uno de los testimonios más conocidos de la correspondencia entre ambos.",
        "Sarmiento respondió con palabras que también han despertado innumerables interpretaciones:",
        {
          text:
            "Mi vida futura está basada exclusivamente en tu solemne promesa de amarme y pertenecerme.",
          quote: true,
          emphasis: true,
        },
        "En otra carta, escribió:",
        {
          text: "Necesito tus cariños, tus ideas, tus sentimientos blandos para vivir.",
          quote: true,
          emphasis: true,
        },
        "Leídas hoy, estas frases parecen propias de una historia de amor.",
        "Sin embargo, el historiador debe preguntarse algo más.",
        "¿Qué significaban exactamente esas palabras para quienes las escribieron en el siglo XIX?",
        "Responder esa pregunta no resulta sencillo.",
      ],
    },
    {
      heading: "Las cartas: palabras difíciles de reducir a una amistad",
      body: [
        "La correspondencia constituye la evidencia más íntima y reveladora de toda esta historia. No ofrece una crónica completa de la relación ni permite conocer todo lo que ocurrió entre ambos, pero contiene expresiones cuya intensidad resulta difícil de ignorar.",
        "Aurelia no le escribía a Sarmiento como una admiradora distante ni como una simple colaboradora política. En una de las cartas que se le atribuyen expresó:",
        {
          text: "Te amo con toda la timidez de una niña y con toda la pasión de una mujer.",
          quote: true,
          emphasis: true,
        },
        "La frase parece reunir dos sentimientos opuestos: la reserva impuesta por las convenciones de su tiempo y la fuerza de un afecto que ya no podía ocultar. Aurelia continuaba con una declaración todavía más directa:",
        {
          text: "Te amo como no he amado nunca, como no creí que era posible amar.",
          quote: true,
          emphasis: true,
        },
        "No eran palabras ambiguas. Aurelia reconocía la excepcionalidad de aquel sentimiento y, al mismo tiempo, el conflicto que representaba en su vida. En otro pasaje confesaba que había aceptado el amor de Sarmiento porque se consideraba digna de él, pero admitía que aquella relación constituía la única “falta” de su existencia. Después formulaba una pregunta dolorosa: si sería precisamente él quien habría de castigarla por amarlo.",
        "Y concluía con una súplica:",
        {
          text: "Perdóname, encanto mío, no puedo vivir sin tu amor.",
          quote: true,
          emphasis: true,
        },
        "Estas expresiones permiten comprender por qué algunos historiadores rechazan la idea de que solo existiera entre ellos una amistad intelectual. Aurelia no se limitaba a demostrar afecto: hablaba de pasión, de culpa, de entrega y del temor de perderlo.",
        "Las respuestas de Sarmiento no eran menos intensas.",
        "En una carta escrita después de que Aurelia le reprochara un prolongado silencio, el sanjuanino intentó tranquilizarla. Le explicó que la ausencia y la posibilidad del olvido también lo atormentaban. La falta de noticias despertaba en ambos el temor de que la distancia enfriara una relación construida con enormes sacrificios.",
        "Entonces escribió:",
        {
          text: "No te olvidaré porque eres parte de mi existencia.",
          quote: true,
          emphasis: true,
        },
        "No decía solamente que la recordaría. Afirmaba que Aurelia formaba parte de su propia vida y que contaba con ella para el presente y para el futuro. A continuación vinculaba toda su esperanza con la promesa que ella le había hecho de amarlo y pertenecerle, pese a la distancia, a las dificultades y a la oposición que pudiera rodearlos.",
        "Sarmiento también confesó que necesitaba los cariños, las ideas y la sensibilidad de Aurelia para continuar viviendo. La frase resulta especialmente significativa porque reúne las dos dimensiones fundamentales de su relación: el afecto y la admiración intelectual. No buscaba únicamente consuelo sentimental. Necesitaba también su pensamiento, su criterio y esa suavidad que contrastaba con el temperamento combativo del antiguo presidente.",
        "La carta terminaba con una despedida que difícilmente podría considerarse protocolar:",
        {
          text: "Te envío mil besos y te prometo eterna constancia.",
          quote: true,
          emphasis: true,
        },
        "La necesidad de mantener reserva aparece repetidamente en la correspondencia. Las cartas podían convertirse en una prueba comprometedora si caían en manos equivocadas. Sarmiento se preocupaba por la seguridad del envío, por las personas encargadas de transportarlas y por la posibilidad de que fueran descubiertas.",
        "Esa cautela no demuestra por sí sola la existencia de una relación física, pero revela que ambos sabían que el contenido de sus cartas podía provocar consecuencias personales y sociales. Él estaba casado; ella era hija de uno de sus amigos y colaboradores más importantes. En la sociedad argentina del siglo XIX, un vínculo de esa naturaleza estaba rodeado de riesgos.",
        "La distancia intensificaba todavía más sus sentimientos. Los silencios se interpretaban como señales de abandono. Una carta demorada podía provocar reproches, celos y angustia. Escribir era la forma de reemplazar una presencia que casi nunca podían disfrutar libremente.",
        "La correspondencia que sobrevivió deja entrever una relación hecha de pasión y prudencia, promesas y temores, encuentros y largas separaciones. También permite imaginar todo aquello que no llegó hasta nosotros: cartas perdidas, destruidas o deliberadamente ocultadas para proteger la reputación de sus protagonistas.",
        "Un estudio académico publicado por la Biblioteca Virtual Miguel de Cervantes advierte que las cartas íntimas estuvieron sujetas a selección, censura y posibles pérdidas. Incluso señala que, cuando algunos textos fueron publicados a fines del siglo XIX, hubo discusiones sobre su autenticidad y se presentaron reproducciones facsimilares para respaldarlos.",
        "Por eso debemos leerlas con cautela, pero no con indiferencia.",
        "Los documentos conservados quizá no permitan reconstruir cada episodio de la relación. Sin embargo, sus propias palabras muestran que entre Sarmiento y Aurelia existió algo mucho más intenso que una cordial amistad. Ambos se necesitaron, se reclamaron, temieron perderse y se prometieron afecto a pesar de las ausencias y de las dificultades.",
        "La historia no puede determinar con absoluta certeza hasta dónde llegó aquel vínculo. Pero después de leer estas cartas resulta comprensible que Araceli Bellotta, Ignacio García Hamilton y otros autores hayan interpretado la relación como uno de los grandes amores clandestinos de la Argentina del siglo XIX.",
      ],
    },
    {
      heading: "Los historiadores",
      body: [
        "La figura de Aurelia ha sido estudiada por numerosos investigadores.",
        "Entre ellos, Araceli Bellotta e Ignacio García Hamilton sostienen que la relación trascendió ampliamente la amistad y describen a Aurelia como el gran amor de la madurez de Sarmiento.",
        "Sus investigaciones se apoyan en la correspondencia, en testimonios contemporáneos y en la cercanía que ambos mantuvieron durante casi treinta años.",
        "Otros especialistas prefieren ser más cautelosos.",
        "Reconocen la extraordinaria intimidad de las cartas, pero consideran que los documentos conservados no permiten demostrar con absoluta certeza una relación amorosa en el sentido que hoy entendemos.",
        "Lejos de contradecirse, ambas posiciones enriquecen el debate.",
        "Porque muestran que la historia no siempre ofrece respuestas definitivas.",
      ],
    },
    {
      heading: "Benita",
      body: [
        "Toda historia tiene también silencios.",
        "Y uno de ellos lleva el nombre de Benita Martínez Pastoriza, esposa de Sarmiento.",
        "Las relaciones entre ambos atravesaron momentos difíciles.",
        "Diversos autores sostienen que Benita llegó a conocer parte de la correspondencia entre Sarmiento y Aurelia, lo que profundizó el distanciamiento matrimonial.",
        "Sin embargo, la documentación disponible tampoco permite reconstruir completamente aquellos episodios.",
        "Como ocurre con tantos aspectos de la vida privada de las figuras históricas, existen versiones, recuerdos y testimonios, pero no siempre pruebas concluyentes.",
      ],
    },
    {
      heading: "Jesús María",
      body: [
        "¿Por qué esta historia ocupa un lugar tan importante en Jesús María?",
        "Porque aquí los documentos y la memoria vuelven a encontrarse.",
        "Las investigaciones indican que Aurelia permaneció en la villa acompañando a su hermana Rosario durante la enfermedad.",
        "Sarmiento viajó para acompañarla.",
        "Y fue precisamente en ese escenario donde la tradición sitúa los paseos por el parque de la Estancia Jesuítica.",
        "Quizás nunca podamos saber exactamente qué conversaciones mantuvieron.",
        "Tal vez jamás descubramos qué sintieron mientras caminaban bajo aquellos árboles.",
        "Pero sí sabemos que Jesús María quedó para siempre asociada a uno de los episodios más personales de la vida del antiguo presidente.",
      ],
    },
    {
      heading: "Más allá del romance",
      body: [
        "Con frecuencia la curiosidad del público se concentra en una sola pregunta.",
        "¿Fueron amantes?",
        "Quizás esa pregunta nunca encuentre una respuesta definitiva.",
        "Y, en realidad, no es la más importante.",
        "Lo verdaderamente extraordinario es comprobar que una mujer logró ocupar un lugar intelectual, político y afectivo excepcional en la vida de uno de los hombres más influyentes de la historia argentina.",
        "Aurelia no fue solamente una presencia sentimental.",
        "Fue una interlocutora.",
        "Una consejera.",
        "Una colaboradora.",
        "Una mujer cuya inteligencia dejó huella en el propio Sarmiento.",
      ],
    },
    {
      heading: "Un amor que pertenece a la historia",
      body: [
        "Toda investigación histórica tiene un punto en el que los documentos dejan espacio a la interpretación.",
        "Eso ocurre también aquí.",
        "Las cartas permiten afirmar que existió un vínculo profundamente afectuoso.",
        "Los historiadores coinciden en destacar la extraordinaria cercanía entre ambos.",
        "La memoria de Jesús María conserva el recuerdo de aquellos días compartidos en la Estancia Jesuítica.",
        "Lo que ninguna fuente puede hacer es responder definitivamente cómo definían ellos mismos esa relación.",
        "Tal vez esa incertidumbre explique por qué seguimos hablando de ellos más de un siglo después.",
      ],
    },
    {
      heading: "Epílogo",
      body: [
        "La próxima vez que alguien camine por el parque de la Estancia Jesuítica probablemente vea árboles, senderos, jardines y antiguos muros de piedra.",
        "Pero quizá también recuerde que, hace casi ciento cincuenta años, por ese mismo lugar caminaron Domingo Faustino Sarmiento y Aurelia Vélez Sarsfield.",
        "No sabemos si fueron dos amantes.",
        "No sabemos si fueron solamente dos grandes amigos.",
        "Lo que sí sabemos es que compartieron una relación extraordinaria, capaz de sobrevivir al tiempo gracias a las cartas, a la memoria de un pueblo y a las investigaciones que aún hoy continúan intentando comprenderla.",
        "Quizás esa sea la verdadera enseñanza de esta historia.",
        "No todas las preguntas del pasado encuentran una respuesta definitiva.",
        "Pero todas merecen ser investigadas.",
        "Y mientras existan documentos, memoria y personas dispuestas a seguir buscando la verdad, la historia continuará escribiéndose.",
      ],
    },
  ],
};

export default sarmientoAureliaEntregaCuatro;
