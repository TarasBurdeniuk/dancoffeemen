const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	brand: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		require: true,
	},
	productType: {
		type: String,
		required: true,
	},
	image: [
		{
			type: String,
			require: true,
		},
	],
	specifications: {
		type: Object,
		require: true,
	},
	price: {
		type: Number,
		require: true,
	},
	discount: {
		type: Number,
	},
	quantity: {
		type: Number,
		require: true,
	},
	status: {
		type: Boolean,
		require: true,
	},
	shortDescription: {
		type: String,
		require: true,
	},
	mainDescription: {
		type: String,
	},
	itemNo: {
		type: Number,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('products', ProductSchema);
