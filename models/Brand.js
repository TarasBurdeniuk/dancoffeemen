const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	src: {
		type: String,
		require: true,
	},
	brandLink: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model('brand', BrandSchema);
