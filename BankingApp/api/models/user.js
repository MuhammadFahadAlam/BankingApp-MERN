const config = require('config');
const { transactionSchema } = require('./transaction');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
	},
	headline: {
		type: String,
		default: '',
		maxlength: 50,
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	profileImage: {
		type: String,
		default: './uploads/default.png',
	},
	transactions: [transactionSchema],
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{ _id: this._id, isAdmin: this.isAdmin },
		config.get('jwtPrivateKey')
	);
	return token;
};

const User = mongoose.model('User', userSchema);

function validateUser(user) {
	const schema = Joi.object({
		name: Joi.string().min(5).max(50).required(),
		headline: Joi.string().default(''),
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required(),
	});

	return schema.validate(user);
}

exports.userSchema = userSchema;
exports.User = User;
exports.validateUser = validateUser;
