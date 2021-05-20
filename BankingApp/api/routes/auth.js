const _ = require('lodash');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

function validate(req) {
	const schema = Joi.object({
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required(),
	});

	return schema.validate(req);
}

// Login

router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	console.log(req.body, error);

	let user = await User.findOne({ email: req.body.email });

	if (!user) return res.status(400).send('Invalid email and password');

	const validPassword = await bcrypt.compare(
		req.body.password,
		user.password
	);

	if (!validPassword)
		return res.status(400).send('Invalid email and password');

	const token = user.generateAuthToken();

	res.send(token);
});

module.exports = router;
