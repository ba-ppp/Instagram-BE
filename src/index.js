const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URL);

let loginRoute = require("./routes/login.route");

app.listen(port, () => {
  console.log("App listening on port", port);
});

app.use("/login", loginRoute);
