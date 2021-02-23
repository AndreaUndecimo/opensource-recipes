import axios from "axios";

export async function postOneRecipe({ title, ingredients, name, email }) {
  return axios.post(`http://localhost:3800/recipe/new_recipe`, {
    title,
    ingredients,
    name,
    email,
  });
}

export async function postImageToCloudinary(base64EncodedImage) {
  await fetch("http://localhost:3800/cloudinary/upload_image", {
    method: "POST",
    body: JSON.stringify({ data: base64EncodedImage }),
    headers: { "Content-Type": "application/json" },
  });
}
