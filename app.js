/* eslint-disable no-undef */
const port = process.env.PORT || 3000;
const express = require('express');
const mongoose = require('mongoose');
const app = express();

/** Routes */
const posts = require('./routes/posts');

/** Middleware */
app.use(express.json());
app.use('/', posts);

/** Connection MongoDB */
mongoose.connect('mongodb://127.0.0.1/chitter');

/** Connection Server  */
app.listen(port, () =>
	console.log(`Server is running on http://localhost:${port}`)
);
