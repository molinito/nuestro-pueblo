/*
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

const nodemailer = require("nodemailer");
const multer = require("multer");

const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("inicio");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "files_emails"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "molinito48@gmail.com",
    pass: "vfgt kzyj zzsj ejxe",
  },
});

app.post("/api/contact", upload.single("fileAdjunto"), (req, res) => {
  const  para = "molinito48@gmail.com";
  const { desde, titulo, mensaje } = req.body;
  const fileAdjunto = req.file;

  if (!desde || !para || !titulo || !mensaje) {
    res.status(400).json({ error: 'Faltan campos requeridos' });
    return;
  }

  let attachments = [];
  if (fileAdjunto) {
    const filePath = path.join(__dirname, "files_emails", fileAdjunto.filename);

    attachments = [
      {
        filename: fileAdjunto.name,
        path: filePath,
      },
    ];
  }

  const mailOptions = {
    from: desde,
    to: para,
    subject: titulo,
    text: mensaje,
    attachments: attachments,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar el correo:", error);
      res.status(500).json({ error: 'Error al enviar el correo' });
    } else {
      console.log("Correo enviado:", info.response);
      res.render("inicio");
    }
  });
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
*/













require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("inicio");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "files_emails");
    fs.exists(dir, exist => {
      if (!exist) {
        return fs.mkdir(dir, error => cb(error, dir))
      }
      return cb(null, dir)
    })
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

app.post("/contacto", upload.single("fileAdjunto"), (req, res) => {
  const { desde, para, titulo, mensaje } = req.body;
  const fileAdjunto = req.file;

  // Verificar si se adjuntó un archivo
  let attachments = [];
  if (fileAdjunto) {
    // Ruta relativa del archivo adjunto en la carpeta de archivos temporales
    const filePath = fileAdjunto.path;
    attachments = [
      {
        filename: fileAdjunto.originalname,
        path: filePath,
      },
    ];

    // Definir el contenido del cuerpo para el correo electrónico que deseas enviar
    const mailOptions = {
      from: desde,
      to: para,
      subject: titulo,
      text: mensaje,
      attachments: attachments,
    };

    // Envía el correo electrónico utilizando el método sendMail del objeto transporter
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error al enviar el correo:", error);
        res.send({ status: 'failed', message: 'Mensaje no entregado' });
      } else {
        console.log("Correo enviado:", info.response);
        // Elimina el archivo temporal después de enviar el correo (opcional)
        fs.unlinkSync(filePath);
        res.send({ status: 'success', message: 'Mensaje enviado correctamente' });
      }
    });
  }

  res.render("inicio");
});





const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});