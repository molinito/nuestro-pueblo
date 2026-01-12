
import React, { useState } from "react";
import './Contacto.css';


const Contacto = () => {
  const [form, setForm] = useState({
    desde: '',
    titulo: '',
    mensaje: '',
    fileAdjunto: null
  });
  const [preview, setPreview] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'fileAdjunto') {
      const file = files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setForm({ ...form, fileAdjunto: reader.result, fileName: file.name });
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setForm({ ...form, fileAdjunto: null, fileName: '' });
        setPreview(null);
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null);
    if (!form.desde || !form.mensaje) {
      setFeedback({ type: 'error', msg: 'El email y el mensaje son obligatorios.' });
      return;
    }
    setEnviando(true);
    // Preparar datos para la API serverless
    let fileBase64 = '';
    let fileName = '';
    if (form.fileAdjunto && form.fileAdjunto.startsWith('data:image')) {
      // Extraer solo la parte base64
      const base64 = form.fileAdjunto.split(',')[1];
      fileBase64 = base64;
      fileName = form.fileName || 'imagen.jpg';
    }
    const payload = {
      desde: form.desde,
      titulo: form.titulo,
      mensaje: form.mensaje,
      fileAdjunto: fileBase64,
      fileName: fileName
    };
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.status === 'success') {
        setFeedback({ type: 'success', msg: '¡Mensaje enviado correctamente! Será revisado antes de publicarse.' });
        setForm({ desde: '', titulo: '', mensaje: '', fileAdjunto: null, fileName: '' });
        setPreview(null);
      } else {
        setFeedback({ type: 'error', msg: data.message || 'Error al enviar.' });
      }
    } catch (err) {
      setFeedback({ type: 'error', msg: 'Error de conexión o servidor.' });
    }
    setEnviando(false);
  };

  return (
    <main className="content-wrapper mt-5">
      <div className="container" style={{ width: "95% !important" }}>
        <div className="row justify-content-md-center mb-5">
          <div className="col-md-12">
            <h2 className="text-center">
              Comparte tu historia, foto o mensaje
              <hr />
            </h2>
          </div>
          <div className="col-md-6 text-center cardForm">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form-group mb-3">
                <label htmlFor="desde">Tu Email:</label>
                <input type="email" name="desde" className="form-control" value={form.desde} onChange={handleChange} required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="titulo">Título</label>
                <input type="text" name="titulo" className="form-control" value={form.titulo} onChange={handleChange} />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea name="mensaje" className="form-control" rows="3" value={form.mensaje} onChange={handleChange} required></textarea>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="fileAdjunto">Adjuntar imagen (opcional)</label>
                <input type="file" name="fileAdjunto" className="form-control-file" accept="image/*" onChange={handleChange} />
                {preview && (
                  <div style={{ marginTop: 10 }}>
                    <img src={preview} alt="Vista previa" style={{ maxWidth: '100%', maxHeight: 200 }} />
                  </div>
                )}
              </div>
              {feedback && (
                <div className={`alert alert-${feedback.type === 'success' ? 'success' : 'danger'}`}>{feedback.msg}</div>
              )}
              <hr />
              <button type="submit" className="btn btn-info btn-lg btn-block" disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contacto;






