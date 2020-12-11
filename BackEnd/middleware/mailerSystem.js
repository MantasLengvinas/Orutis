const nodemailer = require("nodemailer");

let { email } = require('../config/keys')
	
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, 
	auth: {
	  user: email.user, 
	  pass: email.pass, 
	},
});

console.log("E-mail system authenticated.");

module.exports.transporter = transporter;