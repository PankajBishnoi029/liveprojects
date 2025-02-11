const express = require("express");
const {
  uploadimage,
  getImage,
} = require("../controllers/adminstuff/cloudinaryimage.js");
const uploads = require("../middleware/multerMiddleware.js");
const imageRoutes = express.Router();

//
imageRoutes.post("/image", uploads, uploadimage);
imageRoutes.get("/images/:public_id", getImage);

module.exports = imageRoutes;
