import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPaypal, FaUniversity } from "react-icons/fa";
import "./Donacion.css";

const Donacion = () => {
  const [copied, setCopied] = useState(false);
  const alias = "GRAMO.CARDO.AURORA";

  const handleCopyAlias = async () => {
    try {
      await navigator.clipboard.writeText(alias);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <main className="donacion">
      <header className="donacion__hero">
        <p className="donacion__eyebrow">Colaboración</p>
        <h1 className="donacion__title">Ayudá a sostener este proyecto</h1>
        <p className="donacion__subtitle">
          Un sitio hecho con amor, memoria y muchas horas de trabajo.
        </p>
      </header>

      <section className="donacion__card">
        <div className="donacion__content">
          <p>
            Este espacio nació sin fines de lucro, con la intención de preservar
            la historia, las costumbres y el orgullo de nuestra tierra. Cada
            historia, cada fotografía y cada detalle fue preparado con dedicación
            y cariño.
          </p>
          <p>
            Mantenerlo vivo lleva tiempo, energía y recursos. Si sentís que este
            proyecto te emociona, te representa o te acompaña, una donación, por
            pequeña que sea, es una forma hermosa de valorar ese esfuerzo y ayudar
            a que siga creciendo.
          </p>
          <p className="donacion__highlight">
            Gracias por tu apoyo y por ser parte de esta comunidad que celebra sus
            raíces.
          </p>
        </div>

        <aside className="donacion__panel">
          <h2>Formas de donar</h2>
          <a
            className="donacion__cta"
            href="https://paypal.me/molinito12"
            target="_blank"
            rel="noreferrer"
          >
            <FaPaypal className="donacion__brand-icon donacion__brand-icon--paypal" />
            Donar ahora
          </a>
          <div className="donacion__methods">
            <div>
              <span className="donacion__label">
                <FaPaypal className="donacion__brand-icon donacion__brand-icon--paypal" />
                PayPal
              </span>
              <a
                href="https://paypal.me/molinito12"
                target="_blank"
                rel="noreferrer"
              >
                paypal.me/molinito12
              </a>
            </div>
            <div>
              <span className="donacion__label">
                <FaUniversity className="donacion__brand-icon donacion__brand-icon--santander" />
                Alias Santander
              </span>
              <button
                type="button"
                className="donacion__alias"
                onClick={handleCopyAlias}
              >
                {alias}
              </button>
              <span className="donacion__hint">
                {copied ? "Alias copiado" : "Click para copiar"}
              </span>
            </div>
          </div>
        </aside>
      </section>

      <NavLink className="button donacion__back" to="/">
        Volver al Inicio
      </NavLink>
    </main>
  );
};

export default Donacion;
