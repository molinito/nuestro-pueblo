import React, { useState } from "react";
import "./Contacto.css";

const Contacto = () => {
  const MAX_IMAGE_BYTES = 3 * 1024 * 1024;
  const MAX_DIMENSION = 2000;
  const JPEG_QUALITY = 0.82;

  const [form, setForm] = useState({
    desde: "",
    titulo: "",
    mensaje: "",
    fileAdjunto: null
  });
  const [preview, setPreview] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const readAsDataURL = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

  const loadImage = (dataUrl) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = dataUrl;
    });

  const compressImage = async (file) => {
    const dataUrl = await readAsDataURL(file);
    const img = await loadImage(dataUrl);
    const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height));
    const targetWidth = Math.round(img.width * scale);
    const targetHeight = Math.round(img.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY)
    );
    if (!blob) {
      throw new Error("No se pudo procesar la imagen.");
    }
    const compressedDataUrl = await readAsDataURL(blob);
    const safeName = file.name.replace(/\.[^.]+$/, ".jpg");
    return { dataUrl: compressedDataUrl, size: blob.size, fileName: safeName };
  };

  const resetFileInput = (target) => {
    if (target) {
      target.value = "";
    }
    setForm((prev) => ({ ...prev, fileAdjunto: null, fileName: "" }));
    setPreview(null);
  };

  const handleChange = async (e) => {
    const { name, value, files } = e.target;
    if (name === "fileAdjunto") {
      const file = files[0];
      if (file && !file.type.startsWith("image/")) {
        setFeedback({ type: "error", msg: "Solo se permiten imágenes." });
        resetFileInput(e.target);
        return;
      }
      if (file) {
        setFeedback(null);
        if (file.size > MAX_IMAGE_BYTES) {
          try {
            const compressed = await compressImage(file);
            if (compressed.size > MAX_IMAGE_BYTES) {
              setFeedback({
                type: "error",
                msg: "La imagen supera el tamaño máximo de 3MB."
              });
              resetFileInput(e.target);
              return;
            }
            setForm((prev) => ({
              ...prev,
              fileAdjunto: compressed.dataUrl,
              fileName: compressed.fileName
            }));
            setPreview(compressed.dataUrl);
          } catch (error) {
            setFeedback({
              type: "error",
              msg: "No se pudo procesar la imagen. Probá con otra foto."
            });
            resetFileInput(e.target);
          }
          return;
        }
        try {
          const originalDataUrl = await readAsDataURL(file);
          setForm((prev) => ({
            ...prev,
            fileAdjunto: originalDataUrl,
            fileName: file.name
          }));
          setPreview(originalDataUrl);
        } catch (error) {
          setFeedback({
            type: "error",
            msg: "No se pudo leer la imagen. Probá con otra foto."
          });
          resetFileInput(e.target);
        }
        return;
      }
      resetFileInput(e.target);
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null);
    if (!form.desde || !form.mensaje) {
      setFeedback({ type: "error", msg: "El email y el mensaje son obligatorios." });
      return;
    }
    setEnviando(true);
    let fileBase64 = "";
    let fileName = "";
    if (form.fileAdjunto && form.fileAdjunto.startsWith("data:image")) {
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
          msg: "Mensaje enviado correctamente. Será revisado antes de publicarse."
        });
        setForm({ desde: "", titulo: "", mensaje: "", fileAdjunto: null, fileName: "" });
        setPreview(null);
      } else {
        setFeedback({ type: "error", msg: data.message || "Error al enviar." });
      }
    } catch (err) {
      setFeedback({
        type: "error",
        msg: "Error de conexión o servidor. Si adjuntaste una imagen, debe ser menor a 3MB."
      });
    }
    setEnviando(false);
  };

  return (
    <main className="contacto">
      <header className="contacto__header">
        <p className="contacto__eyebrow">Envíanos tu mensaje</p>
        <h1 className="contacto__title">Comparte tu historia, foto o mensaje</h1>
        <p className="contacto__subtitle">
          Tu contenido será revisado antes de publicarse para mantener el tono
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
            <label htmlFor="titulo">Título</label>
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
            placeholder="Cuéntanos tu historia, anécdotas o recuerdos..."
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
          <p className="contacto__hint">Solo imágenes, sin contenido explícito.</p>
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
