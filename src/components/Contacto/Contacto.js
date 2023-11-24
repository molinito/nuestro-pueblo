/*

import React from "react";
import { NavLink } from "react-router-dom";
import './Contacto.css';

const Contacto = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const response = await fetch('http://localhost:3500/procesar-email', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            console.log('Correo enviado exitosamente');
        } else {
            console.log('Error al enviar el correo');
        }
    }

    return (
       
      <main className="content-wrapper mt-5">
      <div className="container" style={{width: "95%"}}>
        <div className="row justify-content-md-center mb-5">
          <div className="col-md-12">
            <h2 className="text-center">
              Cómo enviar correos electrónicos desde un formulario con Node.js y
              Nodemailer
              <hr />
            </h2>
          </div>

          <div className="col-md-6 text-center cardForm">
          <form action="https://formsubmit.co/03dfce715c07e71815041fe1d8894433" method="POST">
              <div className="form-group mb-3">
                <label htmlFor="desde">Desde:</label>
                <input type="email" name="desde" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="para">Para:</label>
                <input type="email" name="para" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="titulo">Titulo</label>
                <input type="text" name="titulo" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="mensaje"> Mensaje </label>
                <textarea
                  name="mensaje"
                  className="form-control"
                  rows="3"></textarea>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="fileAdjunto">Adjuntar Archivo</label>
                <input
                  type="file"
                  name="fileAdjunto"
                  className="form-control-file" />
              </div>
              <hr />
              <button type="submit" className="btn btn-info btn-lg btn-block">
                Enviar formulario
              </button>

              <input type="hidden" name="_next" value="http://localhost:3000"></input>
              <input type="hidden" name="_captcha" value="false"></input>



              
            </form>
          </div>
        </div>
      </div>
      <NavLink 
     className="button" to="/">Volver al Inicio
     </NavLink>
    </main>
    
    
  );
}

export default Contacto; */

import React, { useState } from "react";
import FormSubmit from "formsubmit";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // Genera los datos del formulario
    const data = {
      name: name,
      email: email,
      message: message,
    };

    // Envia los datos a través de la API de FormSubmit
    FormSubmit({
      data: data,
      key: "tu-clave-api",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Mensaje"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;



