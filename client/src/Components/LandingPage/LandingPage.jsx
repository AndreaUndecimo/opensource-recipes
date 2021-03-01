import { Link } from "@reach/router";
import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing_wrapper">
      <div className="title_wrapper">
        <h1>
          Welcome to the first open-source, editable recipe book on the
          Internet!{" "}
        </h1>
      </div>
      <div className="explanation">
        <h3>The rules are simple: </h3>
        <ul className="rules_list">
          <li>✨ Add your recipe title. Make it unique!</li>
          <li>
            🧑‍🍳 Add the ingredients and the steps to prepare your favourite
            dish!
          </li>
          <li>📜 You can add the story behind the recipe, if you want to.</li>
          <li>
            📸 And finally some pictures to help others recreate your
            deliciousness!
          </li>
        </ul>
        <div className="get_started">
          <div className="get_started_btn">
            <Link to="/add_title">
              <button>Add recipe</button>
            </Link>
            <Link to="/all_recipes">
              <button>Browse recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
