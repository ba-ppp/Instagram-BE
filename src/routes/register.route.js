const express = require("express");
const router = express.Router();
let registerController = require("../controllers/register.controller");

router.post("/", registerController.index);

module.exports = router;
