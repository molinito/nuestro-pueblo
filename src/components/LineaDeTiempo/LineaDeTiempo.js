import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import usePageMeta from "../../hooks/usePageMeta";
import "./LineaDeTiempoEscolar.css";
import sinsacateImg from "../Lugares/sinsacate/sinsacate-01.webp";
import museoImg from "../Historia/museo-jesuitico/museo.webp";
import independenciaImg from "../Historia/san-martin/san-martin-01.webp";
import inmigracionImg from "../../img/colonia.webp";
import trenImg from "../Lugares/estacion-tren/estacion-tren-01.webp";
import festivalImg from "../Historia/festival-jesus-maria/festival-antes.webp";

const timelineItems = [
  {
    id: "camino-real",
    emoji: "🛤️",
    period: "Siglos XVIII y XIX",
    title: "Camino Real y postas",
    place: "Sinsacate, Jesús María y Caroya",
    image: sinsacateImg,
    imageAlt: "Posta de Sinsacate",
    badge: "Explorador del Camino Real",
    summary:
      "Antes de las rutas modernas, viajeros, mensajeros y tropas se movían por caminos de tierra. Las postas servían para descansar, cambiar caballos y seguir viaje.",
    curious:
      "Una posta era mucho más que una parada: era información, abrigo, alimento y conexión entre territorios lejanos.",
    question: "¿Para qué servían principalmente las postas del Camino Real?",
    answersByLevel: {
      aula: [
        "Para descansar y cambiar caballos",
        "Para organizar impuestos y trámites del gobierno",
        "Para guardar mercadería que viajaba a otros pueblos"
      ],
      desafio: [
        "Para descansar y cambiar caballos",
        "Para coordinar tareas militares de forma permanente",
        "Para registrar documentos oficiales de viajeros"
      ]
    },
    correctAnswer: 0,
    readingLink: {
      label: "Leer nota: Posta de Sinsacate",
      to: "/lugares/posta-sinsacate?desde=linea-de-tiempo&mision=camino-real"
    },
    links: [
      { label: "Ver en el mapa", to: "/mapa-de-la-memoria" },
      { label: "Posta de Sinsacate", to: "/lugares/posta-sinsacate?desde=linea-de-tiempo&mision=camino-real" }
    ]
  },
  {
    id: "jesuitas",
    emoji: "⛪",
    period: "Etapa colonial",
    title: "Estancias jesuíticas",
    place: "Jesús María y Colonia Caroya",
    image: museoImg,
    imageAlt: "Museo Jesuítico Nacional",
    badge: "Guardián de la Estancia",
    summary:
      "Las estancias jesuíticas organizaron trabajo, producción, caminos y vida religiosa. Hoy son lugares clave para entender el origen histórico de la región.",
    curious:
      "En una estancia se producían alimentos, se criaban animales y se administraban grandes extensiones de tierra.",
    question: "¿Qué conservan hoy los museos y estancias jesuíticas?",
    answersByLevel: {
      aula: [
        "Huellas materiales de la vida colonial",
        "Solo relatos orales sin objetos ni documentos",
        "Objetos de distintas épocas, aunque muchos no sean coloniales"
      ],
      desafio: [
        "Huellas materiales de la vida colonial",
        "Principalmente reconstrucciones modernas sin piezas antiguas",
        "Solo objetos religiosos, sin relación con el trabajo cotidiano"
      ]
    },
    correctAnswer: 0,
    readingLink: {
      label: "Leer nota: Museo Jesuítico",
      to: "/historia/museo-jesuitico?desde=linea-de-tiempo&mision=jesuitas"
    },
    links: [
      { label: "Museo Jesuítico", to: "/historia/museo-jesuitico?desde=linea-de-tiempo&mision=jesuitas" },
      { label: "Estancia Caroya", to: "/lugares/estancia-jesuitica?desde=linea-de-tiempo&mision=jesuitas" }
    ]
  },
  {
    id: "independencia",
    emoji: "🏳️",
    period: "1810-1820",
    title: "Independencia en los caminos",
    place: "Camino Real al Alto Perú",
    image: independenciaImg,
    imageAlt: "Relato sobre San Martín y Sinsacate",
    badge: "Detective de la Independencia",
    summary:
      "Belgrano y San Martín no pertenecen solo a libros lejanos. Sus trayectos se vinculan con caminos, postas y estancias de esta región.",
    curious:
      "Los caminos locales fueron parte del movimiento de tropas, noticias y decisiones que ayudaron a construir la Nación.",
    question: "¿Por qué el Camino Real fue importante durante la independencia?",
    answersByLevel: {
      aula: [
        "Porque conectaba territorios y permitía mover tropas y mensajes",
        "Porque era la única ruta donde podían circular carretas",
        "Porque unía puertos marítimos con ciudades del sur"
      ],
      desafio: [
        "Porque conectaba territorios y permitía mover tropas y mensajes",
        "Porque reemplazó todos los caminos secundarios del interior",
        "Porque se usaba solo para trasladar comercio privado"
      ]
    },
    correctAnswer: 0,
    readingLink: {
      label: "Leer nota: San Martín y Sinsacate",
      to: "/historia/san-martin-posta-sinsacate?desde=linea-de-tiempo&mision=independencia"
    },
    links: [
      { label: "San Martín y Sinsacate", to: "/historia/san-martin-posta-sinsacate?desde=linea-de-tiempo&mision=independencia" },
      { label: "Belgrano y el Camino Real", to: "/historia/belgrano-camino-real?desde=linea-de-tiempo&mision=independencia" }
    ]
  },
  {
    id: "inmigracion",
    emoji: "🚢",
    period: "Desde 1878",
    title: "Inmigración y colonia",
    place: "Colonia Caroya",
    image: inmigracionImg,
    imageAlt: "Paisaje de Colonia Caroya",
    badge: "Memoria de la Colonia",
    summary:
      "Familias inmigrantes llegaron con oficios, idioma, comidas, costumbres y una enorme voluntad de trabajo. Su historia marcó la identidad caroyense.",
    curious:
      "Muchas tradiciones familiares, recetas y formas de trabajar la tierra llegaron con esos primeros inmigrantes.",
    question: "¿Qué trajeron los inmigrantes además de sus pertenencias?",
    answersByLevel: {
      aula: [
        "Costumbres, trabajo, oficios y memorias familiares",
        "Nuevas máquinas agrícolas para reemplazar todos los oficios",
        "Principalmente capital económico y pocas tradiciones"
      ],
      desafio: [
        "Costumbres, trabajo, oficios y memorias familiares",
        "Solo técnicas de cultivo, sin cambios en la vida social",
        "Mayormente celebraciones nuevas, sin continuidad con su origen"
      ]
    },
    correctAnswer: 0,
    readingLink: {
      label: "Leer nota: El rol de la mujer",
      to: "/memorias/rol-de-la-mujer?desde=linea-de-tiempo&mision=inmigracion"
    },
    links: [
      { label: "El rol de la mujer", to: "/memorias/rol-de-la-mujer?desde=linea-de-tiempo&mision=inmigracion" },
      { label: "Historia de la colonia", to: "/historia/colonia-san-martin?desde=linea-de-tiempo&mision=inmigracion" }
    ]
  },
  {
    id: "ferrocarril",
    emoji: "🚂",
    period: "Fines del siglo XIX",
    title: "Llegada del ferrocarril",
    place: "Jesús María",
    image: trenImg,
    imageAlt: "Estación de tren de Jesús María",
    badge: "Detective del Ferrocarril",
    summary:
      "El tren cambió la vida cotidiana: acercó pueblos, productos y personas. También dejó edificios y recuerdos que todavía forman parte del paisaje urbano.",
    curious:
      "Las estaciones no eran solo lugares de viaje: también organizaban comercio, encuentros y noticias.",
    question: "¿Qué cambió con la llegada del tren?",
    answersByLevel: {
      aula: [
        "La conexión entre pueblos, personas y productos",
        "La forma de producción rural, pero no los viajes entre pueblos",
        "Solo el transporte de carga, no la circulación de personas"
      ],
      desafio: [
        "La conexión entre pueblos, personas y productos",
        "Solo mejoró los tiempos de viaje, sin impacto comercial relevante",
        "Fortaleció el comercio local, pero no la circulación de noticias"
      ]
    },
    correctAnswer: 0,
    readingLink: {
      label: "Leer nota: Estación de tren",
      to: "/lugares/estacion-tren?desde=linea-de-tiempo&mision=ferrocarril"
    },
    links: [{ label: "Estación de tren", to: "/lugares/estacion-tren?desde=linea-de-tiempo&mision=ferrocarril" }]
  },
  {
    id: "tradiciones",
    emoji: "🎶",
    period: "Siglo XX hasta hoy",
    title: "Fiestas y tradiciones vivas",
    place: "Jesús María y Colonia Caroya",
    image: festivalImg,
    imageAlt: "Festival Nacional de Doma y Folklore de Jesús María",
    badge: "Cronista de las Tradiciones",
    summary:
      "La memoria no vive solo en edificios antiguos. También aparece en fiestas, comidas, relatos, música, juegos y encuentros familiares.",
    curious:
      "Una tradición se mantiene viva cuando una comunidad la recuerda, la practica y la comparte con nuevas generaciones.",
    question: "¿Dónde puede vivir la memoria de un pueblo?",
    answersByLevel: {
      aula: [
        "En lugares, relatos, fiestas, comidas y costumbres",
        "Principalmente en monumentos oficiales y fechas patrias",
        "En archivos históricos, aunque no en prácticas cotidianas"
      ],
      desafio: [
        "En lugares, relatos, fiestas, comidas y costumbres",
        "En espacios públicos y actos escolares, más que en la vida familiar",
        "En colecciones de museos, aunque no en celebraciones comunitarias"
      ]
    },
    correctAnswer: 0,
    readingLink: {
      label: "Leer nota: Fiesta del salame",
      to: "/costumbres/salame?desde=linea-de-tiempo&mision=tradiciones"
    },
    links: [
      { label: "Fiesta del salame", to: "/costumbres/salame?desde=linea-de-tiempo&mision=tradiciones" },
      { label: "Festival", to: "/historia/festival-jesus-maria?desde=linea-de-tiempo&mision=tradiciones" }
    ]
  }
];

