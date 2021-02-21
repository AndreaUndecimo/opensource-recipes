import axios from "axios";

export async function postOneRecipe({ title, ingredients, name, email }) {
  return axios.post(`http://localhost:3700/recipe/new_recipe`, {
    title,
    ingredients,
    name,
    email,
  });
}
