/* eslint-disable no-undef */
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

/** Routes */
const posts = require('./routes/posts');

/** Connection MongoDB */
mongoose.connect('mongodb://127.0.0.1/chitter');

/** Template Engines */
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

/** Middleware */
app.use(express.json());
app.use('/', posts);

module.exports = app;
