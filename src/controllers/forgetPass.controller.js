const Users = require("../models/users.model");
const sgMail = require("@sendgrid/mail");
const shortid = require("shortid");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.index = async (req, res) => {
  let email = req.body.email;
  let check = await Users.findOne({ email: email });
  let input = 1; // inputed is email
  console.log(check);
  if (!check) {
    // email doesn't existed
    check = await Users.findOne({ username: email }); // input username
    input = 0; // inputed is username;
    if (!check) {
      res.json("No");
      return;
    }
  }

  let newId = shortid.generate();
  let newPass;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(newId, salt, function(err, hash) {
      newPass = hash;
    });
  });
  if (input === 1) {
    Users.findOneAndUpdate({ email: email }, { password: newPass });
  } else {
    Users.findOneAndUpdate({ username: email }, { password: newPass });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: req.body.email,
    from: "phuongB1908407@student.ctu.edu.vn",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.j",
    html: `Your new password is <strong>${newId}</strong>`
  };
  sgMail.send(msg).then(
    () => {},
    error => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
  res.json("Done");
};

module.exports.hi = (req, res) => {
  res.send("hi");
};
