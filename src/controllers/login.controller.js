
const Users = require("../models/users.model");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
module.exports.index = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let errors = [];

  let user = await Users.findOne({ username: username }); //search by username
  if (!user) {
    //search by email
    user = await Users.findOne({ email: username });
  }

  if (user) {
    let result = bcrypt.compareSync(password, user.password);
    if (result === false) {
      errors.push("Wrong password");
    }
  } else {
    errors.push("Username doesn't exist");
  }

  // Login success, create token
  const token = jwt.sign(
    { name: "BaP", data: "amsnf" },
    process.env.SECRET_TOKEN,
    {
      expiresIn: process.env.TOKEN_LIFE
    }
  );
  //Create refreshtoken when token expired
  const refreshToken = jwt.sign(
    { name: "BaP", data: "amsnf" },
    process.env.REFESH_TOKEN,
    {
      expiresIn: process.env.REFESH_LIFE
    }
  );

  //response users their token
  const response = {
    token,
    refreshToken,
    errors
  };
  console.log(response.errors);
  res.json(response);
};

const Users = require("../models/users.model");
var jwt = require("jsonwebtoken");
module.exports.index = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let errors = [];


  let user = await Users.findOne({ username: username }); //search by username
  if (!user) {
    //search by email
    user = await Users.findOne({ email: username });
  }
  if (user) {
    if (user.password !== password) {
      errors.push("Wrong password");
    }
  } else {
    errors.push("Username doesn't exist");
  }

  // Login success, create token
  const token = jwt.sign(
    { name: "BaP", data: "amsnf" },
    process.env.SECRET_TOKEN,
    {
      expiresIn: process.env.TOKEN_LIFE
    }
  );
  //Create refreshtoken when token expired
  const refreshToken = jwt.sign(
    { name: "BaP", data: "amsnf" },
    process.env.REFESH_TOKEN,
    {
      expiresIn: process.env.REFESH_LIFE
    }
  );

  //response users their token
  const response = {
    token,
    refreshToken,
    errors
  };
  res.json(response);
};

