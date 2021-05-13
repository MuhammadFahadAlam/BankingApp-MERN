const config = require('config');
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const helmet = require('helmet');
const app = express();

const path = require('path');
if (!config.get('jwtPrivateKey')) {
	console.log('FATAL ERROR: jwtPrivateKey is not defined');
	process.exit(1);
}

mongoose
	.connect('mongodb://localhost/bankingApp', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log('Connected to MongoDB...'))
	.catch((err) => console.error('Could not connect to MongoDB...'));

app.use(helmet());
/**
 * http://localhost:3000/uploads/default.png
 */
app.use('/uploads', express.static(path.join(__dirname, './uploads')));
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
