import React, { useState } from "react";
import "./AddRecipeTitle.css";

//Icons
import { ReactComponent as PlusIcon } from "../assets/plus_icon.svg";
import { GrRestaurant } from "react-icons/gr";

const AddRecipeTitle = () => {
  const [clicked, setClicked] = useState(false);

  const toggleBullet = (e) => {
    setClicked(!clicked);
  };

  return (
    <div className="add_recipes_wrapper">
      <div className="h1_wrapper">
        <h1>Hey, here you'll add the recipes!</h1>
      </div>
      <form className="form_recipe">
        <label htmlFor="recipe_title">What is the title of your recipe?</label>
        <input
          type="text"
          name="Recipe Title"
          id="recipe_title"
          placeholder="Enter the title here"
        />
        <label htmlFor="recipe_ingredients">What ingredients do we need?</label>
        <div className="recipe_ingredients">
          <div className="editable_content">
            <button
              onClick={(e) => toggleBullet(e)}
              type="button"
              className="add_btn"
            >
              <PlusIcon />
            </button>
            <div contentEditable="true" className="content_recipe"></div>
          </div>
          {/* {!clicked ? (
            <button
              onClick={(e) => toggleBullet(e)}
              type="button"
              className="add_btn"
            >
              <PlusIcon />
            </button>
          ) : (
            <div className="edited_content">
              <GrRestaurant />
              <div contentEditable="true" className="content_recipe"></div>
            </div>
          )} */}
        </div>
      </form>
    </div>
  );
};

export default AddRecipeTitle;
