const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const ConnectDb = require("./db/connect.js");
const routes = require("./routes/index.js");

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1", routes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// database
ConnectDb();

// server
app.listen(4000, () => {
  console.log("app is running on http://localhost:4000");
});
