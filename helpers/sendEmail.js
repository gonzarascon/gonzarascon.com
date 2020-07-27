const sgMail = require('@sendgrid/mail');

const sendEmail = async ({ msg, subject, email, API_KEY, EMAIL_SECRET }) => {
  sgMail.setApiKey(API_KEY);
  const message = {
    to: EMAIL_SECRET,
    from: 'noreply@gonzarascon.com',
    subject: `Nuevo mensaje de: ${subject}`,
    html: `<b>Texto del mensaje:</b> <p>${msg}</p> <br /> <b>Enviado por</b> ${subject} (${email})`,
  };

  await sgMail.send(message).then(
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
