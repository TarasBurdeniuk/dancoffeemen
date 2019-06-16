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

module.exports = router;
