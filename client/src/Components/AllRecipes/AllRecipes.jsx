import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import { getAllRecipes } from "../../ApiServices/ApiClientService";

import "./AllRecipes.css";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes().then((res) => {
      setRecipes(res.data);
    });
  }, []);

  return (
    <div className="all_recipes_wrapper">
      {recipes &&
        recipes.map((recipe) => (
          <div className="recipe_card" key={recipe.id}>
            <h1>{recipe.title}</h1>
            <h1>{recipe.ingredients}</h1>
            <h1>{recipe.steps}</h1>
            <Image
              cloudName="drf0x6usa"
              publicId="cekkedgbb8plnquf3q3z"
              width="300"
              crop="scale"
            />
            {/* {recipe &&
              recipe.images?.forEach((image, index) => (
                <>
                  <h1>{image.publicIds.substr(15)}</h1>
                  <Image
                    key={index}
                    cloudName="drf0x6usa"
                    publicId={image.publicIds.substr(15)}
                    width="300"
                    crop="scale"
                  />
                </>
              ))} */}
          </div>
        ))}
    </div>
  );
};

export default AllRecipes;
