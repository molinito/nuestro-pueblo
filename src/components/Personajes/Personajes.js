import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./Personajes.css";
import usePageMeta from "../../hooks/usePageMeta";
import cufre from "./cufre/cufre.webp";
import donaMecha from "./dona-mecha/donaMecha.webp";
import dolivo from "./oscar-dolivo/dolivo.webp";
import dolivo1 from "./oscar-dolivo/dolivo1.webp";
import dolivo2 from "./oscar-dolivo/dolivo2.webp";
import pioLeon01 from "./pio-leon/pio-leon-01.webp";
import pioLeon02 from "./pio-leon/pio-leon-02.webp";
import pioLeon03 from "./pio-leon/pio-leon-03.webp";
import pioLeon04 from "./pio-leon/pio-leon-04.webp";
import pioLeon05 from "./pio-leon/pio-leon-05.webp";
import pioLeon06 from "./pio-leon/pio-leon-06.webp";
import pioLeon07 from "./pio-leon/pio-leon-07.webp";
import pioLeon08 from "./pio-leon/pio-leon-08.webp";
import filomena01 from "./Filomena/filomena-01.webp";
import filomena02 from "./Filomena/filomena-02.webp";
import filomena03 from "./Filomena/filomena-03.webp";
import filomena04 from "./Filomena/filomena-04.webp";
import filomena05 from "./Filomena/filomena-05.webp";
import filomena06 from "./Filomena/filomena-06.webp";
import filomena07 from "./Filomena/filomena-07.webp";
import filomena08 from "./Filomena/filomena-08.webp";
import olga01 from "./olga-prosdocimo/olga-prosdocimo-01.webp";
import olga02 from "./olga-prosdocimo/olga-prosdocimo-02.webp";
import olga03 from "./olga-prosdocimo/olga-prosdocimo-03.webp";
import olga04 from "./olga-prosdocimo/olga-prosdocimo-04.webp";
import canciani01 from "./canciani/canciani-01.webp";
import canciani02 from "./canciani/canciani-02.webp";
import canciani03 from "./canciani/canciani-03.webp";
import canciani04 from "./canciani/canciani-04.webp";
import canciani05 from "./canciani/canciani-05.webp";
import canciani06 from "./canciani/canciani-06.webp";
import canciani07 from "./canciani/canciani-07.webp";
import canciani08 from "./canciani/canciani-08.webp";
import canciani09 from "./canciani/canciani-09.webp";
import canciani10 from "./canciani/canciani-10.webp";
import canciani11 from "./canciani/canciani-comisionado.webp";
import pascottini01 from "./pascotini/pascottini-01.webp";
import pascottini02 from "./pascotini/pascottini-02.webp";
import pascottini03 from "./pascotini/pascottini-03.webp";
import pascottini04 from "./pascotini/pascottini-04.webp";

