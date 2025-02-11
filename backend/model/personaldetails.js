const mongoose = require("mongoose");
const PersonaldetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
  },
  district: {
    type: String,
    require: true,
  },
  house: {
    type: String,
    require: true,
  },
  area: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  pincode: {
    type: String,
    require: true,
  },
});
const Personaldetails = mongoose.model(
  "Personaldetails",
  PersonaldetailsSchema
);

module.exports = Personaldetails;
