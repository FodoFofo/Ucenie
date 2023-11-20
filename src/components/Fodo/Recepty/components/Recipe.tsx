// štýly
import './Recipe.scss'

// typy
import { RecipeType } from "../../../../Types"

type Props = {
    recipe: RecipeType
}

const Recipe = ( {recipe}: Props) => {
    const { image, recipeName, ingredientName, ingredientQuantity, recipeProcedure, tags, note }= recipe

    return (
        <>
            <h2>{recipeName}</h2>
            <img src={image || 'food.svg'} alt="" />
            {tags?.map( (tag) => {
                return <span className='tag'>{tag}</span>
            })}
            <div className='recipe'>
                <div className="ingredients">
                    <h3>Suroviny</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>{ingredientName}</td>
                                <td>{ingredientQuantity}</td>
                            </tr>
                        {/* {ingredients.map( (ingredient) => {
                            return <tr>
                            <td>{ingredient.quantity}</td>
                            <td>{ingredient.name}</td>
                            </tr>
                        })} */}
                        </tbody>
                    </table>

                </div>
                <div className="procedure">
                    <h3>Postup</h3>
                    <p>{recipeProcedure}.</p>
                </div>
            </div>
            <div className="note">
                <span>Poznámky:</span> {note}
            </div>
        </>
    )
}

export default Recipe