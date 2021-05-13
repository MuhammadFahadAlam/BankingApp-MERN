const Joi = require('joi');
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
	},
	comment: {
		type: String,
		default: 'Transaction',
		minlength: 5,
		maxlength: 50,
	},
	amount: {
		type: Number,
		required: true,
		min: 10,
		max: 1000,
	},
	time: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Customer', transactionSchema);

function validateTransaction(transaction) {
	const schema = Joi.object({
		name: Joi.string().min(5).max(50).required(),
		comment: Joi.string().min(5).max(50),
		amount: Joi.number().min(10).max(1000).required(),
	});

	return schema.validate(transaction);
}

exports.Transaction = Transaction;
exports.validateTransaction = validateTransaction;
exports.transactionSchema = transactionSchema;
