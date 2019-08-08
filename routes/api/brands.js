const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Brand = require('../../models/Brand');

// Route    GET api/brands
// Desc     get array all products brand

router.get('/', async (req, res) => {
	try {
		const brands = await Brand.find();

		res.json(brands);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// Route    POST api/brands
// Desc     add brand item

router.post(
	'/',
	[
		check('name', 'Name is required')
			.not()
			.isEmpty(),
		check('src', 'Src is required, must be string')
			.not()
			.isEmpty(),
		check('brandLink', 'Brand link is required')
			.not()
			.isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, src, brandLink } = req.body;
		try {
			let newBrand = {
				name: name.toUpperCase(),
				src: src.trim(),
				brandLink: brandLink.trim(),
			};
			if (req.body.id) {
				const brand = await Brand.findOneAndUpdate(
					{ _id: req.body.id },
					{ $set: newBrand },
					{ new: true },
				);
				return res.json(brand);
			}
			newBrand = await Brand(newBrand);
			await newBrand.save();
			res.json(newBrand);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	},
);

module.exports = router;
