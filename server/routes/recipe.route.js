const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post("/new_recipe", async (req, res) => {
  const { title, ingredients, authorId, background } = req.body;

  try {
    const newRecipe = await prisma.recipe.create({
      data: {
        title,
        ingredients,
        background,
        author: { connect: { id: authorId } },
      },
    });

    res.status(200).send(newRecipe);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
