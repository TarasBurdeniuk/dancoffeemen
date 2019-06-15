const express = require('express');

const router = express.Router();
const bCrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const Users = require('../../models/User');

// Route     post api/users
// Register  user

router.post(
	'/',
	[
		check('name', 'Name is required')
			.not()
			.isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Please enter a password with 6 or more character').isLength({ min: 6 }),
		check('phone', 'Please enter a phone with 10 character ').isLength({ min: 10 }),
	],
	// eslint-disable-next-line consistent-return
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
		} catch (e) {
			console.error(e);
			res.status(500).send('Server error');
		}
	},
);

module.exports = router;
