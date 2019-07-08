const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Product = require('../../models/Product');
const Contact = require('../../models/Contact');

// Route   POST api/admin/products
// Desc    add or update products from admin panel

router.post(
	'/products',
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
			let product = await Product.findById(id);

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

// Route   POST api/admin/contacts
// Desc    add or update contacts from admin panel

router.post('/contacts', async (req, res) => {
	const { address, country, city, email, phone, workTime, id } = req.body;
	const contacts = {};

	if (address) {
		contacts.address = address;
	}
	if (country) {
		contacts.country = country;
	}
	if (city) {
		contacts.city = city;
	}
	if (email) {
		contacts.email = email;
	}
	if (phone) {
		contacts.phone = phone;
	}
	if (workTime) {
		contacts.workTime = workTime;
	}
	try {
		let contact = await Contact.findById(id);

		// Checking if contacts exist
		if (contact) {
			// Update contacts by id
			contact = await Contact.findOneAndUpdate(
				{ _id: id },
				{ $set: contacts },
				{ new: true },
			);
			return res.json(contact);
		}

		// Create new contact
		contact = new Contact(contacts);

		await contact.save();
		res.json(contact);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// Route   GET api/admin/contacts
// Desc    get contacts

router.get('/contacts', async (req, res) => {
	try {
		const contacts = await Contact.find();
		res.json(contacts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
