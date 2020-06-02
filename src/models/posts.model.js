const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  likes: Number,
  comments: Array,
  content: String,
  image: String
})

const Posts = mongoose.model('Posts', postSchema, 'posts');
module.exports = Posts