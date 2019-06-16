const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		minlength: 6,
	},
	productType: {
		type: String,
		required: true,
	},
	productVariables: [
		{
			type: String,
		},
	],
	image: {
		previewImage: {
			type: String,
			required: true,
		},
		defaultCardImage: [
			{
				type: String,
			},
		],
		variablesImage: {
			type: Object,
		},
	},
	specifications: {
		previewSpecifications: {
			type: Object,
			required: true,
		},
		additionalSpecifications: {
			type: Object,
		},
	},
	price: {
		basePrice: {
			type: Number,
			required: true,
		},
		discount: {
			type: Number,
			max: 0.99,
		},
	},
	quantity: {
		type: Number,
		require: true,
		default: 1,
		variablesQuantity: {
			type: Object,
		},
	},
	status: {
		type: Boolean,
		default: true,
		variablesStatus: {
			type: Object,
		},
	},
	review: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Review',
		},
	],
});

module.exports = mongoose.model('products', ProductSchema);
