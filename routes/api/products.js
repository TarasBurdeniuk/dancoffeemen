const express = require('express');

const router = express.Router();
const Product = require('../../models/Product');

// Route   GET api/products
// Desc    get all products

router.get('/', async (req, res) => {
	try {
		const products = await Product.find();
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

// eslint-disable-next-line consistent-return
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

module.exports = router;
