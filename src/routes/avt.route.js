const express = require("express");
const router = express.Router();
const avtController = require("../controllers/login.controller");

router.get("/", avtController.index);

module.exports = router;
