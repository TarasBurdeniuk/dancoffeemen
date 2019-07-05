const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReviewSchema = new mongoose.Schema({
	description: {
		type: String,
	},
	regard: {
		type: Number,
		required: true,
		min: 1,
		max: 5,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	product: {
		type: Schema.Types.ObjectId,
		ref: 'Product',
	},
	name: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('review', ReviewSchema);
