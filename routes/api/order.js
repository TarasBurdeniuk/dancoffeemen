const express = require('express');
const nodemailer = require('nodemailer');
const config = require('config');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Order = require('../../models/Order');
const Product = require('../../models/Product');
const checkAuth = require('../../middleware/checkAuth');
const auth = require('../../middleware/auth');

// Route    POST api/order
// Desc     create order

router.post(
	'/',
	[
		checkAuth,
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
			check('deliveryAddress.houseNumber', 'House Number is required')
				.not()
				.isEmpty(),
			check('deliveryAddress.contactPhone', 'Contact Phone is required')
				.not()
				.isEmpty(),
			check('orderStatus', 'Order status is required')
				.not()
				.isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// eslint-disable-next-line prefer-const
		let { products, totalPrice, shipping, client, deliveryAddress, orderStatus } = req.body;

		const allIdProducts = products.map(item => item._id);

		try {
			const orderProducts = await Product.find({ _id: allIdProducts });
			let price = 0;
			orderProducts.forEach(product => {
				products.forEach(item => {
					if (product._id.toString() === item._id.toString()) {
						if (product.quantity < item.addQuantity) {
							return res
								.status(400)
								.json({ msg: 'Amount is less that from order amount' });
						}
						const prodSum = product.price * item.addQuantity;
						price = Math.round(price * 1000 + prodSum * 1000) / 1000;
					}
				});
			});

			if (price !== totalPrice) {
				return res.status(400).json({ msg: 'Price is invalid' });
			}

			if (req.user) {
				client = req.user.id;
			}

			orderProducts.forEach(async (item, i) => {
				let status = true;
				if (item.quantity - products[i].addQuantity === 0) {
					status = false;
				}
				await Product.findOneAndUpdate(
					{ _id: item._id },
					{
						quantity: item.quantity - products[i].addQuantity,
						status,
					},
					{ new: true },
				);
			});

			const { name, city, houseNumber, street } = deliveryAddress;

			const numberOrder = await Order.estimatedDocumentCount();

			// Send mail
			const transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				secure: true,
				port: 465,
				auth: {
					user: 'zinovijoprisko@gmail.com',
					pass: config.get('gmailPass'),
				},
				tls: {
					rejectUnauthorized: false,
				},
			});
			const orderProductsText = products
				.map(item => {
					// eslint-disable-next-line max-len
					return `<li>${item.brand} ${item.model} ${item.specifications.size}: ${
						item.addQuantity
					} item(s) - <b>$${(item.price * 1000 * item.addQuantity) / 1000}</b></li>`;
				})
				.join('');
			const body = `<h1>Dear, ${name}, your order number is #${numberOrder + 1}</h1>
						<h3>List of order:</h3>
						<ul>
						${orderProductsText}
						</ul>
						<h2>Delivery address:</h2>
						<p>${city}, ${street} str., ${houseNumber}</p>
						<p>Total price: <b>$${totalPrice.toString()}</b></p>`;

			await transporter.sendMail(
				{
					from: '"CoffeeMen" <dancoffeemen.herokuapp.com>', // sender address
					to: `${deliveryAddress.email}`,
					subject: `Order from CoffeeMen`,
					html: body,
				},
				(err, info) => {
					if (err) {
						console.error(err);
					} else {
						console.log(`Email send: ${info.response}`);
					}
				},
			);
			await transporter.sendMail(
				{
					from: `"Order CoffeeMen" <dancoffeemen.herokuapp.com>`,
					to: 'dancoffeemen@gmail.com',
					subject: `Order #${numberOrder + 1}`,
					html: body,
				},
				(err, info) => {
					if (err) {
						console.error(err);
					} else {
						console.log(`Email send: ${info.response}`);
					}
				},
			);

			const newOrder = new Order({
				products,
				totalPrice,
				shipping,
				client,
				deliveryAddress,
				orderStatus,
				orderNumber: numberOrder + 1,
			});

			const order = await newOrder.save();
			res.json(order);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	},
);

// Route   DELETE api/order
// Desc    delete order

router.delete('/:id', async (req, res) => {
	try {
		const order = await Order.findById(req.params.id);

		if (!order) {
			return res.status(404).json({ msg: 'Order not found' });
		}

		await order.remove();
		res.json(order);
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Order not found' });
		}
		res.status(500).send('Server error');
	}
});

// Route   GET api/order
// Desc    get all orders by users

router.get('/', auth, async (req, res) => {
	try {
		const orders = await Order.find({ client: req.user.id });

		res.json(orders);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
