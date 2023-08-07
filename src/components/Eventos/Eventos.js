import React from "react";
import { NavLink } from "react-router-dom";
import "./Eventos.css";

const Eventos = () => {
  return (
    <div>
      <h1>Calendario de eventos</h1>
      <p>
        Festival Nacional de Doma y Folclore de Jesús María en Córdoba,
        Argentina. Es uno de los eventos más emblemáticos y tradicionales de la
        región y atrae a miles de personas de todo el país y del extranjero. El
        festival se lleva a cabo anualmente en el mes de enero y tiene una
        duración de alrededor de diez días. Durante este tiempo, la ciudad de
        Jesús María se llena de música, danza, tradiciones gauchas y actividades
        culturales. El evento principal del festival es la "doma", una
        competencia de jinetes montando a caballo, que muestra la destreza y
        habilidad de los gauchos argentinos para domar potros salvajes. También
        hay espectáculos de música folclórica y danzas tradicionales argentinas,
        donde se presentan artistas reconocidos y talentos emergentes del
        folclore argentino. El festival ofrece una experiencia inmersiva en la
        cultura gaucha y folclórica de Argentina. Los visitantes pueden
        disfrutar de la música, la danza, la gastronomía típica y otras
        manifestaciones culturales que hacen de esta celebración una experiencia
        única. Además, el Festival de Doma y Folclore de Jesús María es una
        oportunidad para que los artistas locales y nacionales muestren su
        talento y para que los turistas y lugareños disfruten de un ambiente
        festivo y alegre. Si tienes la oportunidad de visitar Jesús María en
        enero, te recomiendo que no te pierdas este festival, ya que te
        permitirá vivir de cerca la esencia de la cultura gaucha y folclórica de
        Argentina.
      </p>
      <NavLink className="button" to="/">
        Volver al Inicio
      </NavLink>
    </div>
  );
};

export default Eventos;
