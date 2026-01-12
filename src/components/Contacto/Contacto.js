
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
      setForm({ ...form, fileAdjunto: file });
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(file);
      } else {
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
    const formData = new FormData();
    formData.append('desde', form.desde);
    formData.append('titulo', form.titulo);
    formData.append('mensaje', form.mensaje);
    if (form.fileAdjunto) formData.append('fileAdjunto', form.fileAdjunto);
    // El campo "para" se fija en el backend
    try {
      const res = await fetch('http://localhost:3500/api/contacto', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.status === 'success') {
        setFeedback({ type: 'success', msg: '¡Mensaje enviado correctamente! Será revisado antes de publicarse.' });
        setForm({ desde: '', titulo: '', mensaje: '', fileAdjunto: null });
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






