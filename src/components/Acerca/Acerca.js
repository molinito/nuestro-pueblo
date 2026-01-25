import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./Acerca.css";

const Acerca = () => {
  return (
    <main className="acerca">
      <header className="acerca__hero">
        <p className="acerca__eyebrow">Sobre mí</p>
        <h1 className="acerca__title">Marcelo Saravia</h1>
        <p className="acerca__subtitle">
          Nacido en Jesús María, vecino de Colonia Caroya y enamorado de su
          identidad cultural.
        </p>
      </header>

      <section className="acerca__card">
        <div className="acerca__content">
          <p>
            Soy Marcelo Saravia. Crecí entre calles de polvo y campanas
            antiguas, y desde joven elegí a Colonia Caroya como mi casa. Aquí
            formé mi familia, aquí aprendí que cada plato, cada historia y cada
            fiesta guarda la memoria viva de quienes nos precedieron.
          </p>
          <p>
            Este sitio nace de una pasión profunda: conservar y compartir las
            tradiciones de nuestra tierra. Quiero que la voz de los abuelos, los
            relatos de los vecinos y las postales de nuestra historia sigan
            latiendo, para quienes están y para quienes vuelven.
          </p>
          <p className="acerca__highlight">
            "Creo en la cultura como puente y en la memoria como abrazo. Si este
            rincón despierta una sonrisa, un recuerdo o una curiosidad, entonces
            el objetivo está cumplido."
          </p>
        </div>

        <aside className="acerca__panel">
          <h2>Mis datos</h2>
          <ul>
            <li>
              <span>
                <SiGmail className="acerca__icon acerca__icon--gmail" /> Gmail:
              </span>
              <a href="mailto:molinito48@gmail.com">molinito48@gmail.com</a>
            </li>
            <li>
              <span>
                <FaLinkedinIn className="acerca__icon acerca__icon--linkedin" /> LinkedIn:
              </span>
              <a
                href="https://linkedin.com/in/marcelo-saravia-27128092"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/marcelo-saravia-27128092
              </a>
            </li>
            <li>
              <span>
                <FaGithub className="acerca__icon acerca__icon--github" /> GitHub:
              </span>
              <a href="https://github.com/molinito" target="_blank" rel="noreferrer">
                github.com/molinito
              </a>
            </li>
            <li>
              <span>
                <FaFacebookF className="acerca__icon acerca__icon--facebook" /> Facebook:
              </span>
              <a
                href="https://www.facebook.com/groups/26140216205584060"
                target="_blank"
                rel="noreferrer"
              >
                facebook.com/groups/26140216205584060
              </a>
            </li>
          </ul>
        </aside>
      </section>

      <NavLink className="button acerca__back" to="/">
        Volver al Inicio
      </NavLink>
    </main>
  );
};

export default Acerca;