const LineaDeTiempo = () => {
  const location = useLocation();
  const requestedMission = new URLSearchParams(location.search).get("mision");
  const initialActiveId = timelineItems.some((item) => item.id === requestedMission)
    ? requestedMission
    : timelineItems[0].id;
  const [activeId, setActiveId] = useState(initialActiveId);
  const [difficulty, setDifficulty] = useState("aula");
  const [answers, setAnswers] = useState({});

  const activeItem = useMemo(
    () => timelineItems.find((item) => item.id === activeId) || timelineItems[0],
    [activeId]
  );

  const getAnswerKey = (itemId, level) => `${itemId}:${level}`;

  const unlockedCount = timelineItems.filter(
    (item) => answers[getAnswerKey(item.id, difficulty)]?.isCorrect
  ).length;
  const activeAnswer = answers[getAnswerKey(activeItem.id, difficulty)];
  const activeAnswers =
    activeItem.answersByLevel?.[difficulty] || activeItem.answersByLevel?.aula || [];

  useEffect(() => {
    if (!requestedMission) return;
    if (!timelineItems.some((item) => item.id === requestedMission)) return;
    setActiveId(requestedMission);
  }, [requestedMission]);

  usePageMeta({
    title: "Línea de Tiempo Interactiva | Nuestro Pueblo",
    description:
      "Linea de tiempo interactiva para recorrer la historia de Jesus Maria, Colonia Caroya y Sinsacate con misiones educativas para chicos y familias.",
    path: location.pathname,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      name: "Línea de Tiempo Interactiva | Nuestro Pueblo",
      description:
        "Recurso educativo interactivo sobre Camino Real, estancias jesuiticas, independencia, inmigracion, ferrocarril y tradiciones locales.",
      educationalLevel: "Educacion primaria",
      inLanguage: "es-AR"
    }
  });

  const selectAnswer = (itemId, answerIndex) => {
    const item = timelineItems.find((current) => current.id === itemId);
    if (!item) return;
    const answerKey = getAnswerKey(itemId, difficulty);

    setAnswers((current) => ({
      ...current,
      [answerKey]: {
        answerIndex,
        isCorrect: answerIndex === item.correctAnswer
      }
    }));
  };

  return (
    <main className="lineaTiempo">
      <header className="lineaTiempo__hero">
        <div className="lineaTiempo__heroCopy">
          <p className="lineaTiempo__eyebrow">🚀 Exploradores del Tiempo</p>
          <h1>Línea de Tiempo Interactiva</h1>
          <p>
            Una forma de recorrer la historia local por épocas: mirar, leer,
            responder y descubrir cómo el territorio fue cambiando con el tiempo.
          </p>
          <div className="lineaTiempo__actions">
            <a href="#misiones">🎯 Comenzar misiones</a>
            <Link to="/mapa-de-la-memoria">🗺️ Ver mapa</Link>
          </div>
        </div>
        <aside className="lineaTiempo__score" aria-label="Progreso de exploración">
          <span>Progreso</span>
          <strong>{unlockedCount}/{timelineItems.length}</strong>
          <p>insignias desbloqueadas en este nivel</p>
          <div className="lineaTiempo__progress" aria-hidden="true">
            <span style={{ width: `${(unlockedCount / timelineItems.length) * 100}%` }} />
          </div>
        </aside>
      </header>

      <section className="lineaTiempo__timeline" aria-label="Hitos de la línea de tiempo">
        {timelineItems.map((item) => {
          const isActive = item.id === activeItem.id;
          const isUnlocked = answers[getAnswerKey(item.id, difficulty)]?.isCorrect;

          return (
            <button
              className={`lineaTiempo__marker${isActive ? " is-active" : ""}${
                isUnlocked ? " is-unlocked" : ""
              }`}
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              aria-pressed={isActive}
            >
              <span>{item.period}</span>
              <strong>{item.emoji} {item.title}</strong>
            </button>
          );
        })}
      </section>

      <section className="lineaTiempo__mission" id="misiones" aria-label="Misión activa">
        <div className="lineaTiempo__media">
          <img src={activeItem.image} alt={activeItem.imageAlt} loading="lazy" />
        </div>

        <article className="lineaTiempo__content">
          <p className="lineaTiempo__period">{activeItem.period}</p>
          <h2>{activeItem.emoji} {activeItem.title}</h2>
          <p className="lineaTiempo__place">{activeItem.place}</p>
          <p>{activeItem.summary}</p>

          <div className="lineaTiempo__dato">
            <span>Dato para descubrir</span>
            <p>{activeItem.curious}</p>
          </div>

          <div className="lineaTiempo__readingHint">
            <span>Antes de responder</span>
            <p>
              Leé la nota relacionada con esta etapa: allí vas a encontrar las
              pistas necesarias para resolver la consigna.
            </p>
            <Link to={(activeItem.readingLink || activeItem.links[0]).to}>
              {(activeItem.readingLink || activeItem.links[0]).label}
            </Link>
          </div>

          <div className="lineaTiempo__question">
            <h3>{activeItem.question}</h3>
            <div className="lineaTiempo__difficulty" role="group" aria-label="Nivel de dificultad">
              <button
                className={`lineaTiempo__difficultyButton${difficulty === "aula" ? " is-active" : ""}`}
                type="button"
                onClick={() => setDifficulty("aula")}
              >
                Nivel Aula
              </button>
              <button
                className={`lineaTiempo__difficultyButton${difficulty === "desafio" ? " is-active" : ""}`}
                type="button"
                onClick={() => setDifficulty("desafio")}
              >
                Nivel Desafío
              </button>
            </div>
            <div className="lineaTiempo__answers">
              {activeAnswers.map((answer, index) => {
                const isSelected = activeAnswer?.answerIndex === index;
                const answerClass = [
                  "lineaTiempo__answer",
                  isSelected ? "is-selected" : "",
                  isSelected && activeAnswer?.isCorrect ? "is-correct" : "",
                  isSelected && activeAnswer && !activeAnswer.isCorrect ? "is-incorrect" : ""
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    className={answerClass}
                    key={answer}
                    type="button"
                    onClick={() => selectAnswer(activeItem.id, index)}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>
          </div>

          {activeAnswer ? (
            <div
              className={`lineaTiempo__feedback${
                activeAnswer.isCorrect ? " is-correct" : " is-incorrect"
              }`}
              role="status"
            >
              <strong>
                {activeAnswer.isCorrect
                  ? `Insignia desbloqueada: ${activeItem.badge}`
                  : "Intentá de nuevo"}
              </strong>
              <p>
                {activeAnswer.isCorrect
                  ? "Respuesta correcta. Ya podés seguir con otro momento de la línea."
                  : "Volvé a leer la tarjeta y elegí otra respuesta."}
              </p>
            </div>
          ) : null}

          <div className="lineaTiempo__links" aria-label="Contenido relacionado">
            {activeItem.links.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="lineaTiempo__badges" aria-label="Insignias de explorador">
        <div>
          <p className="lineaTiempo__eyebrow">📓 Bitácora</p>
          <h2>🏅 Insignias de exploración</h2>
        </div>
        <div className="lineaTiempo__badgeGrid">
          {timelineItems.map((item) => {
            const isUnlocked = answers[getAnswerKey(item.id, difficulty)]?.isCorrect;

            return (
              <button
                className={`lineaTiempo__badge${isUnlocked ? " is-unlocked" : ""}`}
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
              >
                <span>{isUnlocked ? "✅ Desbloqueada" : "🔒 Pendiente"}</span>
                <strong>{item.badge}</strong>
              </button>
            );
          })}
        </div>
      </section>

      <section className="lineaTiempo__closing" aria-label="Continuar explorando">
        <div>
          <p className="lineaTiempo__eyebrow">✨ Seguir explorando</p>
          <h2>🌍 Del tiempo al territorio</h2>
          <p>
            Después de ordenar los hechos en el tiempo, el recorrido puede continuar
            en el mapa o en la ruta del Camino Real.
          </p>
        </div>
        <div className="lineaTiempo__closingLinks">
          <Link to="/mapa-de-la-memoria">🗺️ Abrir mapa</Link>
          <Link to="/mapa-de-la-memoria?punto=posta-sinsacate">📍 Ver Camino Real en el mapa</Link>
        </div>
      </section>
    </main>
  );
};

export default LineaDeTiempo;
