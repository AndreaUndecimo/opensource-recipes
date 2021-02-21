import LandingPage from "./Components/LandingPage/LandingPage";
import { Router } from "@reach/router";
import AddRecipeTitle from "./Components/AddRecipeTitle/AddRecipeTitle";

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
