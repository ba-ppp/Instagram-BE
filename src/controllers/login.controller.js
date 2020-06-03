const Users = require("../models/users.model");
var jwt = require("jsonwebtoken");
module.exports.index = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const tokenList = {};
  console.log(username, password);
  let user = await Users.findOne({ username: username }); //search by username
  if (!user) {
    //search by email
    user = await Users.findOne({ email: username });
  }
  if (!user) {
    return;
  }
  if (user.password !== password) {
    return;
  }
  console.log(user);
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
  tokenList[refreshToken] = { name: "BaP", data: "amsnf" };
  //response users their token
  const response = {
    token,
    refreshToken
  };
  res.json(response);
};
