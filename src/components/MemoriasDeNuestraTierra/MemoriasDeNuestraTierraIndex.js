import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MEMORIAS_BASE_PATH,
  memoriasHistorias
} from "./data";
import usePageMeta from "../../hooks/usePageMeta";
import "./MemoriasDeNuestraTierra.css";

const MemoriasDeNuestraTierraIndex = () => {
  const [closingStory, setClosingStory] = useState(null);

  usePageMeta({
    title: "Memorias de Nuestra Tierra | Historias de Martha Canale",
    description:
      "Historias reales de inmigrantes de Colonia Caroya recopiladas por Martha Canale en su libro Hacer la America.",
    path: "/memorias"
  });

  return (
    <main className="memorias">
      <header className="memorias__hero">
        <h1 className="memorias__title">Memorias de Nuestra Tierra</h1>
        <p className="memorias__subtitle">Historias de Martha Canale</p>
        <p className="memorias__intro">
          Un recorrido por historias reales de los primeros inmigrantes de Colonia Caroya,
          recopiladas por Martha Canale en su obra Hacer la America.
        </p>
      </header>

      <section className="memorias__homage" aria-label="Homenaje">
        <p>
          Este espacio es un homenaje a Martha Canale Vicentini, historiadora y escritora,
          cuya obra permitió preservar la memoria viva de nuestra comunidad. Con el
          consentimiento de su familia, compartimos aquí algunas historias de su libro, con el
          objetivo de mantener viva su voz y su legado.
        </p>
      </section>

      <section className="memorias__grid" aria-label="Historias publicadas">
        {memoriasHistorias.map((historia) => {
          const isPublished = historia.status === "published";
          const cardClassName = `memorias__card ${isPublished ? "" : "is-disabled"}`.trim();

          const cardInner = (
            <>
              <div className="memorias__cardMedia">
                <img
                  src={historia.image}
                  alt={historia.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="memorias__badge">{`Historia ${historia.number}`}</span>
                {!isPublished && <span className="memorias__badgeSoon">Proximamente</span>}
              </div>
              <div className="memorias__cardBody">
                <h3 className="memorias__cardTitle">{historia.title}</h3>
                <p className="memorias__cardText">{historia.description}</p>
                <div className="memorias__cardCtaRow">
                  <span className="memorias__cardCta">
                    {isPublished ? "Leer historia" : "Proximamente"}
                  </span>
                </div>
              </div>
            </>
          );

          if (!isPublished) {
            return (
              <div
                key={`memorias-${historia.number}`}
                className={cardClassName}
                aria-disabled="true"
              >
                {cardInner}
              </div>
            );
          }

          if (historia.slug === "costumbres-comercios-personajes") {
            return (
              <button
                key={`memorias-${historia.number}`}
                className={`${cardClassName} memorias__cardButton`}
                type="button"
                onClick={() => setClosingStory(historia)}
              >
                {cardInner}
              </button>
            );
          }

          return (
            <Link
              key={`memorias-${historia.number}`}
              className={cardClassName}
              to={`${MEMORIAS_BASE_PATH}/${historia.slug}`}
            >
              {cardInner}
            </Link>
          );
        })}
      </section>

      {closingStory ? (
        <div className="memorias__closingNoticeBackdrop" role="presentation">
          <section
            className="memorias__closingNotice"
            role="dialog"
            aria-modal="true"
            aria-labelledby="memorias-closing-notice-title"
          >
            <p className="memorias__closingNoticeEyebrow">Agradecimiento especial</p>
            <h2 id="memorias-closing-notice-title">
              Antes de ingresar al último relato
            </h2>
            <p>
              Esta última historia ha sido editada y resumida para mostrar la mayor
              cantidad de contenido referente a los oficios, comercios y recuerdos de la
              primera Colonia, siempre respetando la esencia del libro{" "}
              <strong>Hacer la América</strong>.
            </p>
            <p>
              Mi más profundo agradecimiento a Patricia y Mónica Vicentini por permitirme
              publicar parte de este hermoso libro y honrar a Martha Canale Vicentini, su
              autora.
            </p>
            <p>
              Este último relato contiene nombres y apellidos, casi todos conocidos. Invito
              a familiares y amigos que quieran compartir alguna anécdota o foto de los
              personajes a hacerlo sin ningún compromiso, enviándome su mensaje por Facebook
              o WhatsApp.
            </p>
            <p>Gracias por permitirme ser parte de esta comunidad.</p>
            <div className="memorias__closingNoticeActions">
              <button
                className="memorias__closingNoticeSecondary"
                type="button"
                onClick={() => setClosingStory(null)}
              >
                Volver
              </button>
              <Link
                className="memorias__closingNoticePrimary"
                to={`${MEMORIAS_BASE_PATH}/${closingStory.slug}`}
                state={{ skipClosingNotice: true }}
              >
                Ir al relato
              </Link>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
};

export default MemoriasDeNuestraTierraIndex;
