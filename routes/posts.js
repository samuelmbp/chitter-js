const moment = require('moment');
const express = require('express');
const router = express.Router();

const { Posts } = require('../models/posts');

router.get('/', async (req, res) => {
	const posts = await Posts.find();
	res.send(posts);
});

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

module.exports = router;
