import React, { useContext, useState } from "react";
import "./AddRecipeSteps.css";

// services
import { StateContext } from "../../globals/globalStore.reducer";
import { validateRecipeSteps } from "../../helpers/validation.helper";
import {
  randomFoodEmojisArray,
  getRandomEmoji,
} from "../../helpers/randomEmojis";
import { navigate } from "@reach/router";

const AddRecipeSteps = () => {
  const { dispatch } = useContext(StateContext);
  const [steps, setSteps] = useState([]);

  const submitRecipe = (e) => {
    e.preventDefault();
    dispatch({ type: "steps", payload: steps });
    navigate("/add_background");
  };

  const saveSteps = (e) => {
    let newSteps;

    if (e.target.value.match(/\b[\w]+\b/g)) {
      newSteps = e.target.value
        .split(/\r?\n/)
        .map((el) => el.substr(3))
        .join("|");
    }
    setSteps(newSteps);
  };

  const focusTextArea = () => {
    if (document.getElementById("steps").value === "") {
      document.getElementById("steps").value += `${getRandomEmoji(
        randomFoodEmojisArray
      )} `;
    }
  };

  const addBullet = (e) => {
    let keycode = e.keyCode ? e.keyCode : e.which;

    if (keycode === 13) {
      document.getElementById("steps").value += `${getRandomEmoji(
        randomFoodEmojisArray
      )} `;
    }

    var txtval = document.getElementById("steps").value;
    if (/\n+/.test(txtval.substr(txtval.length - 1))) {
      document.getElementById("steps").value = txtval.substring(
        0,
        txtval.length - 1
      );
    }
  };

  return (
    <div className="add_steps_wrapper">
      <div className="h1_wrapper">
        <h1 className="steps_title">Tell us the secret for deliciousnes!</h1>
        <h3 className="steps_subtitle">
          Add the steps required to make this recipe.
        </h3>
      </div>
      <form className="form_recipe" onSubmit={(e) => submitRecipe(e)}>
        <textarea
          required={true}
          onKeyUp={(e) => addBullet(e)}
          onFocus={focusTextArea}
          onChange={(e) => saveSteps(e)}
          className="ingredients"
          name="Ingredients"
          id="steps"
          cols="30"
          rows="20"
        ></textarea>
        <button
          type="submit"
          disabled={validateRecipeSteps(steps)}
          id="steps_btn"
        >
          That's it!
        </button>
      </form>
    </div>
  );
};

export default AddRecipeSteps;
