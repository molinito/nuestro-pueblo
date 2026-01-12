import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    // Vercel serverless no soporta multer, así que solo texto y base64 para imágenes
    const { desde, titulo, mensaje, fileAdjunto, fileName } = req.body;
    const adminEmail = "molinito48@gmail.com";

    // Si hay imagen, guardar temporalmente
    let attachments = [];
    if (fileAdjunto && fileName) {
      const buffer = Buffer.from(fileAdjunto, 'base64');
      const tempPath = path.join('/tmp', fileName);
      fs.writeFileSync(tempPath, buffer);
      attachments.push({
        filename: fileName,
        path: tempPath,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: adminEmail,
      to: adminEmail,
      subject: titulo || "Nuevo mensaje desde el portal",
      text: `De: ${desde}\n\n${mensaje}`,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ status: 'success', message: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error en /api/contacto:', error);
    return res.status(500).json({ status: 'failed', message: 'Error interno del servidor' });
  }
}
