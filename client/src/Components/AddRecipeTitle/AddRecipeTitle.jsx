import React, { useState } from "react";
import "./AddRecipeTitle.css";

// services
import { postOneRecipe } from "../../ApiServices/ApiClientService";

const AddRecipeTitle = () => {
  const [ingredients, setIngredients] = useState([]);
  const [title, setTitle] = useState("");

  const saveIngredients = (e) => {
    const ingredients = e.target.value
      .match(/\b[\w]+\b/g)
      .filter((el) => /[^\s]/.test(el))
      .join(",");
    setIngredients(ingredients);
  };

  const focusTextArea = () => {
    if (document.getElementById("ingredients").value === "") {
      document.getElementById("ingredients").value += "• ";
    }
  };

  const addBullet = (e) => {
    let keycode = e.keyCode ? e.keyCode : e.which;

    if (keycode === 13) {
      document.getElementById("ingredients").value += "• ";
    }

    var txtval = document.getElementById("ingredients").value;
    if (/\n+/.test(txtval.substr(txtval.length - 1))) {
      document.getElementById("ingredients").value = txtval.substring(
        0,
        txtval.length - 1
      );
    }
  };

  const submitRecipe = (e) => {
    e.preventDefault();
    console.log("hello");
    postOneRecipe({ title, ingredients })
      .then((res) => res.data)
      .catch((error) => console.error(error));
  };

  return (
    <div className="add_recipes_wrapper">
      <div className="h1_wrapper">
        <h1>Hey, here you'll add the recipes!</h1>
      </div>
      <form className="form_recipe" onSubmit={(e) => submitRecipe(e)}>
        <label htmlFor="recipe_title">What is the title of your recipe?</label>
        <input
          type="text"
          name="Recipe Title"
          id="recipe_title"
          placeholder="Enter the title here"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="ingredients">What ingredients do we need?</label>
        <textarea
          onKeyUp={(e) => addBullet(e)}
          onFocus={focusTextArea}
          onChange={(e) => saveIngredients(e)}
          className="ingredients"
          name="Ingredients"
          id="ingredients"
          cols="30"
          rows="30"
        ></textarea>
        <button type="submit">That's it!</button>
      </form>
    </div>
  );
};

export default AddRecipeTitle;
