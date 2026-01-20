import nodemailer from "nodemailer";

const MAX_IMAGE_BYTES = 3 * 1024 * 1024;
const adminEmail = "molinito48@gmail.com";

const getContentType = (fileName = "") => {
  const ext = fileName.toLowerCase().split(".").pop();
  switch (ext) {
    case "png":
      return "image/png";
    case "webp":
      return "image/webp";
    case "gif":
      return "image/gif";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    default:
      return "application/octet-stream";
  }
};

const sanitizeFileName = (fileName = "imagen.jpg") =>
  fileName.replace(/[^\w.\-]+/g, "_").slice(0, 80);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { desde, titulo, mensaje, fileAdjunto, fileName } = req.body || {};

    if (!desde || !mensaje) {
      return res.status(400).json({ status: "failed", message: "Datos incompletos" });
    }

    if (!process.env.EMAIL || !process.env.PASS) {
      return res
        .status(500)
        .json({ status: "failed", message: "EMAIL/PASS no configurados en el servidor" });
    }

    const attachments = [];
    if (fileAdjunto && fileName) {
      const rawBase64 = String(fileAdjunto).includes(",")
        ? String(fileAdjunto).split(",").pop()
        : String(fileAdjunto);
      if (!rawBase64) {
        return res.status(400).json({ status: "failed", message: "Adjunto inválido" });
      }
      const buffer = Buffer.from(rawBase64, "base64");
      if (buffer.length > MAX_IMAGE_BYTES) {
        return res.status(413).json({
          status: "failed",
          message: "La imagen supera el tamaño máximo permitido (3MB)."
        });
      }
      attachments.push({
        filename: sanitizeFileName(fileName),
        content: buffer,
        contentType: getContentType(fileName)
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: adminEmail,
      replyTo: desde,
      subject: titulo || "Nuevo mensaje desde el portal",
      text: `De: ${desde}\n\n${mensaje}`,
      attachments
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ status: "success", message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("Error en /api/contacto:", error);
    return res
      .status(500)
      .json({ status: "failed", message: error?.message || "Error interno del servidor" });
  }
}
