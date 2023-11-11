
// štýly
import './Recipe.scss'

// typy
import { RecipeType } from "../../../../Types"

type Props = {
    recipe: RecipeType
}

const Recipe = ( {recipe}: Props) => {
    const {name, ingredients, procedure }= recipe

    return (
        <>
            <h2>{name}</h2>
            <div className='recipe'>
                <div className="ingredients">
                    <h3>Suroviny</h3>
                    <table>
                        {ingredients.map( (ingredient) => {
                            return <tr>
                                <td>{ingredient.quantity}</td>
                                <td>{ingredient.name}</td>
                            </tr>
                        })}
                    </table>

                </div>
                <div className="procedure">
                    <h3>Postup</h3>
                    <p>{procedure}.</p>
                </div>
            </div>
        </>
    )
}

export default Recipe