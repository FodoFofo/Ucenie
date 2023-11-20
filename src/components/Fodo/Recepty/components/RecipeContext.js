import { useReducer, createContext } from "react";
import { ActionKind, recipeReducer, defaultState } from "../utilities/RecipeReducer";

const RecipeContext = createContext();

export const RecipeProvider = ({ props, children }) => {
  const [state, dispatch] = useReducer(recipeReducer, defaultState);

  
  const addRecipe = ({id, image, recipeName, ingredientName, ingredientQuantity, recipeProcedure, tags, note}) => {
    const newRecipe = {
      id,
      image,
      recipeName,
      ingredientName,
      ingredientQuantity,
      recipeProcedure,
      tags,
      note
    }
    dispatch({
      type: ActionKind.ADD_RECIPE,
      payload: newRecipe,
    });
  };

  const changeInput = (name, value) => {
    dispatch({
      type: ActionKind.CHANGE_INPUT,
      payload: {
        name,
        value,
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
