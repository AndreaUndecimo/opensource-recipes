import React, { useState, useContext } from "react";

import { StateContext } from "../../globals/globalStore.reducer";
import { navigate } from "@reach/router";

const AddBackgroundStory = () => {
  const { dispatch } = useContext(StateContext);
  const [story, setStory] = useState("");

  const submitStory = (e) => {
    e.preventDefault();
    dispatch({ type: "story", payload: story });
    navigate("/add_images");
  };

  return (
    <div className="add_recipes_wrapper">
      <div className="h1_wrapper">
        <h1>We would love to hear what is the story begind the recipe!</h1>
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
        <button onClick={() => navigate("/add_images")} type="button">
          Skip
        </button>
      </form>
    </div>
  );
};

export default AddBackgroundStory;
