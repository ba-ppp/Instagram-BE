const Users = require("../models/users.model");

module.exports.index = async (req, res) => {
  let user = await Users.find();
};
