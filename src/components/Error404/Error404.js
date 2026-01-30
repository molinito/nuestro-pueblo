
import React from "react";
import { NavLink } from "react-router-dom";
import "./Error404.css";
import illustration from "./404-illustration.svg";

const Error404 = () => (
  <main className="error404">
    <div className="error404__container">
      <img
        src={illustration}
        alt="Ilustración de nube amigable para error 404"
        className="error404__img"
        style={{ width: 160, marginBottom: 24 }}
      />
      <h1 className="error404__title">404</h1>
      <h2 className="error404__subtitle">Página no encontrada</h2>
      <p className="error404__desc">
        Lo sentimos, la página que buscas no existe, fue movida o nunca estuvo aquí.<br />
        Puedes volver al inicio o explorar otras secciones del portal.
      </p>
      <NavLink className="error404__btn" to="/">
        Volver al Inicio
      </NavLink>
    </div>
  </main>
);

export default Error404;
