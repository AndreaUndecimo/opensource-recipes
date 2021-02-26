const { cloudinary } = require("../utils/cloudinary");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

let publicIdsImages = "";

async function uploadImage(req, res, next) {
  try {
    const { base64EncodedImage, recipe } = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(
      base64EncodedImage,
      {
        upload_preset: "bfznn6yw",
      }
    );
    const { public_id } = uploadResponse;
    res.locals.info = { public_id, recipe };
    await next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
}

async function saveImagesToDatabase(_, res) {
  try {
    const { public_id, recipe } = await res.locals.info;
    publicIdsImages += `,${public_id}`;

    const newPics = await prisma.recipe.update({
      where: { id: recipe.id },
      data: {
        images: {
          create: {
            publicIds: publicIdsImages,
          },
        },
      },
    });

    publicIdsImages = "";
    res.status(200).send(newPics);
  } catch (error) {
    console.error(error);
  }
}

async function getAllRecipeImages(req, res) {
  try {
    const imageId = req.body.data;
    console.log("imageId", imageId);

    const { images } = await prisma.recipe.findUnique({
      where: { id: imageId },
      include: { images: true },
    });

    recipeImagesIds = images.map((image) => image.publicIds.substr(15));
    res.status(200).send(recipeImagesIds);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
}

module.exports = { uploadImage, saveImagesToDatabase, getAllRecipeImages };
