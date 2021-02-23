const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createRecipe(req, res) {
  const { title, ingredients, background, name, email } = req.body;

  try {
    const newRecipe = await prisma.recipe.create({
      data: {
        title,
        ingredients,
        background,
        name,
        email,
      },
    });

    res.status(200).send(newRecipe);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function getAllRecipes(_, res) {
  try {
    const allRecipes = await prisma.recipe.findMany();
    res.status(200).send(allRecipes);
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = { createRecipe, getAllRecipes };
