const express = require("express");
const router = express.Router();
const {
  uploadImage,
  saveImagesToDatabase,
} = require("../controllers/image.controller");

router.post("/upload_image", uploadImage, saveImagesToDatabase);

router.get("/images", async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = router;
