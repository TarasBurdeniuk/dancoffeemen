const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Product = require('../../models/Product');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

// Route   GET api/products
// Desc    get all products

router.get('/', async (req, res) => {
	const perPage = 6;
	console.log(req.query);
	try {
		const products = await Product.find()
			.skip(+req.query.start * perPage)
			.limit(perPage);
		res.json(products);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// Route   GET api/products/:id
// Desc    get product by id

router.get('/:id', async (req, res) => {
	try {
		const product = await Product.findOne({ _id: req.params.id });
		res.json(product);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// Router   DELETE api/products/:id
// Desc     delete product by id

router.delete('/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);

		if (!product) {
			return res.status(404).json({ msg: 'Product not found' });
		}

		await product.remove();
		res.json(product);
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Product not found' });
		}
		res.status(500).send('Server Error');
	}
});

// Route    POST api/products/review/:id
// Desc     create review for product by user
// Access   private

router.post(
	'/review/:id',
	[
		auth,
		[
			check('regard', 'Regard is required')
				.not()
				.isEmpty()
				.isLength({ max: 10 }),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const user = await User.findById(req.user.id);
			const product = await Product.findById(req.params.id);
			const newReview = {
				description: req.body.description,
				regard: req.body.regard,
				author: req.user.id,
				name: user.name,
			};

			product.review.unshift(newReview);

			await product.save();
			res.json(product.review);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	},
);

module.exports = router;
