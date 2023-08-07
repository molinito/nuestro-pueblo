import React from "react";
import { NavLink } from "react-router-dom";
import "./Costumbres.css";

const Costumbres = () => {
  return (
    <div>
      <h1>Nuestras costumbres</h1>
      <p>
        Fiesta Nacional e Internacional del Salame en
        Colonia Caroya, Córdoba, Argentina. Esta fiesta es un evento anual que
        celebra la tradición gastronómica de la región y, en particular, el
        famoso salame quintero, un embutido típico de la zona. La Fiesta del
        Salame se lleva a cabo en Colonia Caroya, una localidad con una rica
        historia vinculada a la cultura italiana y la producción de embutidos.
        Durante el festival, los visitantes pueden disfrutar de una amplia
        variedad de actividades, como degustaciones de salame, concursos para
        elegir el mejor salame, exhibiciones de artesanías locales, música
        folclórica, danzas tradicionales y otras expresiones culturales. Es una
        fiesta muy popular que atrae a turistas locales e internacionales, así
        como a personas de otras provincias de Argentina. El ambiente festivo y
        la deliciosa comida hacen que esta celebración sea única y atractiva
        para todos los amantes de la gastronomía y la cultura. La Fiesta
        Nacional e Internacional del Salame Quintero es una oportunidad para que
        los habitantes de Colonia Caroya muestren con orgullo su tradición
        culinaria y para que los visitantes descubran y disfruten de la riqueza
        cultural de esta encantadora localidad en Córdoba. Si tienes la
        oportunidad de visitarla durante el festival, seguramente tendrás una
        experiencia memorable y sabrosa.
      </p>{" "}
      <NavLink className="button" to="/">
        Volver al Inicio
      </NavLink>
    </div>
  );
};

export default Costumbres;
