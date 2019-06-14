/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const {ObjectId} = Schema.Types.ObjectId;

const FeedbackSchema = new mongoose.Schema({

	description:
		{type:String,required:false,maxlength:2000},
	
	regard: {
		type: Number,
		required: true,
		min:1,
		max:10
	},
	author: 
		{type:ObjectId,ref:"User",required:true},
	good: 
		{type:ObjectId,ref:"Good",required:true}
	,
	date: Date.now(),
	
});

module.exports = mongoose.model('Feedback', FeedbackSchema);