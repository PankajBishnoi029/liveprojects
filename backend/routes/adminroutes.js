const express = require("express");
const { loginup, createAccount } = require("../controllers/admin/index.js");
const adminRoutes = express.Router();

//

const {
  DeleteQr,
  UploadQr,
  GetAllQrs,
} = require("../controllers/adminstuff/index.js");

//
adminRoutes.post("/signup", createAccount);
adminRoutes.post("/loginup", loginup);
adminRoutes.delete("/DeleteQr", DeleteQr);
adminRoutes.post("/UploadQr", UploadQr);
adminRoutes.get("/GetAllQrs", GetAllQrs);

module.exports = adminRoutes;
