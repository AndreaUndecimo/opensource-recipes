import React, { useContext, useState } from "react";

// services
import { StateContext } from "../../globals/globalStore.reducer";
import { validateRecipeSteps } from "../../helpers/validation.helper";
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
        .match(/\b[\w]+\b/g)
        .filter((el) => /[^\s]/.test(el))
        .join(",");
    }
    setSteps(newSteps);
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

  return (
    <div className="add_recipes_wrapper">
      <div className="h1_wrapper">
        <h1>Hey, here you'll add the recipe steps!</h1>
      </div>
      <form className="form_recipe" onSubmit={(e) => submitRecipe(e)}>
        <label htmlFor="ingredients">
          Tell us the secret for deliciousnes!
        </label>
        <textarea
          required={true}
          onKeyUp={(e) => addBullet(e)}
          onFocus={focusTextArea}
          onChange={(e) => saveSteps(e)}
          className="ingredients"
          name="Ingredients"
          id="ingredients"
          cols="30"
          rows="30"
        ></textarea>
        <button type="submit" disabled={validateRecipeSteps(steps)}>
          That's it!
        </button>
      </form>
    </div>
  );
};

export default AddRecipeSteps;
