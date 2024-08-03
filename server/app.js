//! dotenv initialization
require("dotenv").config();

//!express initalization
const express = require("express");

//!variable holding our express call
const app = express();

//! variable for importing json
app.use(express.json());

// userController variable
const userController = require("./controllers/userController");
// messageController variable
const messageController = require("./controllers/messageController");

// roomController variable
const roomController = require("./controllers/roomController");

//userController
app.use("/api/users", userController);

//roomController
app.use("/api/rooms", roomController);

//messageController
app.use("/api", messageController);

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

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

//LocalHost Browser connection
app.listen(PORT, () => {
  console.log("*".repeat(30));
  console.log(`Port ***${PORT}*** is up and running!`);
});
