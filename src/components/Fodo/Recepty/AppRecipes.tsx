import { useState } from "react";
import { NavLink } from "react-router-dom";

// komponenty
import Recipe from "./components/Recipe"

// dáta
import inputData from "./recipes"

// štýly
import './AppRecipes.scss'

const AppRecipes = () => {
    const [recipes, setRecipes] = useState(inputData)
    
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
            {recipes.map( (recipe) => {
                return <Recipe recipe={recipe} />
            })}
            
        </div>
    )
}

export default AppRecipes