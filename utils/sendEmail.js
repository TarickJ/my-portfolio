const nodemailer = require('nodemailer');

export default async function sendEmail({ name, email, message }) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your_email_address@gmail.com', // replace with your email address
        pass: 'your_email_password', // replace with your email password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${name} <${email}>`, // sender address
      to: 'tarickjoseph.audio@gmail.com', // list of receivers
      subject: 'New message from contact form', // Subject line
      text: message, // plain text body
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error(error);
  }
}
