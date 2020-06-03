require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const port = 3000;

mongoose.connect(process.env.MONGO_URL);

app.use(cookieParser(process.env.SECRET_COOKIE));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const loginRoute = require("./routes/login.route");
const avtRoute = require("./routes/avt.route");
const timelineRoute = require("./routes/timeline.route");

app.listen(port, () => {
  console.log("App listening on port", port);
});

app.use("/login", loginRoute);
