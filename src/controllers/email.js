const nodemailer = require('nodemailer');
require("dotenv-safe").config();
let emailController = {};

	const transporter = nodemailer.createTransport({
		host: 'smtp-mail.outlook.com',
		port: 25,
		secure: false,
		auth: {
			user: process.env.AUTH,
			pass: process.env.SECRET
		}
	});

emailController.newEmail = (req, res) => {
	transporter.sendMail({
	from: 'Marcelo Heinrick' + process.env.AUTH,
	to: 'Marcelohz198@hotmail.com',
	subject: req.body.name + ' | ' + req.body.email + ', '+ req.body.tittle,
	text: req.body.text 
	}).then(message => {
		res.render('Home');
	}).catch(error => {
		res.send(error);
	})
}

module.exports = emailController;