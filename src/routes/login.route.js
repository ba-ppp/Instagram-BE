const express = require("express");
const router = express.Router();
let loginController = require("../controllers/login.controller");

router.get("/", loginController.index);

module.exports = router;
