import axios from "axios";

export async function postOneRecipe({
  title,
  ingredients,
  backgroundStory,
  name,
  email,
  steps,
}) {
  return axios
    .post(`http://localhost:3800/recipe/new_recipe`, {
      title,
      ingredients,
      name: name || "",
      backgroundStory: backgroundStory || "",
      email: email || "",
      steps,
    })
    .then((res) => res.data);
}

export async function postImageToCloudinary({ base64EncodedImage, recipe }) {
  await fetch("http://localhost:3800/cloudinary/upload_image", {
    method: "POST",
    body: JSON.stringify({ data: { base64EncodedImage, recipe } }),
    headers: { "Content-Type": "application/json" },
  });
}

export async function getAllRecipeImages(id) {
  return axios.post("http://localhost:3800/cloudinary/images", { id });
}

export async function getAllRecipes() {
  return axios.get("http://localhost:3800/recipe/all_recipes");
}

export async function getOneRecipe({ id }) {
  return axios.post("http://localhost:3800/recipe/single_recipe", { id });
}
