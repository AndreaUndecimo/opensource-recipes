import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import "./AddRecipeTitle.css";

// services
import { StateContext } from "../../globals/globalStore.reducer";
import { validateRecipeTitle } from "../../helpers/validation.helper";
import {
  randomFoodEmojisArray,
  getRandomEmoji,
} from "../../helpers/randomEmojis";
import { navigate } from "@reach/router";

const AddRecipeTitle = () => {
  const { dispatch } = useContext(StateContext);
  const [ingredients, setIngredients] = useState([]);
  const [wrapperwidth, setWrapperwidth] = useState(0);
  const [title, setTitle] = useState("");

  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    setWrapperwidth(wrapperRef.current.offsetWidth);
    console.log(wrapperRef.current.offsetWidth);
  }, []);

  const saveIngredients = (e) => {
    let newIngredients;

    if (e.target.value.match(/\b[\w]+\b/g)) {
      newIngredients = e.target.value
        .split(/\r?\n/)
        .map((el) => el.substr(3))
        .join("|");
    }
    setIngredients(newIngredients);
  };

  const focusTextArea = () => {
    if (document.getElementById("ingredients").value === "") {
      document.getElementById("ingredients").value += `${getRandomEmoji(
        randomFoodEmojisArray
      )} `;
    }
  };

  const addBullet = (e) => {
    let keycode = e.keyCode ? e.keyCode : e.which;

    if (keycode === 13) {
      document.getElementById("ingredients").value += `${getRandomEmoji(
        randomFoodEmojisArray
      )} `;
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
    dispatch({ type: "title", payload: title });
    dispatch({ type: "ingredients", payload: ingredients });
    navigate("/add_steps");
  };

  return (
    <div className="add_recipes_wrapper" ref={wrapperRef}>
      <div className="h1_wrapper">
        <h1>Add the recipe title and the ingredients here.</h1>
      </div>
      <form className="form_recipe" onSubmit={(e) => submitRecipe(e)}>
        <label htmlFor="recipe_title">What is the title of your recipe?</label>
        <input
          required={true}
          type="text"
          name="Recipe Title"
          id="recipe_title"
          placeholder="Enter the title here"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="ingredients">What ingredients do we need?</label>
        <textarea
          required={true}
          onKeyUp={(e) => addBullet(e)}
          onFocus={focusTextArea}
          onChange={(e) => saveIngredients(e)}
          className="ingredients"
          name="Ingredients"
          id="ingredients"
          cols="30"
          rows="15"
        ></textarea>
        <button
          type="submit"
          disabled={validateRecipeTitle(title, ingredients)}
        >
          That's it!
        </button>
      </form>
    </div>
  );
};

export default AddRecipeTitle;