const personajes = [
    {
      id: "miguel-dominguez",
      title: "Miguel Ángel 'La Papa' Domínguez, el legendario fotógrafo del pueblo",
      summary: "Con mucha emoción y respeto...les presento esta historia...",
      type: "gallery",
      gallery: [
        { src: require("./miguel-dominguez/papa.webp"), alt: "Miguel Ángel Domínguez retrato" },
        { src: require("./miguel-dominguez/papa2.webp"), alt: "Miguel Ángel Domínguez trabajando" },
        { src: require("./miguel-dominguez/papa3.webp"), alt: "Miguel Ángel Domínguez y su poni" }
      ],
      paragraphs: [
        "Agosto 2017",
        "Miguel Ángel Domínguez (75, casado, 2 hijas), conocido como “La Papa”, juega a las cartas con un compañero del geriátrico en el que está –transitoriamente dice- por una fuerte artrosis. Nos habla de su vida como fo­tógrafo; quizá uno de los más representativos de la zona. “No estudié fotografía. Aprendí de la forma más práctica: con al­guien que sabe y te critica. De jovencito trabajaba en Hi­dráulica en Córdoba; era en­cargado del cobro del canon de riego. Yo tenía una maqui-nita, y como Hidráulica inau­guraba obras y no tenían fotó­grafo, empecé a sacar fotos. Y como sufro de claustrofobia y no podía hacer laboratorio (re­velado y copias) llevaba mis ro­llos al estudio de un fotógrafo de Córdoba, Vidal. Mientras me las hacían él analizaba mis fotos y yo aprendía”. Dice que Vidal (cuyo nombre no recuerda) era una autoridad en fotografía y que lo quiso in-corporar a su estudio. “Era un buen trabajo. En esos tiempos te llamaban y no te decían cuántas fotos querían… la gente no se fijaba… Pero a mí me tiraba Jesús María, así que renuncié a Hidráulica, y un 25 de Mayo me puse a sacar fotos en el desfile. Saqué a los aban­derados, al público, a hijos de amigos… Y me compraban. En estos 40 años de profesión solo una persona me devolvió una foto porque no la había pe­dido”, ríe divertido, y agrega que ese fue el puntapié para se­guir con bautismos y casamien­tos, hasta llegar a ser testigo de los acontecimientos más rele­vantes de la zona. “Estuve 22 años en el Festival, desde la primera la fiesta del salame, en la de la vendimia, las comi­das típicas, en Puerto Caroya desde que inauguraron”. Le fue bien desde el vamos: “Podría haber tenido ayudan­tes, pero la gente me decía: si te contrato a vos, vas vos. Me hubiera sido muy fácil; eran tiempos en que se ganaba mu­cha plata… En épocas de Me-nem una foto costaba $ 1,15 y la vendías a $5”.",
        "El poni Una de sus anécdotas –y auda­cias- más divertidas es la del poni que con un amigo (creáse o no) metían adentro de su Fiat 128 para llevarlo a fiestas patro­nales y fotografiar niños con una Polaroid. Cañada de Río Pinto, Tulumba, General Paz… ningún pueblo vecino se privó del poni. ¿Cómo lo subían al 128? “Sacábamos el asiento de atrás y el respaldo. Yo embo­caba al poni de un lado, mi amigo lo llamaba del otro, y se subía. En el baúl llevábamos sombreros, arneses, riendas, comida y un tacho para darle agua… Una vez me pregunta­ron: ¿pero no se orinaba? ¡No, porque le hacíamos hacer pis antes de subir al auto! Y como el poni era más largo que el ancho del auto, le doblábamos la cabeza y el pescuezo que-daba encima del asiento de­lantero”. ¿Nunca los paró la po­licía? “No, pero un día en Tu-lumba oigo que dos tipos dicen: Ché, recién pasaron dos locos con un caballo adentro del auto”, ríe.",
        "Otra anécdota es la del amigo que se casó dos veces. “Tenía un casamiento en la Colonia. Me demoré en salir por espe­rar a un ayudante y para cor­tar camino tomé por el cemen­terio, pero se me reventó la goma delantera y no pude se­guir. Menos mal que unos chi­cos me ayudaron, pero llegué cuando los novios salían de la Iglesia. Así que le pedí al padre Pez que me hiciera el favor de que volvieran a entrar y simu­lara la ceremonia. ¡Saqué to­das las fotos! Y yo le decía al novio: no te separes nunca por­que te hice casar dos veces. ¡Y no se separó!”.",
        "La foto que no fue No sabe cuál de todas las que sacó (6000 rollos de 36 fotos) es “la foto”, pero evoca la que no pudo sacar: “Yo tenía ado­ración por el Papa Juan Pablo II. Cuando vino a Córdoba no conseguí credencial, pero me armé una y me fui. Mientras daba Misa en la Catedral me fui a la policía en el Cabildo, y me quedé viéndolo en el moni­tor. Cuando salió, me digo: ¡ésta es la mía! Me le crucé, pero quedé petrificado. Fue algo que no sentí nunca… ni le-vanté la máquina… Y lo veía como con un haz luminoso; y no era el sol porque lo tenía detrás mío. Saqué una foto re­cién cuando se subió al papa móvil, contra el plexiglás. Un desastre”.",
        "Y hablando de Papas… ¿por qué su apodo? “Me llaman “La Papa”, pero es “El Papa”. Mi abuelo era muy amigo del cura párroco y salían a recorrer ba­res. Cuando la gente los veía solían decir: Ahí viene el cura con el Papa. Así le quedó a mi abuelo, Y lo heredó mi padre y después yo”, remata."
      ],
      credit: {
        name: "Gaston Gomez Fotos antiguas Colonia Caroya y Jesús Maria de Facebook. Créditos fotos: Radio Jesus Maria y FM Comunicar."
      }
    },
    {
      id: "pio-leon",
      title: "Pío León",
      summary: "Fundador de la ciudad de Jesús María (Córdoba, Argentina).",
      type: "gallery",
      gallery: [
        {
          src: pioLeon01,
          alt: "Imagen histórica vinculada a Pío León, 1",
          caption:
            "Foto desde atrás del Museo, de fondo línea blanca con el río y detrás un par de casonas, todo lo que existía entre 1870-1880."
        },
        { src: pioLeon02, alt: "Imagen histórica vinculada a Pío León, 2" },
        { src: pioLeon03, alt: "Imagen histórica vinculada a Pío León, 3" },
        { src: pioLeon04, alt: "Imagen histórica vinculada a Pío León, 4" },
        { src: pioLeon05, alt: "Imagen histórica vinculada a Pío León, 5" },
        { src: pioLeon06, alt: "Imagen histórica vinculada a Pío León, 6" },
        { src: pioLeon07, alt: "Imagen histórica vinculada a Pío León, 7" },
        { src: pioLeon08, alt: "Imagen histórica vinculada a Pío León, 8" }
      ],
      paragraphs: [
        "Fundador de la ciudad de Jesús María (Córdoba, Argentina).",
        "Origen y primeros años.",
        "Pío León nació el 5 de mayo de 1816 en Asunción, Paraguay. Sus padres fueron José Lino de León y Manuela Loisaga. Fue bautizado al día siguiente de su nacimiento en la Catedral de Asunción.",
        "Durante el siglo XIX muchos comerciantes, estancieros y familias se movían por las rutas comerciales del antiguo Camino Real, que conectaba Córdoba con el Alto Perú. En ese contexto, León terminó estableciéndose en la región del norte cordobés.",
        "Llegada a Córdoba y vínculo con la Estancia Jesús María.",
        "Pío León se radicó en la zona de Jesús María y Sinsacate luego de casarse con Saturnina, hija del propietario de la Estancia Jesús María, una de las antiguas estancias jesuíticas del siglo XVII.",
        "La estancia había sido fundada en 1618 por los jesuitas y era un centro agrícola y vitivinícola importante del sistema productivo jesuítico en Córdoba. Tras la expulsión de la orden en el siglo XVIII, las tierras pasaron por distintos propietarios privados, hasta que la familia vinculada a León llegó a poseer parte de ellas.",
        "El origen de la ciudad de Jesús María.",
        "Hacia 1873, decidió lotear parte de los campos cercanos a la estación del ferrocarril. Ese trazado dio origen al pueblo que luego sería la ciudad de Jesús María.",
        "Este hecho fue clave por dos razones: el ferrocarril era el gran motor de crecimiento urbano y, al dividir y vender parcelas para viviendas y comercios, León permitió que se estableciera una comunidad estable alrededor de la estación.",
        "Influencia política y social.",
        "Pío León fue considerado una figura influyente en la región, no solo como propietario rural sino también como impulsor del desarrollo urbano y económico. Su iniciativa permitió que en pocos años el lugar pasara de ser una zona de estancias rurales a convertirse en un centro comercial y de servicios del norte de Córdoba.",
        "Fallecimiento.",
        "Pío León murió el 11 de enero de 1883. Inicialmente fue enterrado en el cementerio de Sinsacate. Décadas después, el 20 de agosto de 1953, sus restos fueron trasladados al cementerio de Jesús María, la ciudad que él mismo había fundado.",
        "Legado en la ciudad.",
        "La importancia de Pío León en la historia local es tan grande que su nombre permanece en múltiples lugares e instituciones. Entre ellos: Plaza Pío León en el centro de la ciudad, premios Pío León que la municipalidad entrega cada año a vecinos destacados, e instituciones educativas como la Asociación Educativa Pío León."
      ],
      credit: {
        name:
          "Créditos fotos: fm-comunicar.com.ar, instagram.com/p/Cxv8XQ3OfEh, diarioeldespertador.com.ar."
      }
    },
    {
      id: "filomena-rossi",
      title: "Filomena Rossi, la primera maestra",
      summary: "La educadora que sembró conocimiento en los inicios de Colonia Caroya.",
      type: "gallery",
      gallery: [
        { src: filomena01, alt: "Imagen historica vinculada a Filomena Rossi, 1" },
        { src: filomena02, alt: "Imagen historica vinculada a Filomena Rossi, 2" },
        { src: filomena03, alt: "Imagen historica vinculada a Filomena Rossi, 3" },
        {
          src: filomena04,
          alt: "Imagen historica vinculada a Filomena Rossi, 4",
          caption: "Imagen ilustrativa de escuelas de principios del siglo XIX en Argentina."
        },
        {
          src: filomena05,
          alt: "Imagen historica vinculada a Filomena Rossi, 5",
          caption: "Imagen ilustrativa de escuelas de principios del siglo XIX en Argentina."
        },
        { src: filomena06, alt: "Imagen historica vinculada a Filomena Rossi, 6" },
        {
          src: filomena07,
          alt: "Imagen historica vinculada a Filomena Rossi, 7",
          caption: "Imagen ilustrativa de escuelas de principios del siglo XIX en Argentina."
        },
        {
          src: filomena08,
          alt: "Imagen historica vinculada a Filomena Rossi, 8",
          caption: "Imagen ilustrativa de escuelas de principios del siglo XIX en Argentina."
        }
      ],
      paragraphs: [
        "A fines del siglo XIX, cuando Colonia Caroya recién comenzaba a nacer entre viñedos, chacras y caminos de tierra, la educación todavía era un sueño lejano para muchos inmigrantes.",
        "Las familias friulanas habían llegado desde Italia buscando una nueva vida en estas tierras de Córdoba. Trabajaban la tierra desde el amanecer hasta la noche. Pero había algo que no querían que sus hijos perdieran: la posibilidad de aprender.",
        "En ese contexto aparece una mujer que marcaría la historia de la colonia. Su nombre era Filomena Rossi.",
        "Había nacido en 1854 en Cividale, en la región italiana de Friuli. Cuando su familia se instaló en la colonia, los vecinos comenzaron a pedirle ayuda para enseñar a sus hijos.",
        "Filomena aceptó. En un galpón de la casa familiar, entre bancos improvisados y cuadernos escasos, comenzaron las primeras clases. Se realizaban en el lote 8-B de Los Chañares.",
        "Allí enseñaba a leer, escribir y hacer cuentas. Los alumnos eran hijos de agricultores, inmigrantes recién llegados que apenas hablaban español.",
        "Comenzó con más de 20 alumnos, pero el número fue creciendo con el aumento de la colonia. La pequeña aula creció rápidamente.",
        "En una comunidad que recién nacía, ella sembró algo tan importante como el trigo o la vid: el conocimiento.",
        "Con el tiempo, el sistema educativo se organizó y aparecieron las primeras escuelas oficiales. Pero en la memoria de Colonia Caroya quedó grabado un nombre.",
        "El de la mujer que enseñó cuando todavía no existían escuelas. Filomena Rossi, la primera maestra de la colonia.",
        "Vida personal.",
        "Su vida tuvo episodios personales importantes: tuvo un hijo de soltera llamado Domingo, que llevó su apellido. Más tarde se casó con Pablo Messi, un inmigrante proveniente de Bérgamo (Italia). Posteriormente vivió en San Miguel de Tucumán, donde tuvo dos hijas: Paulina y Gilda.",
        "Filomena Rossi falleció el 6 de septiembre de 1921 o 1922 (según las fuentes) a los 59 años, tras una grave enfermedad. Sus restos se encuentran en el cementerio de San Miguel de Tucumán.",
        "Hoy su memoria sigue viva: existe la Biblioteca Maestra Filomena Rossi creada en 1978 en su homenaje, y una calle de Colonia Caroya (calle 33) lleva su nombre.",
        "Las escuelas crecieron, las generaciones pasaron, pero el recuerdo permanece. Porque toda historia tiene un comienzo… y en Colonia Caroya ese comienzo lleva un nombre: Filomena Rossi."
      ],
      credit: {
        name: "Fotos, fuentes: FMComunicar, Facebook, Diario El Despertador.",
        note: "Relato editado por Marcelo Saravia."
      }
    },
    {
      id: "olga-prosdocimo",
      title:
        "Olga Prosdócimo: La maestra que enseñó con el corazón y quedó para siempre en el alma de un pueblo",
      summary: "La educadora que transformó la escuela en una casa de comunidad.",
      type: "gallery",
      gallery: [
        { src: olga01, alt: "Imagen histórica vinculada a Olga Prosdócimo, 1" },
        { src: olga02, alt: "Imagen histórica vinculada a Olga Prosdócimo, 2" },
        { src: olga03, alt: "Imagen histórica vinculada a Olga Prosdócimo, 3" },
        { src: olga04, alt: "Imagen histórica vinculada a Olga Prosdócimo, 4" }
      ],
      paragraphs: [
        "Hay personas que pasan por la vida… y hay otras que se quedan para siempre.",
        "No en los libros. No en los archivos. Sino en algo mucho más profundo: en la memoria viva de un pueblo.",
        "Así fue Olga Prosdócimo.",
        "🌿 Una vocación que nació en la infancia.",
        "En el corazón rural de Colonia Caroya, en Tronco Pozo, creció una niña que no necesitaba pizarrón ni aula para saber cuál sería su destino. Jugaba a ser maestra. Sus alumnos eran ladrillos, sus clases eran imaginarias, pero su vocación… absolutamente real.",
        "Desde muy pequeña, Olga ya había entendido algo que muchos descubren tarde: enseñar no es un trabajo… es una forma de amar.",
        "🎓 El regreso de quien eligió volver.",
        "En tiempos donde no era común que una joven del interior viajara a estudiar, Olga lo hizo. Se fue a Córdoba con un sueño claro. Y volvió con algo aún más importante: una misión.",
        "Podría haberse quedado en la ciudad. Podría haber elegido otro camino. Pero eligió volver. Volver a su gente. A su tierra. A sus raíces. Porque sabía que ahí… era donde más la necesitaban.",
        "🏫 La escuela, su segundo hogar.",
        "La Escuela General San Martín no fue solo su lugar de trabajo. Fue su mundo. Fue el espacio donde dejó su huella más profunda: como docente, como vicedirectora, como directora… pero sobre todo, como persona.",
        "Porque Olga no enseñaba solamente contenidos. Enseñaba valores. Enseñaba respeto. Enseñaba humanidad.",
        "Y lo hacía de una manera que quienes pasaron por sus aulas nunca olvidaron: “Si quieren llegar a los chicos… háganlo con amor. Sin amor, no se llega.” Y ella enseñaba… con amor. Siempre.",
        "❤️ Mucho más que una maestra.",
        "Pero reducir a Olga Prosdócimo a su rol docente sería quedarse corto. Muy corto.",
        "Porque Olga fue también: catequista, solidaria, caritativa, comprometida con su comunidad y con cada persona. Era de esas personas que no preguntan “por qué” ni “para qué”. Simplemente… ayudan. De las que están. Siempre.",
        "🤝 La mujer que todos recuerdan.",
        "Quienes la conocieron no hablan solo de una docente. Hablan de una presencia. De una mirada cálida. De una palabra justa. De una mano tendida.",
        "Fue guía para muchos. Apoyo para otros. Y ejemplo… para todos. Porque Olga tenía algo que no se enseña en ningún instituto: tenía alma.",
        "🕊️ Una vida que dejó huella.",
        "Su partida llegó demasiado temprano. Pero hay vidas que, aunque breves, dejan marcas eternas. Y la de Olga fue una de ellas.",
        "Hoy, su nombre vive en una calle de Colonia Caroya. La calle 46, que pasa justamente frente a la escuela que fue su casa.",
        "Pero ese no es el verdadero homenaje. El verdadero homenaje está en otro lado.",
        "🌟 El legado invisible.",
        "Está en cada alumno que aprendió a ser mejor persona. En cada colega que encontró en ella una guía. En cada gesto solidario que inspiró.",
        "Está en cada recuerdo. En cada historia contada. En cada emoción que todavía hoy… aparece al nombrarla.",
        "Porque Olga Prosdócimo no fue solo una maestra. Fue de esas personas que transforman lugares. Que dejan huellas invisibles. Que construyen comunidad.",
        "💫 Un nombre que el pueblo no olvida.",
        "Hoy, Colonia Caroya la recuerda. La nombra. La siente. La extraña.",
        "Porque hay personas que no se van nunca del todo. Se quedan en las aulas. En las calles. En la memoria. En el corazón.",
        "Y Olga… se quedó en todos.",
        "🕯️ Cierre.",
        "Hay vidas que se miden en años. Y hay otras… que se miden en amor. La de Olga Prosdócimo, sin dudas, pertenece a las segundas."
      ]
    },
    {
      id: "canciani",
      title: "Leonardo Canciani: un nombre que quedó en las calles… y en la memoria",
      summary: "Raíces friulanas, memoria familiar y vida institucional.",
      type: "gallery",
      gallery: [
        {
          src: canciani01,
          alt: "Esquina Colon y Crdoba Jesus Maria Tito Peiretti y Elsa Silva1933 -1",
          caption:
            "Esquina Colon y Crdoba Jesus Maria Tito Peiretti y Elsa Silva1933 -1"
        },
        {
          src: canciani02,
          alt: "Jaime Ros-plaza Pio Leon",
          caption: "Jaime Ros-plaza Pio Leon"
        },
        {
          src: canciani03,
          alt: "LUNA DE MIEL DE JUAN ARTICO Y MAGDALENA CANCIANI",
          caption: "LUNA DE MIEL DE JUAN ARTICO Y MAGDALENA CANCIANI"
        },
        {
          src: canciani04,
          alt:
            "Leonardo Canciani con su familia, una de ellas Margarita, mi bisabuela",
          caption:
            "Leonardo Canciani con su familia, una de ellas Margarita, mi bisabuela"
        },
        {
          src: canciani05,
          alt: "Margarita Magdalena Artico mi abuela",
          caption: "Margarita Magdalena Artico mi abuela"
        },
        {
          src: canciani06,
          alt:
            "Mi madre Elsa y su hermana Nelly - calle Cordoba Jesus maria - Año 1934 - 35",
          caption:
            "Mi madre Elsa y su hermana Nelly - calle Cordoba Jesus maria - Año 1934 - 35"
        },
        {
          src: canciani07,
          alt: "casamiento Juan Artico . Oliva Canciani",
          caption: "casamiento Juan Artico . Oliva Canciani"
        },
        {
          src: canciani08,
          alt: "leonardo canciani- 1920-1925",
          caption: "leonardo canciani- 1920-1925"
        },
        { src: canciani09, alt: "manuscrito", caption: "manuscrito" },
        {
          src: canciani10,
          alt: "posta-sinsacate 1942",
          caption: "posta-sinsacate 1942"
        },
        {
          src: canciani11,
          alt: "Leonardo Canciani, comisionado",
          caption: "Leonardo Canciani, comisionado"
        }
      ],
      paragraphs: [
        "En los años en que Colonia Caroya comenzaba a organizarse como comunidad, cuando todavía se estaban definiendo sus instituciones, sus normas y su identidad, aparecen figuras que no buscaban protagonismo…",
        "pero que fueron fundamentales.",
        "Leonardo Canciani fue una de ellas.",
        "Según la memoria familiar y la confirmación municipal reciente, Leonardo Canciani ejerció funciones de gobierno en los comienzos políticos de la colonia. En ese tiempo no existía la figura de “intendente”, sino la de “Comisionado”, en una época donde el municipio era más esfuerzo que estructura, más compromiso que cargo.",
        "No era el tiempo de la política como la conocemos hoy.",
        "Era el tiempo de hacer pueblo.",
        "🧬 Raíces friulanas y destino argentino",
        "Como tantos otros nombres de la región,",
        "Canciani remite directamente al norte de Italia, al Friuli.",
        "Su historia se entrelaza con otra familia profundamente ligada a la identidad caroyense: los Artico.",
        "Desde Gemona del Friuli, en 1878, llegó Girolamo Artico, parte de esa corriente inmigratoria que daría origen a la colonia.",
        "Años más tarde, su hijo Juan Artico, ya en suelo argentino, no solo continuaría ese legado…",
        "sino que lo ampliaría.",
        "En una esquina emblemática de Jesús María, donde se cruzan Colón y Córdoba, funcionaba Casa Artico.",
        "No era solo un comercio.",
        "Era un lugar donde el tiempo se detenía en una imagen.",
        "Juan Artico, bisabuelo del testimonio que hoy revive esta historia, tenía allí un estudio fotográfico.",
        "Gracias a eso —sin saberlo— dejó un legado invaluable:",
        "la posibilidad de ver el pasado.",
        "En esas fotografías, probablemente, también haya quedado registrada la familia Canciani.",
        "💍 El cruce de dos historias",
        "La historia da un giro íntimo y profundo:",
        "Juan Artico, tras enviudar de María Scopegna, se casó en segundas nupcias con Margarita Canciani, hija de Leonardo Canciani.",
        "Así, dos linajes se unieron:",
        "El de los inmigrantes que llegaron con sueños desde Europa",
        "Y el de quienes ayudaron a organizar la vida institucional del nuevo pueblo",
        "🕰️ La memoria viva",
        "El testimonio que hoy llega tiene un valor inmenso:",
        "“Tuve la suerte de conocer a mis bisabuelos Juan y Margarita…” nos cuenta Angel Ros",
        "No es un dato menor.",
        "Es la prueba de que esta historia no está perdida.",
        "🏙️ Una calle, un nombre… y todo lo que no se ve",
        "Hoy, en Colonia Caroya, una calle lleva el nombre de Leonardo Canciani.",
        "Muchos pasan por allí sin saber quién fue.",
        "Sin saber que ese nombre representa:",
        "Una familia",
        "Una historia de inmigración",
        "Una etapa de construcción institucional",
        "Y un legado que aún respira en descendientes y fotografías."
      ],
      galleryNote:
        "El texto descriptivo ha sido ensamblado con información que me suministró el colaborador Angel Ros, tataranieto de Leonardo Canciani, quien aportó no solo los datos históricos sino también las fotos. Las imágenes fueron restauradas y colorizadas por mí con la autorización de Angel Ros."
    },
    {
      id: "pascottini",
      title: "La familia Pascottini",
      summary: "Una semilla inmigrante que creció con el pueblo.",
      type: "gallery",
      gallery: [
        {
          src: pascottini01,
          alt: "Bisabuelos Antonia Ravazollo y Bernardo Pascottini",
          caption: "Bisabuelos Antonia Ravazollo y Bernardo Pascottini"
        },
        {
          src: pascottini02,
          alt: "Matrimonio Ana Pascotini - Enrique Visitin",
          caption: "Matrimonio Ana Pascotini - Enrique Visitin"
        },
        {
          src: pascottini03,
          alt:
            "Nona Ofelia \"Chichina\" Pascottini, bisnieta de Francisco Pascottini y Luisa Cragnolini (llegados a Caroya en 1879)",
          caption:
            "Nona Ofelia \"Chichina\" Pascottini quien bisnieta de Francisco Pascottini y Luisa Cragnolini inmigrantes llegados a Caroya en 1879"
        },
        {
          src: pascottini04,
          alt: "Santiago Pascottini, abuelo de Chichina",
          caption: "Santiago Pascottini abuelo de Chichina"
        }
      ],
      paragraphs: [
        "La Historia de la familia Pascottini en Colonia Caroya se inicia junto con el despertar del Pueblo.",
        "El 4 de diciembre de 1879 arriban a Caroya y luego de una gran travesía Francisco Pascottini y Luisa Cragnolini, nacidos en Gemona del Friuli en 1843 (Francesco) y en 1849 (Luigia).",
        "Los registros nos dicen que se casan e inmediatamente parten hacia América.",
        "Ya en Colonia Caroya tienen a su primogénito Santiago Pascottini y dos mujeres más (Ana y María), aunque en el censo de 1895 figuran dos varones que morirían al poco tiempo de nacer y una hija que murió a los pocos meses.",
        "En 1897 el Estado, como a tantos otros colonos, le asigna a Francisco su lote y el título de propiedad (lote 45 B). Allí seguramente se dedicó a la agricultura hasta que muere en 1916, y Luisa lo sobrevive hasta 1940, año en que muere.",
        "Su hijo Santiago se casa en segundas nupcias en 1907 con Nazarena Sbardelatti (italiana) y, a los pocos años, con la mayoría de sus hijos ya nacidos (entre ellos mi bisabuelo Bernardo Pascottini, nacido en 1914) emigran hacia Córdoba capital.",
        "En 1937 Bernardo Pascottini se casa con Antonia Ravazollo, quien también era hija de un inmigrante agricultor de la zona de Trento llegado antes de la primera guerra.",
        "En 1941 nace su segunda hija Ofelia \"Chichina\" Pascottini, quien aún vive, y es así que llegamos hasta el día de hoy.",
        "Esto es un pequeño aporte que irá creciendo como una semilla... la misma semilla que sembró Francisco y Luisa y que hoy fructifica en un centenar de descendientes que nos sentimos orgullosos de poder contar esta historia.",
        "En la foto podemos ver a Santiago, su hijo Bernardo y a su esposa Antonia y a la hija de ellos, Chichina.",
        "No tenemos fotos de Francisco y de Luisa: quizás este compartir traiga novedades y enriquezca esta búsqueda."
      ],
      galleryNote:
        "Créditos: Texto descriptivo e imágenes Sr. Diego Castro de Facebook",
      galleryNoteSecondary: "Fotos restauradas y colorizadas por M. Saravia"
    },
  {
    id: "cufre",
    title: "Escenario Martín Fierro",
    summary: "Un recuerdo icónico con la platea colmada y maestros de ceremonia.",
    type: "single",
    image: cufre,
    alt: "Escenario Martín Fierro con maestros de ceremonia AISA-CUFRE",
    caption:
      "EL ESCENARIO MARTÍN FIERRO Y LOS MAESTROS DE CEREMONIA AISA-CUFRE (2 GRANDES) Y UNA PLATEA COLMADA... AÑOS 70 APROX.",
    credit: {
      name: "Jose Luis Diaz",
    },
  },
  {
    id: "dona-mecha",
    title: "Doña Mecha y el monumento a la madre",
    summary:
      "Una escena entrañable sobre la avenida Juan B. Justo en los años 60.",
    type: "single",
    image: donaMecha,
    alt: "Doña Mecha con sus hijos y un amigo junto al monumento a la madre",
    caption:
      "Monumento a la madre sobre la avenida Juan B. Justo del año 65 (en la foto está doña Mecha con sus 2 hijos y un amigo de ellos).",
    note:
      "Nota personal: ¡Cómo olvidar a doña Mecha! La llamábamos del alambrado, todos los recreos en frente de la escuela Ortiz de Ocampo, los que íbamos a la mañana o Laprida los de la tarde. Ella venía con la cajita con caramelos, tutucas, gallinitas, hasta sanguchitos de mortadela... Hice toda la primaria en el Ortiz de Ocampo, nunca supe el nombre de doña Mecha.",
    credit: {
      name: "Damian Javier Llames (Facebook)",
    },
  },
  {
    id: "oscar-dolivo",
    title:
      "El cordobés Oscar D’Olivo cumple 105 años y aconseja una clave: “Vivir sin rencores”.",
    summary:
      "Un siglo de vida y lucidez en la memoria viva de Jesús María.",
    type: "gallery",
    gallery: [
      { src: dolivo, alt: "Oscar D’Olivo en Jesús María" },
      { src: dolivo1, alt: "Retrato de Oscar D’Olivo" },
      { src: dolivo2, alt: "Oscar D’Olivo en la Plaza Nicolás Avellaneda" },
    ],
    paragraphs: [
      "Florentino Oscar D’Olivo cumple este domingo 105 años. Nació el 18 de enero de 1921 y es el onceavo de 14 hermanos: eran ocho mujeres y seis varones.",
      "Todavía recuerda cuando iba a la escuela sobre el lomo de un caballo, cuando las calles de su querida Colonia Caroya eran todas de tierra.",
      "Sentado en uno de los bancos de la Plaza Nicolás Avellaneda, ubicada frente a la casa donde vive desde hace 75 años, don Oscar saca a relucir su memoria privilegiada y esa lucidez que todos admiran.",
      "Es un personaje de su ciudad. Pero no sólo por su edad.",
      "Qué preguntarle a un hombre que ya ha dado todas las respuestas posibles, a lo largo de 105 años. “Un siglo y pico”, como le gusta decir, orgulloso de esa longevidad que lo convirtió en una celebridad local.",
    ],
    credit: {
      name: "Diario La Voz del Interior",
      link: "https://www.lavoz.com.ar/ciudadanos/el-cordobes-oscar-dolivo-cumple-105-anos-y-aconseja-una-clave-vivir-sin-rencores/",
      linkLabel: "lavoz.com.ar",
      note:
        "Aclaración: Solo se expone un fragmento de la historia de este personaje; para leerla completa, dirigirse al link mencionado, que pertenece al diario La Voz.",
    },
  },
];

