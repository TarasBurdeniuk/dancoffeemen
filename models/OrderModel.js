/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const {ObjectId} = Schema.Types.ObjectId;


const OrderSchema = new mongoose.Schema({
	goods: [{
		good:{type: ObjectId,ref:"Good",required: true},

		goodVariable:{type:String,required:true},

		amountOfGood:{type:Number,required:true,min:1}
	}],

	totalPrice:
		{type:Number,required:true,min:1},
	
	client:
		{type:ObjectId,required:true,ref:"User"},

	shiping:
		{type:String,required:true,minlength:6},
	
	deliverAdress:{

		city:{type: String,required:true},
	
		street:{type: String,required:true},
	
		bilding:{type: String,required:true},
	
		apartments:{type: String,required:false},
	
		contactphone:{type: String,required:true},
		},
	date:Date.now(),
	
	orderStatus:{
		default:{type:String,require:true},
	}
});

module.exports = mongoose.model("Order", OrderSchema);

