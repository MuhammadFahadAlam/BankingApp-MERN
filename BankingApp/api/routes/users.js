const auth = require('../middleware/auth');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const { User, validateUser } = require('../models/user');
const { Transaction, validateTransaction } = require('../models/transaction');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// setting filename and destination
const storage = multer.diskStorage({
	destination: 'uploads',
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname)
		);
	},
});

// Init Upload
const upload = multer({
	storage: storage,
	limits: { fileSize: 1000000 },
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	},
});

// Check File Type
function checkFileType(file, cb) {
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test(
		path.extname(file.originalname).toLowerCase()
	);
	// Check mime
	const mimetype = filetypes.test(file.mimetype);

	if (mimetype && extname) {
		return cb(null, true);
	} else {
		cb('Error: Images Only!');
	}
}

// MiddleWare for Single Image Upload
var file = upload.single('profileImage');

// Get User
router.get('/me', auth, async (req, res) => {
	const user = await User.findById(req.user._id);
	res.send(
		_.pick(user, [
			'_id',
			'name',
			'headline',
			'isAdmin',
			'email',
			'profileImage',
			'transactions',
		])
	);
});

// Get All Users
router.get('/all', auth, async (req, res) => {
	const user = await User.find({ _id: { $ne: req.user._id } }).select([
		'name',
		'headline',
		'profileImage',
	]);
	res.send(user);
});

// List Transactions
router.get('/transactions', auth, async (req, res) => {
	const user = await User.findById(req.user._id);
	res.send(user.transactions);
});

// Add Transaction
router.post('/transactions', auth, async (req, res) => {
	const { error } = validateTransaction(req.body);
	if (error) return res.status(400).send(error);

	const user = await User.findById(req.user._id);

	const transaction = new Transaction(
		_.pick(req.body, ['name', 'amount', 'comment'])
	);

	user.transactions = await [...user.transactions, transaction];
	await user.save();

	res.send(transaction);
});

// Register
router.post('/', file, async (req, res) => {
	const { error } = validateUser(req.body);
	console.log(req.file, 'req files');
	console.log(req.body, 'req body');
	if (error) return res.status(400).send(error.details);

	let user = await User.findOne({ email: req.body.email });

	if (user) return res.status(400).send('User already Registered');

	if (req.file) {
		user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			headline: req.body.headline,
			profileImage: req.file.path,
		});
	} else {
		user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			headline: req.body.headline,
		});
	}

	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);

	await user.save();

	const token = user.generateAuthToken();

	res.header('x-auth-token', token).send(
		_.pick(user, ['_id', 'name', 'email', 'headline', 'profileImage'])
	);
});

module.exports = router;
