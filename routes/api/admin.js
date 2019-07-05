const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Product = require('../../models/Product');

// Route   POST api/products
// Desc    add or update products from admin panel

router.post(
	'/',
	[
		check('brand', 'Brand is required')
			.not()
			.isEmpty(),
		check('model', 'Model is required')
			.not()
			.isEmpty(),
		check('productType', 'Product type is required')
			.not()
			.isEmpty(),
		check('image', 'Image is required')
			.not()
			.isEmpty(),
		check('specifications', 'Specifications is required')
			.not()
			.isEmpty(),
		check('price', 'Price is required')
			.not()
			.isEmpty(),
		check('quantity', 'Quantity is required')
			.not()
			.isEmpty(),
		check('status', 'Status is required')
			.not()
			.isEmpty(),
		check('shortDescription', 'Short Description is required')
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
			brand,
			model,
			productType,
			image,
			specifications,
			price,
			discount,
			quantity,
			status,
			shortDescription,
			mainDescription,
			id,
		} = req.body;

		const newProduct = {};
		if (brand) {
			newProduct.brand = brand;
		}
		if (model) {
			newProduct.model = model;
		}
		if (productType) {
			newProduct.productType = productType;
		}
		if (image) {
			newProduct.image = [...image];
		}
		if (specifications) {
			newProduct.specifications = { ...specifications };
		}
		if (price) {
			newProduct.price = price;
		}
		if (discount) {
			newProduct.discount = discount;
		}
		if (quantity) {
			newProduct.quantity = quantity;
		}
		if (status) {
			newProduct.status = status;
		}
		if (shortDescription) {
			newProduct.shortDescription = shortDescription;
		}
		if (mainDescription) {
			newProduct.mainDescription = mainDescription;
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
