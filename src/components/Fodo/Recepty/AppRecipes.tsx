import { useContext, useState, useEffect } from "react";
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
    const [searchingText, setSearchingText] = useState('')
    const [filteredRecipes, setFilteredRecipes] = useState(state)
    
    useEffect ( () => {
        setFilteredRecipes(state.filter( (oneRecipe: RecipeType) => {
            return oneRecipe.recipeName.toLowerCase().includes(searchingText.toLowerCase())
        }))
    }, [searchingText, state])

    return (
        <div className="app-recipes">
            <div className="navigation">
                <NavLink className="app-recipe-link" to="/mojeRecipes">
                    Recepty
                </NavLink>
                <NavLink className="app-recipe-link" to="/mojeRecipes/AddRecipe">
                    Pridanie receptu
                </NavLink>
            </div>
            <div className="search">
                <input type="text" placeholder="Názov receptu" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchingText(e.target.value)}/>
                <img src="search_icon.svg" alt=""/>
            </div>
            {filteredRecipes.map( (recipe: RecipeType) => {
                return <Recipe key={recipe.id} recipe={recipe} />
            })}
        </div>
    )
}

export default AppRecipes