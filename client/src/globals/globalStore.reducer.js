import { useReducer, createContext } from "react";

const initialState = {
  title: null,
  ingredients: null,
  steps: null,
  backgroundStory: null,
  username: null,
  email: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "title":
      return {
        ...state,
        title: action.payload,
      };
    case "ingredients":
      return {
        ...state,
        ingredients: action.payload,
      };
    case "steps":
      return {
        ...state,
        steps: action.payload,
      };
    case "backgroundStory":
      return {
        ...state,
        backgroundStory: action.payload || null,
      };
    case "username":
      return {
        ...state,
        username: action.payload || null,
      };
    case "email":
      return {
        ...state,
        email: action.payload || null,
      };
    default:
      throw new Error();
  }
}

const Store = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};

const StateContext = createContext();
export { Store, StateContext };
