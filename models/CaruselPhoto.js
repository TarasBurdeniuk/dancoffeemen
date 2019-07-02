const mongoose = require('mongoose');

// const { Schema } = mongoose;

const CaruselPhotoSchema = new mongoose.Schema({
	image: [
		{
			type: String,
			required: true,
		},
	],
});

module.exports = mongoose.model('caruselPhoto', CaruselPhotoSchema);
