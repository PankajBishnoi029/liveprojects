// controllers/OrderController.js
const Order = require("../../model/paymetdetails.js");
async function paydetails(req, res) {
  try {
    console.log("Received data:", req.body); // Log request data

    const { email, price } = req.body;
    console.log(email, price);
    if (!email) {
      return res.status(403).json({ message: "Provide email" });
    }

    if (!price) {
      return res.status(404).json({ message: "Provide price" });
    }

    const newOrder = new Order({ email, price: Number(price) }); // Ensure price is stored as a number
    await newOrder.save();
    res.json(newOrder);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// async function paydetails(req, res) {
//   try {
//     const { email, price } = req.body;

//     // Check if any required field is missing
//     if (!email) {
//       return res.status(403).json({ message: "Provide all email" });
//     }
//     // || !price || !paymentScreenshot
//     if (!price) {
//       return res.status(404).json({ message: "Provide all price" });
//     }

//     const newOrder = new Order({ email, price });
//     await newOrder.save();
//     res.json(newOrder);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }

// GET route to fetch all orders
async function getOrders(req, res) {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { paydetails, getOrders };
