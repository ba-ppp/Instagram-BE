const express = require("express");
const router = express.Router();
let registerController = require("../controllers/register.controller");

router.post("/", registerController.index);


router.post("/check/username", registerController.checkU);

router.post("/check/email", registerController.checkE);


module.exports = router;
