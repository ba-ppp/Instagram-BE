const express = require("express");
const router = express.Router();
let loginController = require("../controllers/login.controller");

router.post("/", loginController.index);

router.get("/", (req, res) => {
  res.send("hi");
});

module.exports = router;
