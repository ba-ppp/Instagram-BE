const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  postId: Array,
  avt: String
});

const Users = mongoose.model("Users", userSchema, "users");

module.exports = Users;
