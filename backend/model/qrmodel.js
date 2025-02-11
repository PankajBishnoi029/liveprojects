const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // Import UUID for unique ID generation

const QrSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4, // Auto-generate a unique ID
    unique: true,
  },
  link: {
    type: String,
    required: true,
  },

  upiId: {
    type: String,
    required: true,
  },
});

// Create Model
const Qr = mongoose.model("QR", QrSchema);
module.exports = Qr;
