import React, { useState } from "react";
import "./Contacto.css";

const Contacto = () => {
  const MAX_IMAGE_BYTES = 4 * 1024 * 1024;
  const [form, setForm] = useState({
    desde: "",
    titulo: "",
    mensaje: "",
    fileAdjunto: null
  });
  const [preview, setPreview] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "fileAdjunto") {
      const file = files[0];
      if (file && !file.type.startsWith("image/")) {
        setFeedback({ type: "error", msg: "Solo se permiten imágenes." });
        setForm({ ...form, fileAdjunto: null, fileName: "" });
        setPreview(null);
        e.target.value = "";
        return;
      }
      if (file && file.size > MAX_IMAGE_BYTES) {
        setFeedback({ type: "error", msg: "La imagen supera el tamaño máximo de 4MB." });
        setForm({ ...form, fileAdjunto: null, fileName: "" });
        setPreview(null);
        e.target.value = "";
        return;
      }
      if (file) {
        setFeedback(null);
        const reader = new FileReader();
        reader.onloadend = () => {
          setForm({ ...form, fileAdjunto: reader.result, fileName: file.name });
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setForm({ ...form, fileAdjunto: null, fileName: "" });
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
      setFeedback({ type: "error", msg: "El email y el mensaje son obligatorios." });
      return;
    }
    setEnviando(true);
    // Preparar datos para la API serverless
    let fileBase64 = "";
    let fileName = "";
    if (form.fileAdjunto && form.fileAdjunto.startsWith("data:image")) {
      // Extraer solo la parte base64
      const base64 = form.fileAdjunto.split(",")[1];
      fileBase64 = base64;
      fileName = form.fileName || "imagen.jpg";
    }
    const payload = {
      desde: form.desde,
      titulo: form.titulo,
      mensaje: form.mensaje,
      fileAdjunto: fileBase64,
      fileName: fileName
    };
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.status === "success") {
        setFeedback({
          type: "success",
          msg: "Mensaje enviado correctamente. Sera revisado antes de publicarse."
        });
        setForm({ desde: "", titulo: "", mensaje: "", fileAdjunto: null, fileName: "" });
        setPreview(null);
      } else {
        setFeedback({ type: "error", msg: data.message || "Error al enviar." });
      }
    } catch (err) {
      setFeedback({ type: "error", msg: "Error de conexion o servidor." });
    }
    setEnviando(false);
  };

  return (
    <main className="contacto">
      <header className="contacto__header">
        <p className="contacto__eyebrow">Envianos tu mensaje</p>
        <h1 className="contacto__title">Comparte tu historia, foto o mensaje</h1>
        <p className="contacto__subtitle">
          Tu contenido sera revisado antes de publicarse para mantener el tono
          cultural y familiar del sitio.
        </p>
      </header>

      <form className="contacto__form" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="contacto__grid">
          <div className="contacto__field">
            <label htmlFor="desde">Tu email</label>
            <input
              id="desde"
              type="email"
              name="desde"
              className="contacto__input"
              value={form.desde}
              onChange={handleChange}
              placeholder="nombre@correo.com"
              required
            />
          </div>
          <div className="contacto__field">
            <label htmlFor="titulo">Titulo</label>
            <input
              id="titulo"
              type="text"
              name="titulo"
              className="contacto__input"
              value={form.titulo}
              onChange={handleChange}
              placeholder="Ej: Recuerdo de la fiesta"
            />
          </div>
        </div>

        <div className="contacto__field">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className="contacto__textarea"
            rows="6"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Cuentanos tu historia, anecdotas o recuerdos..."
            required
          ></textarea>
        </div>

        <div className="contacto__field">
          <label htmlFor="fileAdjunto">Adjuntar imagen (opcional)</label>
          <input
            id="fileAdjunto"
            type="file"
            name="fileAdjunto"
            className="contacto__file"
            accept="image/*"
            onChange={handleChange}
          />
          <p className="contacto__hint">Solo imagenes, sin contenido explicito.</p>
          {preview && (
            <div className="contacto__preview">
              <img src={preview} alt="Vista previa" />
            </div>
          )}
        </div>

        {feedback && (
          <div
            className={`contacto__alert contacto__alert--${
              feedback.type === "success" ? "success" : "error"
            }`}
          >
            {feedback.msg}
          </div>
        )}

        <button type="submit" className="contacto__submit" disabled={enviando}>
          {enviando ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </main>
  );
};

export default Contacto;
