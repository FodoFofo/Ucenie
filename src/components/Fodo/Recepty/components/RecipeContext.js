import { useReducer } from "react";
import { createContext } from "react";
import { ActionKind, recipeReducer } from "../utilities/RecipeReducer";

const RecipeContext = createContext();

const defaultState = {
  recipeName: "",
  ingredientName: "",
  ingredientQuantity: "",
  recipeProcedure: "",
  note: "",
};

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, defaultState);

  const addRecipe = (recipe) => {
    dispatch({
      type: ActionKind.ADD_RECIPE,
      payload: recipe,
    });
  };

  const changeInput = (name, value) => {
    dispatch({
      type: ActionKind.CHANGE_INPUT,
      payload: {
        name,
        value
      },
    });
  };

  const value = {
    state,
    changeInput,
    addRecipe
  }

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
};

export default RecipeContext;
