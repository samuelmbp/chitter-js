const mongoose = require('mongoose');

const posts = mongoose.Schema({
	message: {
		type: String,
		required: true,
		minLength: 4,
		maxLength: 255,
	},
	createdAt: {
		type: String,
	},
});

const Posts = mongoose.model('Posts', posts);

exports.Posts = Posts;
