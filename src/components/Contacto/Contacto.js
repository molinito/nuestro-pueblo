import React from "react";
import './Contacto.css';

const Contacto = () => {
  
  return (
    
        <main className="content-wrapper mt-5">
        <div className="container" style={{width: "95% !important"}}>
          <div className="row justify-content-md-center mb-5">
            <div className="col-md-12">
              <h2 className="text-center">
                Completa el formulario. Envía el mensaje o archivo que quieras compartir
                <hr />
              </h2>
            </div>
  
            <div className="col-md-6 text-center cardForm">
              <form
                action="http://localhost:3500/contacto"
                method="POST"
                encType="multipart/form-data">
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
    </form>
            </div>
          </div>
        </div>
      </main>
  );
}

export default Contacto; 