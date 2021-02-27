const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createRecipe(req, res) {
  const { title, ingredients, background, name, email, steps } = req.body;

  try {
    const newRecipe = await prisma.recipe.create({
      data: {
        title,
        ingredients,
        background,
        name,
        email,
        steps,
      },
    });

    res.status(200).send(newRecipe);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function getAllRecipes(_, res) {
  try {
    const allRecipes = await prisma.recipe.findMany({
      include: { images: true },
    });
    res.status(200).send(allRecipes);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function getSingleRecipe(req, res) {
  try {
    const { id } = req.body;
    const singleRecipe = await prisma.recipe.findUnique({
      where: { id },
    });
    res.status(200).send(singleRecipe);
  } catch (error) {
    res.status(404).send(error);
  }
}

module.exports = { createRecipe, getAllRecipes, getSingleRecipe };
