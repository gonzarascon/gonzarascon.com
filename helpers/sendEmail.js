const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async ({ msg, subject, email }) => {
  const message = {
    to: process.env.EMAIL_ADRESS,
    from: 'noreply@gonzarascon.com',
    subject: `Nuevo mensaje de: ${subject}`,
    html: `<b>Texto del mensaje:</b> <p>${msg}</p> <br /> <b>Enviado por</b> ${subject} (${email})`,
  };

  sgMail.send(message).then(
    () => {},
    error => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    },
  );
};

export default sendEmail;
