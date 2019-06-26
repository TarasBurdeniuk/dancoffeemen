const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Product = require('../../models/Product');

// Route   POST api/products
// Desc    add or update products from admin panel

router.post(
	'/',
	[
		check('name', 'Name is required')
			.not()
			.isEmpty(),
		check('productType', 'Product type is required')
			.not()
			.isEmpty(),
		check('image.previewImage', 'Preview image is required')
			.not()
			.isEmpty(),
		check('specifications.previewSpecifications', 'Preview Specifications is required')
			.not()
			.isEmpty(),
		check('price.basePrice', 'Base Price is required')
			.not()
			.isEmpty(),
		check('quantity.default', 'Quantity is required')
			.not()
			.isEmpty(),
		check('status.default', 'Status is required')
			.not()
			.isEmpty(),
	],

	// eslint-disable-next-line consistent-return
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const {
			name,
			productType,
			productVariables,
			image,
			specifications,
			price,
			quantity,
			status,
			review,
			id,
		} = req.body;

		const newProduct = {};
		if (name) {
			newProduct.name = name;
		}
		if (productType) {
			newProduct.productType = productType;
		}
		if (productVariables) {
			newProduct.productVariables = productVariables.split(',').map(item => item.trim());
		}
		if (image) {
			newProduct.image = { ...image };
		}
		if (image.defaultCardImage) {
			newProduct.image.defaultCardImage = image.defaultCardImage
				.split(',')
				.map(item => item.trim());
		}
		if (specifications) {
			newProduct.specifications = { ...specifications };
		}
		if (price) {
			newProduct.price = { ...price };
		}
		if (quantity) {
			newProduct.quantity = { ...quantity };
		}
		if (status) {
			newProduct.status = { ...status };
		}
		if (review) {
			newProduct.review = [...review];
		}
		try {
			let product = await Product.findOne({ _id: id });

			// Checking if product exist
			if (product) {
				// Update product by id
				product = await Product.findOneAndUpdate(
					{ _id: id },
					{ $set: newProduct },
					{ new: true },
				);
				return res.json(product);
			}

			// Create new product
			product = new Product(newProduct);

			await product.save();
			res.json(product);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	},
);

module.exports = router;
