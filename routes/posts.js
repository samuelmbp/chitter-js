const express = require('express');
const moment = require('moment');
const { Posts } = require('../models/posts');
const router = express.Router();

router.post('/', async (req, res) => {
	const created_at = moment().format('L');

	const createNewPost = new Posts({
		message: req.body.message,
		created_at: created_at,
	});

	console.log(created_at);
	const post = await createNewPost.save();
	console.log(post);
	res.send(createNewPost);
});

module.exports = router;
