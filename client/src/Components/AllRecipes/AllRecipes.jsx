import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
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
          <div
            className="recipe_card"
            key={recipe.id}
            onClick={() => navigate(`/recipe/${recipe.id}`)}
          >
            <h1>{recipe.title}</h1>
          </div>
        ))}
    </div>
  );
};

export default AllRecipes;
