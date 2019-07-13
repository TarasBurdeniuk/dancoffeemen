const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Size = require('../../models/Size');

// Route   POST api/size
// Desc    add new size

router.post(
	'/',
	[
		check('size', 'Size is required')
			.not()
			.isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			let sizes = await Size.findById(req.body.id);
			if (sizes) {
				if (!sizes.size.includes(req.body.size.trim())) {
					sizes.size.push(req.body.size.trim());
					await sizes.save();
					return res.json(sizes);
				}
			} else {
				sizes = new Size(req.body);
				await sizes.save();
			}

			res.json(sizes);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	},
);

// Route   GET api/size
// Desc    get array sizes

router.get('/', async (req, res) => {
	try {
		const allSizes = await Size.find();

		res.json(allSizes);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
