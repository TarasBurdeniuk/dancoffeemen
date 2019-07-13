const mongoose = require('mongoose');

const SizeSchema = new mongoose.Schema({
	size: {
		type: Array,
		require: true,
	},
});

module.exports = mongoose.model('size', SizeSchema);
