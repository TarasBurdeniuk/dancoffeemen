const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
	address: {
		type: String,
	},
	country: {
		type: String,
	},
	city: {
		type: String,
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
	workTime: {
		type: String,
	},
});

module.exports = mongoose.model('contact', ContactSchema);
