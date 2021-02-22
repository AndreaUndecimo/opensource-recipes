export const validateRecipeTitle = (title, ingredients) => {
  return !title || !ingredients;
};

export const validateRecipeSteps = (steps) => {
  return !steps;
};
