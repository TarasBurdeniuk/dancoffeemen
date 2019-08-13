const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();
const bCrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const Users = require('../../models/User');
const auth = require('../../middleware/auth');

// Route     post api/users
// Desc      Register  user

router.post(
	'/',
	[
		check('name', 'Name is required').isLength({ min: 3 }),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Please enter a password with 6 or more character').isLength({ min: 6 }),
		check('phone', 'Please enter a phone with 10 character ').isLength({ min: 10 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password, phone } = req.body;

		try {
			// See if user exists
			let user = await Users.findOne({ email });

			if (user) {
				return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
			}
			user = new Users({
				name,
				email,
				password,
				phone,
			});

			// Encrypt password
			const salt = await bCrypt.genSalt(10);

			user.password = await bCrypt.hash(password, salt);

			await user.save();

			// Return jsonwebtoken
			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
				if (err) {
					throw err;
				}
				res.json({ token });
			});

			// Send mail
			const transport = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				secure: true,
				port: 465,
				auth: {
					user: 'zinovijoprisko@gmail.com',
					pass: config.get('gmailPass'),
				},
				tls: {
					rejectUnauthorized: false,
				},
			});

			// send mail with defined transport object
			await transport.sendMail(
				{
					from: '"CoffeeMen" <dancoffeemen.herokuapp.com>',
					to: `${email}`,
					subject: `Registration`,
					text: 'Thank you for registration on Dancoffeemen',
				},
				(err, info) => {
					if (err) {
						console.error(err);
					} else {
						console.log(`Email send: ${info.response}`);
					}
				},
			);

			await transport.sendMail(
				{
					from: `"Server CoffeeMen" <dancoffeemen.herokuapp.com>`,
					to: 'dancoffeemen@gmail.com',
					subject: `New registration`,
					text: `Registered new user, ${name}`,
				},
				(err, info) => {
					if (err) {
						console.error(err);
					} else {
						console.log(`Email send: ${info.response}`);
					}
				},
			);
		} catch (e) {
			console.error(e);
			res.status(500).send('Server error');
		}
	},
);

router.post('/update', auth, async (req, res) => {
	try {
		const user = await Users.findOneAndUpdate(
			{ _id: req.user.id },
			{
				...req.body,
			},
			{ new: true },
		);

		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
