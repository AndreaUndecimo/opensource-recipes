import LandingPage from "./Components/LandingPage/LandingPage";
import { Router } from "@reach/router";
import AddRecipeTitle from "./Components/AddRecipeTitle/AddRecipeTitle";
import { StateContext, Store } from "./globals/globalStore.reducer";

function App() {
  const [state, dispatch] = Store();

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Router className="router">
          <LandingPage path="/" />
          <AddRecipeTitle path="add_title" />
        </Router>
      </div>
    </StateContext.Provider>
  );
}

export default App;
