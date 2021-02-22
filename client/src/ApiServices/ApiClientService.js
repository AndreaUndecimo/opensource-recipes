import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function postOneRecipe({ title, ingredients, name, email }) {
  return axios.post(`${process.env.BE_URL}/recipe/new_recipe`, {
    title,
    ingredients,
    name,
    email,
  });
}
