const express = require("express");
const {
  PersonalDetails,
  getPersonalDetails,
  VehicleDetails,
  Getpersonal,
  paydetails,
  getOrders,
} = require("../controllers/client/index.js");
const clientRoutes = express.Router();

//
clientRoutes.post("/PersonalDetails", PersonalDetails);
clientRoutes.get("/Getpersonal", Getpersonal);
clientRoutes.post("/VehicleDetails", VehicleDetails);
clientRoutes.get("/getPersonalDetails", getPersonalDetails);
clientRoutes.post("/paydetails", paydetails);
clientRoutes.get("/getOrders", getOrders);

module.exports = clientRoutes;
