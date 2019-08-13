const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
	isAdmin: {
		type: Boolean,
	},
	name: {
		type: String,
		required: true,
		minlength: 3,
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
	country: {
		type: String,
	},
	city: {
		type: String,
	},
	houseNumber: {
		type: String,
	},
	street: {
		type: String,
	},
	apartment: {
		type: String,
	},
	state: {
		type: String,
	},
	index: {
		type: String,
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
	registrationDate: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('user', UserSchema);
