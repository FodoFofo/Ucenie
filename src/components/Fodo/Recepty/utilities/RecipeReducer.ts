import recipes from "../recipes";

// typy
import { RecipeType } from "../../../../Types/index";

export enum ActionKind {
  CHANGE_INPUT = "CHANGE_INPUT",
  ADD_RECIPE = "ADD_RECIPE",
}

interface Action {
  type: ActionKind;
  payload?: any;
}

export const defaultState = recipes;

export const recipeReducer = (state: RecipeType[], action: Action) => {
  switch (action.type) {
    case ActionKind.CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ActionKind.ADD_RECIPE:
      const newRecipe = action.payload
      
      return [
      ...state,
      newRecipe
      ]
    default: {
      // Tu je lepsie thrownut error, pretoze vsetky "ActionKind"-y si uz vycerpal, v pripade ze pouzijes iny ActionKind ako si si sam urcil v tom enume, je dobre aby ta to upozornilo ze pouzivas nieco pre co neni vytvoreny case.
      throw new Error("Dispatchujes neexistujucu akciu.");
    }
  }
};
