const Vehicledetails = require("../../model/formstore.js");

async function VehicleDetails(req, res) {
  try {
    const { registration, ownerdetails, home, plate } = req.body;

    if (!registration || !ownerdetails || !home || !plate) {
      return res.status(403).json({ message: "Provide all fields" });
    }

    const vehicledetails = new Vehicledetails({
      registration,
      ownerdetails,
      home,
      plate,
    });

    await vehicledetails.save();
    res.json(vehicledetails);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// GET route to fetch all vehicle details
async function Getpersonal(req, res) {
  try {
    const details = await Vehicledetails.find();
    res.json(details);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { VehicleDetails, Getpersonal };
