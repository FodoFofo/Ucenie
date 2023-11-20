import { useContext } from "react";
import { NavLink } from "react-router-dom";

// komponenty
import Recipe from "./components/Recipe"
import RecipeContext from "./components/RecipeContext";

// typy
import { RecipeType } from "../../../Types/index";

// štýly
import './AppRecipes.scss'

const AppRecipes = () => {
    const { state } = useContext(RecipeContext)

    return (
        <div className="app-recipes">
            <div className="navigation">
                <NavLink className="app-recipe-link" to="/mojeRecipes">
                    Recepty
                </NavLink>
                <NavLink className="app-recipe-link" to="/mojeRecipes/AddRecipe">
                    Pridanie receptu
                </NavLink>
                <NavLink className="app-recipe-link" to="/mojeRecipes/SearchRecipes">
                    Vyhľadanie receptov
                </NavLink>
            </div>
            {state.map( (recipe: RecipeType) => {
                return <Recipe key={recipe.id} recipe={recipe} />
            })}
        </div>
    )
}

export default AppRecipes