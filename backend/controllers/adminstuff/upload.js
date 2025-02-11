const Qr = require("../../model/qrmodel.js");

async function UploadQr(req, res) {
  try {
    const { link, upiId } = req.body;

    // Create a new QR entry
    const save = new Qr({
      link,

      upiId,
    });

    await save.save();
    console.log(save);
    return res.status(201).json({ message: "QR added successfully", qr: save });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { UploadQr };
