const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new mongoose.Schema({
	products: [
		{
			product: {
				type: Schema.Types.ObjectId,
				ref: 'Product',
				required: true,
			},
			productVariable: {
				type: String,
				required: true,
			},
			amountOfProduct: {
				type: Number,
				required: true,
				min: 1,
			},
		},
	],
	totalPrice: {
		type: Number,
		required: true,
		min: 1,
	},
	client: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	shipping: {
		type: String,
		required: true,
		minlength: 6,
	},
	deliveryAddress: {
		city: {
			type: String,
			required: true,
		},
		street: {
			type: String,
			required: true,
		},
		homeNumber: {
			type: String,
			required: true,
		},
		apartments: {
			type: String,
			required: false,
		},
		contactPhone: {
			type: String,
			required: true,
		},
	},
	date: {
		type: Date,
		default: Date.now,
	},
	orderStatus: {
		default: {
			type: String,
			require: true,
		},
	},
});

module.exports = mongoose.model('order', OrderSchema);
