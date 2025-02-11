const User = require("../../model/ussermodel.js");

async function createAccount(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).json({ message: "email already exist" });
    }
    const saveUser = await new User({
      name,
      email,
      password,
    });
    await saveUser.save();
    console.log(saveUser);
    return res.status(200).json({ message: "account is created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { createAccount };
