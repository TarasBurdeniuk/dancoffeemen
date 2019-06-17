const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Order = require('../../models/Order');
const Product = require('../../models/Product');

// Route    POST api/order
// Desc     create order

router.post(
	'/',
	[
		check('products', 'Product is required')
			.not()
			.isEmpty(),
		check('totalPrice', 'Total price is required')
			.not()
			.isEmpty(),
		check('shipping', 'Shipping is required')
			.not()
			.isEmpty(),
		check('deliveryAddress.city', 'City is required')
			.not()
			.isEmpty(),
		check('deliveryAddress.street', 'Street is required')
			.not()
			.isEmpty(),
		check('deliveryAddress.homeNumber', 'Home Number is required')
			.not()
			.isEmpty(),
		check('deliveryAddress.contactPhone', 'Contact Phone is required').isLength({ min: 10 }),
		check('orderStatus', 'Order status is required')
			.not()
			.isEmpty(),
	],
	// eslint-disable-next-line consistent-return
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { products, totalPrice, client, shipping, deliveryAddress, orderStatus } = req.body;

		const allIdProducts = products.map(item => item._id);

		const allAmountByProduct = products.map(id => id.amountOfProduct);

		try {
			const orderProducts = await Product.find({ _id: allIdProducts });

			// eslint-disable-next-line consistent-return
			orderProducts.forEach((item, i) => {
				if (item.quantity.default < allAmountByProduct[i]) {
					return res.status(400).json({ msg: 'Amount is less that from order amount' });
				}
			});

			const price = orderProducts
				.map(item => item.price.basePrice)
				.reduce((sum, current, index) => sum + current * allAmountByProduct[index]);

			console.log(price);

			if (price.toString() !== totalPrice) {
				return res.status(400).json({ msg: 'Price is invalid' });
			}

			const newOrder = new Order({
				products,
				totalPrice,
				client,
				shipping,
				deliveryAddress,
				orderStatus,
			});

			const order = await newOrder.save();
			res.json(order);

			orderProducts.forEach(async (item, i) => {
				let status = true;
				if (item.quantity.default - allAmountByProduct[i] === 0) {
					status = false;
				}
				await Product.findOneAndUpdate(
					{ _id: item._id },
					{
						quantity: {
							default: item.quantity.default - allAmountByProduct[i],
						},
						status: {
							default: status,
						},
					},
					{ new: true },
				);
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	},
);

module.exports = router;
