const express = require("express");
const router = express.Router();
const {
  uploadImage,
  saveImagesToDatabase,
  getAllRecipeImages,
} = require("../controllers/image.controller");

router.post("/upload_image", uploadImage, saveImagesToDatabase);

router.post("/images", getAllRecipeImages);

module.exports = router;
