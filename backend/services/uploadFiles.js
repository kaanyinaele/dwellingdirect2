const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Set up multer storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,

  params: {
    folder: "real_estate/listings", // Folder name in Cloudinary
    resource_type: "auto", // Auto-detect type (image, video)
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
