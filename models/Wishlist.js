const mongoose = require('mongoose');

const { Schema } = mongoose;

const WishlistSchema = new mongoose.Schema({
	products: [
		{
			_id: {
				type: Schema.Types.ObjectId,
				ref: 'Product',
			},
		},
	],
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('wishlist', WishlistSchema);
