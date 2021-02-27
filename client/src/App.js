import LandingPage from "./Components/LandingPage/LandingPage";
import { Router } from "@reach/router";
import AddRecipeTitle from "./Components/AddRecipeTitle/AddRecipeTitle";
import { StateContext, Store } from "./globals/globalStore.reducer";
import AddRecipeSteps from "./Components/AddRecipeSteps/AddRecipeSteps";
import AddBackgroundStory from "./Components/AddBackgroundStory/AddBackgroundStory";
import AddPictures from "./Components/AddPictures/AddPictures";
import AllRecipes from "./Components/AllRecipes/AllRecipes";
import RecipeCard from "./Components/RecipeCard/RecipeCard";

function App() {
  const [state, dispatch] = Store();

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Router className="router">
          <LandingPage path="/" />
          <AddRecipeTitle path="add_title" />
          <AddRecipeSteps path="add_steps" />
          <AddBackgroundStory path="add_background" />
          <AddPictures path="add_images" />
          <AllRecipes path="all_recipes" />
          <RecipeCard path="recipe/:id" />
        </Router>
      </div>
    </StateContext.Provider>
  );
}

export default App;
