import React from "react";
import { Link } from "react-router-dom";
import {
  MEMORIAS_BASE_PATH,
  memoriasHistorias
} from "./data";
import usePageMeta from "../../hooks/usePageMeta";
import "./MemoriasDeNuestraTierra.css";

const MemoriasDeNuestraTierraIndex = () => {
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
                <img src={historia.image} alt={historia.imageAlt} loading="lazy" />
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
    </main>
  );
};

export default MemoriasDeNuestraTierraIndex;
