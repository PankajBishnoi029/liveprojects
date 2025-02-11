const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const VehicledetailsSchema = new mongoose.Schema({
  regestration: {
    type: String,
    require: true,
  },
  ownerdetails: {
    type: String,
    require: true,
    unique: true,
  },
  home: {
    type: String,
    require: true,
  },
  plate: {
    type: String,
    require: true,
  },
});
// pre defined hooks
const Vehicledetails = mongoose.model("Vehicledetails", VehicledetailsSchema);

module.exports = Vehicledetails;
