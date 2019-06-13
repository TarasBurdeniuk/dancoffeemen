const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
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
	},
	shoppingBasket: {
		type: Array, // todo
	},
	orders: {
		type: Array, // todo
	},
	comments: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users',
			},
			text: {
				type: String,
				required: true,
			},
			name: {
				type: String,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	wishList: {
		type: Array, // todo
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
