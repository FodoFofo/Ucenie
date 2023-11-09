
// štýly
import './Recipe.scss'

// typy
import { RecipeType, IngredietType } from "../../../../Types"

type Props = {
    // id: number,
    // image?: string,
    // name: string,
    // ingredients: {
    //     name: string,
    //     quantity: string
    // }[],
    // procedure: string,
    // tags?: string[],
    // note?: string

    recipe: RecipeType
}

const Recipe = ( recipe: Props) => {
    // const {id, name, ingredients, procedure }= recipe

    return (
        <>
            <h2>{recipe.name}</h2>
            <div className='recipe'>
                <div className="ingredients">
                    <h3>Suroviny</h3>
                    <table>
                        <tr>
                            <td>500g</td>
                            <td>múka Mix B Bread</td>
                        </tr>
                        <tr>
                            <td>400ml</td>
                            <td>voda</td>
                        </tr>
                        <tr>
                            <td>40g</td>
                            <td>olej</td>
                        </tr>
                    </table>

                </div>
                <div className="procedure">
                    <h3>Postup</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ut culpa saepe maxime totam amet perspiciatis explicabo, aliquam fugit? Recusandae hic est odit dignissimos iste minima corrupti dolore corporis iure. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit dolorum omnis iste. Velit quia necessitatibus aspernatur fuga qui repellendus nemo quibusdam doloremque consequatur quod molestiae quasi, facere voluptate vero. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, culpa animi illo, nihil asperiores rem sint similique ab cumque consequuntur dolore aliquid delectus. Consequatur beatae perferendis itaque iste maiores.</p>
                </div>
            </div>
        </>
    )
}

export default Recipe