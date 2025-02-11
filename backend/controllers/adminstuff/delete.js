const Qr = require("../../model/qrmodel.js");

async function DeleteQr(req, res) {
  try {
    const { id } = req.body;

    const deletedQr = await Qr.findOneAndDelete({ id });

    if (!deletedQr) {
      return res.status(404).json({ message: "QR not found" });
    }

    return res.status(200).json({ message: "QR deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { DeleteQr };
