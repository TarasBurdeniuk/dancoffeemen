const express = require('express');

const router = express.Router();
const Product = require('../../models/Product');

// Route    GET api/brands
// Desc     get array all products brand

router.get('/', async (req, res) => {
	try {
		const setBrand = new Set();
		const prod = await Product.find();
		prod.forEach(item => setBrand.add(item.brand));

		const data = [...setBrand];
		res.json(data);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
