/* eslint-disable no-undef */
const port = process.env.PORT || 3000;
const express = require('express');
const mongoose = require('mongoose');
const app = express();

/** Connection MongoDB */
mongoose.connect('mongodb://127.0.0.1/chitter');

app.get('/', (req, res) => {
	res.send('Hello chitters.');
});
/** Connection Server  */
app.listen(port, () =>
	console.log(`Server is running on http://localhost:${port}`)
);
