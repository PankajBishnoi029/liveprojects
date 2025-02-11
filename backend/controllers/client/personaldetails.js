const Personaldetails = require("../../model/personaldetails.js");

async function PersonalDetails(req, res) {
  try {
    const { name, mobile, email, district, house, area, state, pincode } =
      req.body;

    // Check if any required field is missing
    if (
      !name ||
      !mobile ||
      !email ||
      !district ||
      !house ||
      !area ||
      !state ||
      !pincode
    ) {
      return res.status(403).json({ message: "Provide all fields" });
    }

    const newPersonalDetails = new Personaldetails({
      name,
      mobile,
      email,
      district,
      house,
      area,
      state,
      pincode,
    });

    await newPersonalDetails.save();
    res.json(newPersonalDetails);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// GET route to fetch all personal details
async function getPersonalDetails(req, res) {
  try {
    const details = await Personaldetails.find();
    res.json(details);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { PersonalDetails, getPersonalDetails };
