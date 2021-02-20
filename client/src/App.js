import LandingPage from "./LandingPage/LandingPage";
import { Router } from "@reach/router";
import AddRecipeTitle from "./AddRecipeTitle/AddRecipeTitle";

function App() {
  return (
    <div className="App">
      <Router className="router">
        <LandingPage path="/" />
        <AddRecipeTitle path="add_title" />
      </Router>
    </div>
  );
}

export default App;
