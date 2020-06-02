const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

mongoose.connect(process.env.MONGO_URL);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const loginRoute = require("./routes/login.route");
const avtRoute = require("./routes/avt.route");
const timelineRoute = require("./routes/timeline.route");

app.listen(port, () => {
  console.log("App listening on port", port);
});

app.use("/login", loginRoute);
