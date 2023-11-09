// komponenty
import Recipe from "./components/Recipe"

// dáta
import recipes from "./recipes"

const AppRecipes = () => {
    console.log(recipes);
    
    return (
        <div>
            {recipes.map( (recipe) => {
                return <Recipe recipe={recipe} />
            })}
            
        </div>
    )
}

export default AppRecipes