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
			image: [
				{
					type: String,
					required: true,
				},
			],
			price: {
				type: String,
				required: true,
			},
			brand: {
				type: String,
				required: true,
			},
			model: {
				type: String,
				required: true,
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
		houseNumber: {
			type: String,
			required: true,
		},
		apartment: {
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
