import axios from "axios";

export async function postOneRecipe({
  title,
  ingredients,
  backgroundStory,
  name,
  email,
  steps,
}) {
  return axios.post(`http://localhost:3800/recipe/new_recipe`, {
    title,
    ingredients,
    name: name || "",
    backgroundStory: backgroundStory || "",
    email: email || "",
    steps,
  });
}

export async function postImageToCloudinary({ base64EncodedImage, title }) {
  await fetch("http://localhost:3800/cloudinary/upload_image", {
    method: "POST",
    body: JSON.stringify({ data: { base64EncodedImage, title } }),
    headers: { "Content-Type": "application/json" },
  });
}
