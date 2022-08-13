const { Posts } = require('../models/posts');

const moment = require('moment');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
	const createdAt = moment().format('L');
	const message = req.body.message.length;
	const minCharactersLength = 4;

	if (message < minCharactersLength)
		return res
			.status(400)
			.send('The message cannot be empty or less than four characters long.');

	const createNewPost = new Posts({
		message: req.body.message,
		createdAt: createdAt,
	});

	await createNewPost.save();
	res.send(createNewPost);
});

// router.get('/', async (req, res) => {
// 	res.status(200).json('Hello, chitter. Get request.');
// });

module.exports = router;
