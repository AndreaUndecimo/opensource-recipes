const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post("/new_recipe", async (req, res) => {
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
});

router.get("/all_recipes", async (_, res) => {
  try {
    const allRecipes = await prisma.recipe.findMany();
    res.status(200).send(allRecipes);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
