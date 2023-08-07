import React from "react";
import { NavLink } from "react-router-dom";
import "./Historia.css";

const Historia = () => {
  return (
    <div>
      <h1>Nuestra historia</h1>
      <p>
        Museo Jesuítico de Jesús María en Córdoba, Argentina. El museo es un
        importante sitio histórico y cultural que representa la herencia jesuita
        en la región. Se encuentra en la ciudad de Jesús María, que tiene una
        rica historia relacionada con la presencia de la Compañía de Jesús en el
        siglo XVII. El Museo Jesuítico se estableció en una antigua estancia
        jesuita, conocida como Estancia de Jesús María, que data del siglo XVII.
        La estancia fue un centro agrícola y ganadero, y los jesuitas jugaron un
        papel significativo en el desarrollo de la región durante su estadía en
        el lugar. El museo exhibe una variedad de objetos y artefactos
        históricos que ilustran la vida y el trabajo de los jesuitas en la
        estancia, así como la influencia que tuvieron en la comunidad local y en
        la evangelización de la población indígena. Además de las exposiciones
        permanentes, el museo también alberga eventos culturales y actividades
        educativas para los visitantes. Es un destino interesante para aquellos
        interesados en la historia jesuita, la historia colonial argentina y la
        preservación del patrimonio cultural. Si tienes la oportunidad de
        visitar Jesús María, te recomiendo que no te pierdas la experiencia de
        conocer este fascinante museo y sumergirte en la historia de la región.
      </p>
      <NavLink className="button" to="/">
        Volver al Inicio
      </NavLink>
    </div>
  );
};

export default Historia;