const hasPersonajeId = (id) => personajes.some((personaje) => personaje.id === id);

const Personajes = () => {
  const { personajeId } = useParams();
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const activePersonaje = personajeId ? personajes.find((p) => p.id === personajeId) : null;
  usePageMeta({
    title: activePersonaje
      ? `${activePersonaje.title} | Personajes`
      : "Memorias de nuestra gente | Personajes | Nuestro Pueblo",
    description: activePersonaje
      ? activePersonaje.summary
      : "Relatos y personajes de Jesus Maria y Colonia Caroya: postales de quienes dejaron huella.",
    path: activePersonaje ? `/personajes/${activePersonaje.id}` : "/personajes",
    image: activePersonaje
      ? activePersonaje.type === "single"
        ? activePersonaje.image
        : activePersonaje.gallery?.[0]?.src
      : undefined,
    imageAlt: activePersonaje ? activePersonaje.title : "Personajes de la zona"
  });

  const scrollToPersonaje = (id, behavior = "auto") => {
    const header = document.getElementById(`personajes-header-${id}`);
    if (!header) return;
    header.scrollIntoView({ block: "start", behavior });
    window.scrollBy(0, -90);
  };

  const toggleItem = (id) => {
    setOpenId((current) => {
      const nextId = current === id ? null : id;
      navigate(nextId ? `/personajes/${nextId}` : "/personajes");
      if (nextId) window.setTimeout(() => scrollToPersonaje(nextId, "smooth"), 60);
      return nextId;
    });
  };

  const openImage = (src, alt, caption = "") => setLightbox({ src, alt, caption });
  const closeImage = () => setLightbox(null);
  const handleToggleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(id);
    }
  };
  const handleImageKeyDown = (event, src, alt, caption = "") => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImage(src, alt, caption);
    }
  };

  useEffect(() => {
    if (!personajeId) return;
    if (hasPersonajeId(personajeId)) return;
    navigate("/personajes", { replace: true });
  }, [personajeId, navigate]);

  useLayoutEffect(() => {
    if (!personajeId) return;
    if (!hasPersonajeId(personajeId)) return;
    setOpenId(personajeId);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => scrollToPersonaje(personajeId, "auto"))
    );
  }, [personajeId]);

  return (
    <main className="personajes">
      <header className="personajes__hero">
        <p className="personajes__eyebrow">Personajes de la zona</p>
        <h1 className="personajes__title">Memorias de nuestra gente...!!</h1>
        <p className="personajes__subtitle">
          Postales que celebran a quienes dejaron huella en la identidad
          cultural de nuestra tierra.
        </p>
      </header>

      <section className="personajes__accordion">
        {personajes.map((personaje) => {
          const isOpen = openId === personaje.id;
          const isSplitGallery = [
            "pio-leon",
            "filomena-rossi",
            "olga-prosdocimo",
            "canciani",
            "pascottini"
          ].includes(personaje.id);
          const panelId = `personajes-panel-${personaje.id}`;
          const headerId = `personajes-header-${personaje.id}`;
          const panelClassName = `personajes__panel-inner${
            personaje.type === "gallery" ? " personajes__panel-inner--gallery" : ""
          }${personaje.type === "text" ? " personajes__panel-inner--text" : ""}${
            isSplitGallery ? " personajes__panel-inner--split" : ""
          }`;

          return (
            <article
              key={personaje.id}
              className={`personajes__item${isOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="personajes__toggle"
                onClick={() => toggleItem(personaje.id)}
                onKeyDown={(event) => handleToggleKeyDown(event, personaje.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                id={headerId}
              >
                <span className="personajes__toggle-title">{personaje.title}</span>
                <span className="personajes__toggle-summary">{personaje.summary}</span>
                {!isOpen && (
                  <span className="personajes__toggle-secondary">Abrir +</span>
                )}
              </button>

              <div
                className="personajes__panel"
                id={panelId}
                role="region"
                aria-labelledby={headerId}
              >
                <div className={panelClassName}>
                  {personaje.type === "gallery" ? (
                    <>
                      {isSplitGallery ? (
                        <>
                          <div className="personajes__content personajes__content--gallery">
                            {personaje.paragraphs.map((paragraph, index) => (
                              <p key={`${personaje.id}-p-${index}`} className="personajes__text">
                                {paragraph}
                              </p>
                            ))}
                            {personaje.credit && (
                              <div className="personajes__credit">
                                <span className="personajes__credit-label">Créditos</span>
                                <p className="personajes__credit-name">
                                  {personaje.credit.name}
                                </p>
                                {personaje.credit.link && (
                                  <a
                                    className="personajes__credit-link"
                                    href={personaje.credit.link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {personaje.credit.linkLabel}
                                  </a>
                                )}
                                {personaje.credit.note && (
                                  <p className="personajes__credit-note">
                                    <strong>{personaje.credit.note}</strong>
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="personajes__gallery-column">
                            <div className="personajes__gallery personajes__gallery--split">
                              {personaje.gallery.map((foto, index) => (
                                <div
                                  key={foto.src}
                                  className={`personajes__gallery-item${
                                    index === 0 ? " is-feature" : ""
                                  }`}
                                  role="button"
                                  tabIndex={0}
                                  onClick={() =>
                                    openImage(foto.src, foto.alt, foto.caption)
                                  }
                                  onKeyDown={(event) =>
                                    handleImageKeyDown(event, foto.src, foto.alt, foto.caption)
                                  }
                                  aria-label={`Agrandar imagen: ${foto.alt}`}
                                >
                                  <img src={foto.src} alt={foto.alt} />
                                  <div className="personajes__overlay">
                                    Haz click para agrandar
                                  </div>
                                </div>
                              ))}
                            </div>
                            {(personaje.galleryNote ||
                              personaje.galleryNoteSecondary) && (
                              <div className="personajes__gallery-notes">
                                {personaje.galleryNote && (
                                  <p className="personajes__gallery-note">
                                    <strong>{personaje.galleryNote}</strong>
                                  </p>
                                )}
                                {personaje.galleryNoteSecondary && (
                                  <p className="personajes__gallery-note">
                                    <strong>{personaje.galleryNoteSecondary}</strong>
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="personajes__content personajes__content--gallery">
                          <div className="personajes__gallery personajes__gallery--float">
                            {personaje.gallery.map((foto, index) => (
                              <div
                                key={foto.src}
                                className={`personajes__gallery-item${
                                  index === 0 ? " is-feature" : ""
                                }`}
                                role="button"
                                tabIndex={0}
                                onClick={() =>
                                  openImage(foto.src, foto.alt, foto.caption)
                                }
                                onKeyDown={(event) =>
                                  handleImageKeyDown(event, foto.src, foto.alt, foto.caption)
                                }
                                aria-label={`Agrandar imagen: ${foto.alt}`}
                              >
                                <img src={foto.src} alt={foto.alt} />
                                <div className="personajes__overlay">
                                  Haz click para agrandar
                                </div>
                              </div>
                            ))}
                          </div>
                          {personaje.paragraphs.map((paragraph, index) => (
                            <p key={`${personaje.id}-p-${index}`} className="personajes__text">
                              {paragraph}
                            </p>
                          ))}
                          {personaje.credit && (
                            <div className="personajes__credit">
                              <span className="personajes__credit-label">Créditos</span>
                              <p className="personajes__credit-name">{personaje.credit.name}</p>
                              {personaje.credit.link && (
                                <a
                                  className="personajes__credit-link"
                                  href={personaje.credit.link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {personaje.credit.linkLabel}
                                </a>
                              )}
                              {personaje.credit.note && (
                                <p className="personajes__credit-note">
                                  <strong>{personaje.credit.note}</strong>
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : personaje.type === "text" ? (
                    <div className="personajes__content">
                      {personaje.paragraphs.map((paragraph, index) => (
                        <p key={`${personaje.id}-p-${index}`} className="personajes__text">
                          {paragraph}
                        </p>
                      ))}
                      {personaje.credit && (
                        <div className="personajes__credit">
                          <span className="personajes__credit-label">Créditos</span>
                          <p className="personajes__credit-name">{personaje.credit.name}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <div
                        className="personajes__media"
                        role="button"
                        tabIndex={0}
                        onClick={() => openImage(personaje.image, personaje.alt)}
                        onKeyDown={(event) =>
                          handleImageKeyDown(event, personaje.image, personaje.alt)
                        }
                        aria-label={`Agrandar imagen: ${personaje.alt}`}
                      >
                        <img src={personaje.image} alt={personaje.alt} />
                        <div className="personajes__overlay">Haz click para agrandar</div>
                      </div>
                      <div className="personajes__content">
                        <p className="personajes__caption">{personaje.caption}</p>
                        {personaje.note && (
                          <p className="personajes__note">{personaje.note}</p>
                        )}
                        {personaje.credit && (
                          <div className="personajes__credit">
                            <span className="personajes__credit-label">Créditos</span>
                            <p className="personajes__credit-name">{personaje.credit.name}</p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                  {isOpen && (
                    <div className="personajes__panel-actions">
                      <button
                        type="button"
                        className="personajes__panel-toggle"
                        onClick={() => toggleItem(personaje.id)}
                      >
                        Cerrar —
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <NavLink className="button personajes__back" to="/">
        Volver al Inicio
      </NavLink>

      {lightbox && (
        <div className="personajes__lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <div className="personajes__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            {lightbox.caption && (
              <p className="personajes__lightbox-caption">{lightbox.caption}</p>
            )}
            <button type="button" className="personajes__lightbox-hint" onClick={closeImage}>
              Click para achicar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Personajes;
