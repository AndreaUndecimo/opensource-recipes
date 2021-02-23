const { cloudinary } = require("../utils/cloudinary");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function uploadImage(req, res, next) {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "bfznn6yw",
    });
    const { public_id } = uploadResponse;
    res.locals.public_id = public_id;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
}

async function saveImagesToDatabase(req, res) {
  try {
    const { public_id } = res.locals;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { uploadImage, saveImagesToDatabase };
