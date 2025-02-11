const User = require("../../model/ussermodel.js");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
async function loginup(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user does not exist" });
    }
    const ispassword = await bcrypt.compare(password, user.password);
    if (!ispassword) {
      return res.status(403).json({ message: "password not matched" });
    }

    return res.status(200).json({ message: "login success " });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { loginup };
