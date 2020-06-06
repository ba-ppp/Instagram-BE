const Users = require("../models/users.model");

module.exports.index = (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
    // avt: req.body.avt
  };
  Users.create(user);
};
