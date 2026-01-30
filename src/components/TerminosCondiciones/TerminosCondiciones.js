import React from "react";
import { NavLink } from "react-router-dom";
import "./TerminosCondiciones.css";

const TerminosCondiciones = () => {
  return (
    <main className="privacidad">
      <h1>Términos y Condiciones</h1>
      <p>
        Este sitio tiene un fin cultural, turistico y de entretenimiento. Al
        acceder, navegar o enviar contenido, aceptas estas politicas de
        privacidad y terminos de uso.
      </p>

      <section className="privacidad__section">
        <h2>1. Contenido enviado por usuarios</h2>
        <p>
          Puedes enviar mensajes, historias e imagenes mediante el formulario de
          contacto. Al hacerlo, declaras que eres el autor o que cuentas con los
          permisos necesarios para compartir ese contenido.
        </p>
      </section>

      <section className="privacidad__section">
        <h2>2. Reglas de contenido (enfasis)</h2>
        <p>No se aceptaran, publicaran ni promoveran contenidos como:</p>
        <ul>
          <li>Material explicito o sexual.</li>
          <li>Contenido politico o religioso.</li>
          <li>Lenguaje soez, ofensivo o discriminatorio.</li>
          <li>Violencia, odio, acoso o amenazas.</li>
          <li>Contenido ilegal o que infrinja derechos de terceros.</li>
          <li>Spam, publicidad no solicitada o enlaces maliciosos.</li>
        </ul>
        <p>
          Si envias imagenes, aseguras que no contienen material inapropiado ni
          violan derechos de autor o de imagen.
        </p>
      </section>

      <section className="privacidad__section">
        <h2>3. Moderacion y derecho de publicacion</h2>
        <p>
          El administrador se reserva el derecho de publicar, no publicar,
          editar, resumir o eliminar cualquier contenido enviado, sin previo
          aviso y a su criterio. El envio de contenido no garantiza su
          publicacion.
        </p>
      </section>

      <section className="privacidad__section">
        <h2>4. Responsabilidad del contenido</h2>
        <p>
          Las opiniones, relatos e imagenes son responsabilidad exclusiva de la
          persona que las envia. El sitio y su administrador quedan exentos de
          responsabilidad por el contenido publicado o no publicado, aun si
          algun termino no estuviera expresamente indicado en estas condiciones.
        </p>
      </section>

      <section className="privacidad__section">
        <h2>5. Privacidad y uso de datos</h2>
        <p>
          Solo se solicitan datos necesarios para gestionar el contacto: email,
          titulo, mensaje y, opcionalmente, una imagen. Estos datos se usan para
          responder, moderar y, si corresponde, publicar el contenido. No se
          comparten con terceros salvo obligacion legal.
        </p>
        <p>
          Puedes solicitar la eliminacion de tu contenido o datos escribiendo al
          administrador del sitio.
        </p>
      </section>

      <section className="privacidad__section">
        <h2>6. Origen de los contenidos y derechos de autor</h2>
        <p>
          El portal se mantiene tanto de aportes recibidos de la comunidad como de contenido libremente disponible en redes sociales y fuentes públicas, además de material propio. Si eres autor de algún contenido publicado y deseas que sea retirado, puedes solicitarlo al administrador. El material será removido del portal a pedido del autor, sin derecho a reclamo judicial ni compensación alguna. El objetivo es preservar la buena fe, el respeto y el espíritu cultural y comunitario del sitio.
        </p>
      </section>

      <section className="privacidad__section">
        <h2>7. Licencia de uso</h2>
        <p>
          Al enviar contenido, otorgas una licencia no exclusiva para usar,
          reproducir y difundir el material en este sitio con fines culturales,
          turisticos y de entretenimiento, siempre con respeto al autor.
        </p>
      </section>

      <section className="privacidad__section">
        <h2>8. Cambios</h2>
        <p>
          Estas politicas pueden actualizarse en cualquier momento. Te sugerimos
          revisarlas periodicamente.
        </p>
      </section>

      <NavLink className="button nav-link" to="/">
        Volver al Inicio
      </NavLink>
    </main>
  );
};

export default TerminosCondiciones;
