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

module.exports.checkU = async (req, res) => {
  const user = {
    username: req.body.username
  };
  let username = await Users.findOne({ username: user.username });

  if (username) {
    res.json("Username");
  }
};

module.exports.checkE = async (req, res) => {
  const user = {
    email: req.body.email
  };
  let email = await Users.findOne({ email: user.email });

  if (email) {
    res.json("Email");
  }
};

