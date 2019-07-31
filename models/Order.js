const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new mongoose.Schema({
	products: [
		{
			_id: {
				type: Schema.Types.ObjectId,
				ref: 'Product',
				required: true,
			},
			addQuantity: {
				type: Number,
				required: true,
				min: 1,
			},
		},
	],
	totalPrice: {
		type: Number,
		required: true,
	},
	client: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	shipping: {
		type: String,
		required: true,
		minlength: 6,
	},
	deliveryAddress: {
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		country: {
			type: String,
		},
		state: {
			type: String,
		},
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
		},
		contactPhone: {
			type: String,
			required: true,
		},
		index: {
			type: String,
		},
	},
	date: {
		type: Date,
		default: Date.now,
	},
	orderStatus: {
		type: String,
		require: true,
	},
	orderNumber: {
		type: Number,
	},
});

module.exports = mongoose.model('order', OrderSchema);
