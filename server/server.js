
require("dotenv").config();
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "files_emails");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

console.log("Credenciales:", process.env.EMAIL, process.env.PASS);

app.post("/api/contacto", upload.single("fileAdjunto"), (req, res) => {
  try {
    console.log("Recibiendo solicitud en /api/contacto");
    console.log("Body:", req.body);
    console.log("File:", req.file);

    const { desde, titulo, mensaje } = req.body;
    const fileAdjunto = req.file;
    const adminEmail = "molinito48@gmail.com";

    // Guardar datos en un archivo JSON para revisión posterior
    const entryId = Date.now();
    const entryDir = path.join(__dirname, "files_emails", "pendientes");
    if (!fs.existsSync(entryDir)) fs.mkdirSync(entryDir, { recursive: true });

    const entryData = {
      desde,
      titulo,
      mensaje,
      fileAdjunto: fileAdjunto ? fileAdjunto.filename : null,
      fecha: new Date().toISOString()
    };
    fs.writeFileSync(
      path.join(entryDir, `${entryId}.json`),
      JSON.stringify(entryData, null, 2)
    );

    console.log("Datos guardados en JSON");

    // Preparar adjunto para el correo
    let attachments = [];
    if (fileAdjunto) {
      attachments.push({
        filename: fileAdjunto.originalname,
        path: fileAdjunto.path,
      });
    }

    // Opciones del correo
    const mailOptions = {
      from: adminEmail,
      to: adminEmail,
      subject: titulo || "Nuevo mensaje desde el portal",
      text: `De: ${desde}\n\n${mensaje}`,
      attachments,
    };

    console.log("Enviando correo...");

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error al enviar el correo:", error);
        return res.status(500).json({ status: 'failed', message: 'Mensaje no entregado' });
      } else {
        console.log("Correo enviado:", info.response);
        if (fileAdjunto && fs.existsSync(fileAdjunto.path)) {
          fs.unlinkSync(fileAdjunto.path);
        }
        return res.status(200).json({ status: 'success', message: 'Mensaje enviado correctamente' });
      }
    });
  } catch (error) {
    console.error("Error en /api/contacto:", error);
    return res.status(500).json({ status: 'failed', message: 'Error interno del servidor' });
  }
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
