const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Product = require('../../models/Product');

// Route   POST api/products
// Desc    add products from admin panel

router.post(
	'/',
	[
		check('name', 'Name is required')
			.not()
			.isEmpty(),
		check('productType', 'Product type is required')
			.not()
			.isEmpty(),
		check('previewImage', 'Preview image is required')
			.not()
			.isEmpty(),
		check('previewSpecifications', 'Preview Specifications is required')
			.not()
			.isEmpty(),
		check('basePrice', 'Base Price is required')
			.not()
			.isEmpty(),
	],

	// eslint-disable-next-line consistent-return
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		try {
			const newProduct = new Product({
				name: req.body.name,
				productType: req.body.productType,
				image: {
					previewImage: req.body.previewImage,
				},
				specifications: {
					previewSpecifications: req.body.previewSpecifications,
				},
				price: {
					basePrice: req.body.basePrice,
				},
			});

			const product = await newProduct.save();

			res.json(product);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	},
);

module.exports = router;
