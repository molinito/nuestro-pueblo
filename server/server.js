/*


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
}); */


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

app.post("/api/contacto", upload.single("fileAdjunto"), (req, res) => {
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
        res.status(500).json({ status: 'failed', message: 'Mensaje no entregado' });
      } else {
        console.log("Correo enviado:", info.response);
        // Elimina el archivo temporal después de enviar el correo (opcional)
        fs.unlinkSync(filePath);
        res.status(200).json({ status: 'success', message: 'Mensaje enviado correctamente' });
      }
    });
  } else {
    res.status(400).json({ status: 'failed', message: 'Debes adjuntar un archivo' });
  }
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
