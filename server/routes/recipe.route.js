const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
} = require("../controllers/recipe.controller");

router.post("/new_recipe", createRecipe);

router.get("/all_recipes", getAllRecipes);

module.exports = router;
