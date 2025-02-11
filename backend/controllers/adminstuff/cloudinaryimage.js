const cloudinary = require("cloudinary");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const dotnev = require("dotenv");
dotnev.config();

cloudinary.config({
  api_key: process.env.API_key,
  api_secret: process.env.API_secret,
  cloud_name: process.env.Cloud_name,
});

async function uploadimage(req, res) {
  try {
    const image = req.file;
    const imagePath = image.path;
    const uploader = await cloudinary.uploader.upload(imagePath);
    if (!uploader) {
      return res.status(400).json({ message: "image path  not found" });
    }
    return res
      .status(200)
      .json({ message: "image is upload successfully", data: uploader });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "interrnal server error" });
  }
}

async function getImage(req, res) {
  try {
    const { public_id } = req.params;
    const image = await cloudinary.api.resource(public_id);
    if (!image) {
      return res.status(400).json({ message: "image not found" });
    }
    return res
      .status(200)
      .json({ message: "image is fetched successfully", data: image });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { uploadimage, getImage };
