const mongoose = require('mongoose');

const posts = mongoose.Schema({
	message: {
		type: String,
		required: true,
		minLength: 4,
		maxLength: 200,
	},
	created_at: {
		type: String,
	},
});

const Posts = mongoose.model('Posts', posts);

exports.Posts = Posts;
