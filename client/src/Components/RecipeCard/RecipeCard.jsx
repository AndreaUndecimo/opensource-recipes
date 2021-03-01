import React, { useEffect, useState } from "react";
import "./RecipeCard.css";
import { Image } from "cloudinary-react";
import {
  getAllRecipeImages,
  getOneRecipe,
} from "../../ApiServices/ApiClientService";

const RecipeCard = (props) => {
  const [imageIds, setImageIds] = useState([]);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getAllRecipeImages(parseInt(props.id)).then((res) => setImageIds(res.data));
    getOneRecipe({ id: parseInt(props.id) }).then((res) => setRecipe(res.data));
  }, []);

  return (
    <div className="recipe_card_wrapper">
      <div className="recipe_display">
        <div className="credentials">
          <h3>Name Surname</h3>
        </div>
        <div className="recipe_title">
          <h1>{recipe?.title}</h1>
          <h1>{props.id}</h1>
        </div>
        <div className="recipe_info">
          <ul className="ingredients_list">
            <h1>Ingredients: </h1>
            {recipe?.ingredients.split("|").map((ingredient, index) => (
              <>
                <li key={index}>
                  <p>{ingredient}</p>
                </li>
              </>
            ))}
          </ul>
          <ul className="steps_list">
            <h1>Steps: </h1>
            {recipe?.steps.split("|").map((step, index) => (
              <>
                <li key={index}>
                  <p>{step}</p>
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="other_info">
          <div className="image_gallery">
            {imageIds &&
              imageIds.map((imageId, index) => (
                <Image
                  key={index}
                  cloudName="drf0x6usa"
                  publicId={imageId}
                  width="200"
                  className="img_recipe"
                  crop="scale"
                />
              ))}
          </div>
          <div className="background_story">
            <h1>The story behind this recipe:</h1>
            {recipe?.backgroundStory}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
