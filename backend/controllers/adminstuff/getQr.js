const Qr = require("../../model/qrmodel.js");

async function GetAllQrs() {
  try {
    const qrs = await Qr.find();
    console.log(qrs);
    return qrs;
  } catch (error) {
    console.error("Error fetching QR codes:", error);
    return [];
  }
}

module.exports = { GetAllQrs };
