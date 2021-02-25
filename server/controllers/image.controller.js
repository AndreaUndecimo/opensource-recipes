const { cloudinary } = require("../utils/cloudinary");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function uploadImage(req, res, next) {
  try {
    const { base64EncodedImage, title } = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(
      base64EncodedImage,
      {
        upload_preset: "bfznn6yw",
      }
    );
    const { public_id } = uploadResponse;
    res.locals.public_id = { public_id, title };
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
}

async function saveImagesToDatabase(_, res) {
  try {
    const { public_id, title } = res.locals;
    const newPic = await prisma.picture.create();

    await prisma.recipe.update({
      where: { title },
      data: { imageIds: imageIds + public_id },
    });
    console.log(newPic);
    res.status(200).send(newPic);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { uploadImage, saveImagesToDatabase };
