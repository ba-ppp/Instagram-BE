const express = require("express");
const router = express.Router();
const timelineController = require("../controllers/login.controller");

router.get("/", timelineController.index);

module.exports = router;
