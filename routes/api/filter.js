const express = require('express');

const router = express.Router();
const Product = require('../../models/Product');

// Route    POST api/filter
// Desc     get array all filtered products

router.post('/', async (req, res) => {
	const { brands, size, price } = req.body;
	if (!brands.length && !price.length && !size.length) {
		return res.json([]);
	}

	try {
		const queryObject = {};
		if (brands.length) {
			queryObject.brand = brands.map(item => item.toUpperCase());
		}
		if (size.length) {
			queryObject[`specifications.size`] = { $in: size };
		}
		if (price.length && Object.is(price.length, 2)) {
			price.sort((a, b) => a - b);
			queryObject.price = { $gt: price[0], $lt: price[1] };
		}

		const products = await Product.find(queryObject);
		res.json(products);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
