/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const {ObjectId} = Schema.Types.ObjectId;


const UserSchema = new mongoose.Schema({
	isAdmin:{
	type:Boolean,
	require:true	
	},
	name: {
		type: String,
		required: true,
		unique:true,
		minlength:6
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: false,
		minlength:9,
		unique:true
	},
	shoppingBasket: 
	[{good:{type:ObjectId,ref:"Good",required:true},quantity:{type:Number,required:true,min:1}}]
	,
	orders: 
		[{type:ObjectId,ref:"Order"}]
	,
	feedback: 
	[{type:ObjectId,ref:"Feedback"}]
	,
	wishList:
		[{type:ObjectId,ref:"Good",required:true}]
		,
	registrationDate: Date.now(),
	
});

module.exports = mongoose.model('User', UserSchema);