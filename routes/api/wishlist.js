const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Wishlist = require('../../models/Wishlist');
const auth = require('../../middleware/auth');

// Route    POST api/wishlist
// Desc     create wishlist by user
// Private

router.post(
	'/',
	[auth, [check('products', 'Products is required').isArray()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const newWishlist = {
			products: req.body.products,
			user: req.user.id,
		};

		try {
			const wishlist = await Wishlist(newWishlist);

			wishlist.save();
			res.json(wishlist);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	},
);

// Route    GET api/wishlist
// Desc     get all wishlists by user
// Private

router.get('/', auth, async (req, res) => {
	try {
		const wishlists = await Wishlist.find({ user: req.user.id });
		if (!wishlists.length) {
			return res.status(400).json({ msg: 'Do not wishlist' });
		}

		res.json(wishlists);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// Route   DELETE api/wishlist/:id
// Desc    delete wishlist by id
// Private

router.delete('/:id', auth, async (req, res) => {
	try {
		const wishlist = await Wishlist.findById(req.params.id);

		if (!wishlist) {
			return res.status(404).json({ msg: 'Wishlist not found' });
		}

		// Check user
		if (wishlist.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'User not authorized' });
		}

		await wishlist.remove();
		res.json({ msg: 'Wishlist removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
