//?env initialization
require("dotenv").config();

//!express initalization
const express = require("express");

//!variable holding our express call
const app = express();

//! variable for importing json
app.use(express.json());

//userController variable
const userController = require("../server/controllers/userController");

//userController
//app.use("/user", userController);

//!mongoose initialization
const mongoose = require("mongoose");

//!connection to url variable
const MongoDB = process.env.MONGO_URL + process.env.MONGO_NAME;

//!store to connection status
mongoose.connect(MongoDB);

//!store to connection status
const db = mongoose.connection;

//!.env port local host Variable
const PORT = process.env.OURPORT || 5000;

// Mongoose Connection callback
db.once("open", () => {
  console.log("*".repeat(30));
  console.log(`Your are connected to \n ${MongoDB}`);
  console.log("*".repeat(30));
});

//LocalHost Browser connection
app.listen(PORT, () => {
  console.log("*".repeat(30));
  console.log(`Port ***${PORT}*** is up and running!`);
});
