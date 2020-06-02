const express = require("express");
const router = express.Router();
let loginController = require("../controllers/login.controller");

router.post("/", loginController.index);

module.exports = router;
