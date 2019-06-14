/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const {ObjectId} = Schema.Types.ObjectId;


const GoodSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique:true,
		minlength:6
	},
	goodType: {
		type: String,
		required: true
	},
	goodVariables: [{
		type: String,
	 }],

	 img : {
        
        previevImg:{
			type: String,
			required:true
		 },

        defaultCardimgs:[{
			type: String,
			required:false
		 }],
        variablesImg:{
			type:Object, required:false
        }
    },
	specifications:{
		previevSpecifications:{
		type:Object,required:true
		},
		additionalSpecifications:{
		type:Object	
		}
	},
	price: 
		{
		basePrice:{type:Number,required:true},
		discount:{type:Number,
		max:.99}
	}
	,
	quantity:{
		default:{type:Number,require:true},
		variablesQuantity:{type:Object}
	},
	status:{
		default:{type:String,require:true},
		variablesStatus:{type:Object}
	},
	feedback: 
	[{type:ObjectId,ref:"Feedback"}]
});

module.exports = mongoose.model('Good', GoodSchema);

