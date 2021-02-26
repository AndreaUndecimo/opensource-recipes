import React, { useState, useContext } from "react";

import { StateContext } from "../../globals/globalStore.reducer";
import { navigate } from "@reach/router";
import { postOneRecipe } from "../../ApiServices/ApiClientService";

const AddBackgroundStory = () => {
  const { state, dispatch } = useContext(StateContext);
  const [story, setStory] = useState("");

  const { title, backgroundStory, steps, username, email, ingredients } = state;

  const submitStory = async (e) => {
    e.preventDefault();
    try {
      const postedRecipe = await postOneRecipe({
        title,
        backgroundStory,
        steps,
        username,
        email,
        ingredients,
      });
      dispatch({ type: "backgroundStory", payload: story });
      dispatch({ type: "recipe", payload: postedRecipe });
      navigate("/add_images");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add_recipes_wrapper">
      <div className="h1_wrapper">
        <h1>We would love to hear what is the story behind the recipe!</h1>
        <h3>If you don't have any, don't worry, you can skip this passage</h3>
      </div>
      <form className="form_recipe" onSubmit={(e) => submitStory(e)}>
        <textarea
          onChange={(e) => setStory(e.target.value)}
          className="ingredients"
          name="Ingredients"
          id="ingredients"
          cols="30"
          rows="30"
        ></textarea>
        <button type="submit">That's it!</button>
        <button type="submit">Skip</button>
      </form>
    </div>
  );
};

// onClick={() => navigate("/add_images")}

export default AddBackgroundStory;
