const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true }); // Habilita CORS

// Configura el transporte SMTP para Gmail con contraseña de aplicación
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "servicelyplatform@gmail.com",            // Tu correo Gmail
    pass: "epqdwhyxokhozxni"                         // La contraseña SIN ESPACIOS
  }
});

exports.enviarCorreoContacto = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(405).send("Método no permitido");
    }

    const { nombre, email, asunto, mensaje } = req.body;

    const mailOptions = {
      from: `"${nombre}" <${email}>`,
      to: "servicelyplatform@gmail.com", // Donde recibirás el mensaje
      subject: `Nuevo mensaje de contacto: ${asunto}`,
      html: `
        <h3>Mensaje desde el formulario</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong><br>${mensaje}</p>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error al enviar correo:", error);
        return res.status(500).send("Error al enviar el mensaje.");
      }
      return res.status(200).send("Mensaje enviado correctamente.");
    });
  });
});