import React from "react";
import "./AddRecipeTitle.css";

const AddRecipeTitle = () => {
  const handleTextArea = () => {
    if (document.getElementById("ingredients").value === "") {
      document.getElementById("ingredients").value += "• ";
    }
  };

  const addBullet = (e) => {
    let keycode = e.keyCode ? e.keyCode : e.which;
    if (keycode === "13") document.getElementById("ingredients").value += "• ";

    var txtval = document.getElementById("ingredients").value;

    if (/\n/.test(txtval.substr(txtval.length - 1))) {
      document.getElementById("ingredients").value += "• ";
    }
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
        <label htmlFor="ingredients">What ingredients do we need?</label>
        <textarea
          onKeyUp={(e) => addBullet(e)}
          onFocus={handleTextArea}
          className="ingredients"
          name="Ingredients"
          id="ingredients"
          cols="30"
          rows="30"
        ></textarea>
        {/* <div className="recipe_ingredients">
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
        </div> */}
      </form>
    </div>
  );
};

export default AddRecipeTitle;
