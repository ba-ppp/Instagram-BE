const Posts = require("../models/posts.model");
const Users = require("../models/users.model");

module.exports.index = async (req, res) => {
  const users = await Users.find();
  const posts = await Posts.find();
};
