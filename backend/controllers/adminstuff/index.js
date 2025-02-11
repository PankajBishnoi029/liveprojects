const { DeleteQr } = require("./delete.js");
const { UploadQr } = require("./upload.js");
const { GetAllQrs } = require("./getQr.js");
const { uploadimage, getImage } = require("./cloudinaryimage.js");

module.exports = { UploadQr, DeleteQr, GetAllQrs, uploadimage, getImage };
