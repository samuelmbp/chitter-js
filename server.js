const mongoose = require('mongoose');
const express = require('express');
const app = express();

/** Connection MongoDB */
mongoose.connect('mongodb://127.0.0.1/chitter');

/** Routes */
const posts = require('./routes/posts');

/** Middleware */
app.use(express.json());
app.use('/', posts);


module.exports = app;