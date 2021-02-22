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
        <ul>
          <li>✍️ Add your recipe title</li>
          <li>🧑‍🍳 Add the ingredients and the steps</li>
          <li>📸 Add some pictures if you want to</li>
          <li>📜 If you feel like, add a background story to the recipe</li>
        </ul>
      </div>
      <div className="get_started">
        <div className="get_started_title">
          <h3>Time to get started!</h3>
        </div>
        <div className="get_started_btn">
          <Link to="/add_title">
            <button>Add recipe</button>
          </Link>
          <button>Browse recipe</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
