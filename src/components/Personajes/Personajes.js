import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./Personajes.css";
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

  const toggleItem = (id) => {
    setOpenId((current) => {
      const nextId = current === id ? null : id;
      navigate(nextId ? `/personajes/${nextId}` : "/personajes");
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
          const isSplitGallery = personaje.id === "pio-leon";
          const panelId = `personajes-panel-${personaje.id}`;
          const headerId = `personajes-header-${personaje.id}`;
          const panelClassName = `personajes__panel-inner${
            personaje.type === "gallery" ? " personajes__panel-inner--gallery" : ""
          }${isSplitGallery ? " personajes__panel-inner--split" : ""}`;

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
                                    {personaje.credit.note}
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
                                  {personaje.credit.note}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </>
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
