const express = require("express");
const adminRoutes = require("./adminroutes");
const clientRoutes = require("./clientroutes.js");
const routes = express.Router();
const imageRoutes = require("./imageroutes.js");

// end points
routes.use("/clientRoutes", clientRoutes);
routes.use("/adminRoutes", adminRoutes);
routes.use("/image", imageRoutes);

module.exports = routes;
