const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const CaruselPhoto = require('../../models/CaruselPhoto');

// Route   POST api/carusel_photo
// Desc    add carusel photo on main page

router.post(
	'/',
	[
		check('image', 'Image is required')
			.not()
			.isEmpty(),
	],
	// eslint-disable-next-line consistent-return
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { image } = req.body;
		try {
			const newPhoto = new CaruselPhoto({
				image,
			});

			await newPhoto.save();
			res.json(newPhoto);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	},
);

// Route   GET api/carusel_photo
// Desc    get all carusel photo on main page

router.get(
	'/',
	// eslint-disable-next-line consistent-return
	async (req, res) => {
		try {
			const caruselPhoto = await CaruselPhoto.find();

			res.json(caruselPhoto);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	},
);

module.exports = router;
