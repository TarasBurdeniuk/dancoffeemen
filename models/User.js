const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
	isAdmin: {
		type: Boolean,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
		minlength: 10,
		unique: true,
	},
	shoppingCard: [
		{
			product: {
				type: Schema.Types.ObjectId,
				ref: 'Product',
				required: false,
			},
			quantity: {
				type: Number,
				required: true,
				min: 1,
			},
		},
	],
	orders: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Order',
		},
	],
	review: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Review',
		},
	],
	wishList: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Product',
		},
	],
	registrationDate: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('user', UserSchema);
