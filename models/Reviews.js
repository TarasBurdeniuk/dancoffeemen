const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReviewsSchema = new mongoose.Schema({
	description: {
		type: String,
		required: false,
		maxlength: 2000,
	},
	regard: {
		type: Number,
		required: true,
		min: 1,
		max: 10,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	product: {
		type: Schema.Types.ObjectId,
		ref: 'Product',
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('reviews', ReviewsSchema);
