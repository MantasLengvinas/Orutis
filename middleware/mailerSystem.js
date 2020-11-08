const nodemailer = require("nodemailer");

let { email } = require('../config/keys')

let mailsender = async(userEmail, link) => {
  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: email.user, 
      pass: email.pass, 
    },
  });
  
  let info = await transporter.sendMail({
    from: 'orutislive@gmail.com', // sender
    to: userEmail, // receiver
    subject: "Orutis paskyros tvarkymas", // Subject line
    text: link, // plain text body
  });

  console.log("E-mail system authenticated.");
}
mailsender().catch(console.error);

exports.mailsender = mailsender;