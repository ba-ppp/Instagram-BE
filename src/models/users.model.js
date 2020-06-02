const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  postId: Array,
  avt: String
});

const Users = mongoose.model("Users", userSchema, "users");
Users.find().then(function(hi) {
  console.log(hi);
});
module.exports = Users;
