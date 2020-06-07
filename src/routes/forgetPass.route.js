const express = require("express");
const router = express.Router();
let forgetPass = require("../controllers/forgetPass.controller");

router.post("/", forgetPass.index);

router.get("/", forgetPass.hi);

module.exports = router;
