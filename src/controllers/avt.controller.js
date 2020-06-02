const Users = require("../models/users.model");

module.exports.index = async (req, res) => {
  const users = await Users.find();
};
