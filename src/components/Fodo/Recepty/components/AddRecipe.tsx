import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

// štýly
import './AddRecipe.scss'

// komponenty
import RecipeContext from './RecipeContext'
import Inputs from './Inputs'
import { IngredietType, RecipeType } from '../../../../Types'

const AddRecipe = () => {
    const { addRecipe } = useContext(RecipeContext)
    const [ingredientInputsCount, setIngredientInputsCount] = useState([1])

    const formSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        
        // TODO: doplniť overenie toho či je vyplnené aspoň minimum inputov
        // if(state.recipeName && state.ingredientName && state.recipeProcedure)

        const formData = new FormData(e.currentTarget)
        formData.append('id', new Date().getTime().toString())
        formData.append('image', '')
        
        const newRecipeArr =  Object.entries(Object.fromEntries(formData.entries()))
        
        let newRecipe: RecipeType = {
            id: 0,
            image: '',
            recipeName: '',
            ingredients: [{
                name: '',
                quantity: ''
            }],
            recipeProcedure: '',
            tags: [''],
            note: ''
        }
        let Ingredients: IngredietType[] = []

        for (let i = 0; i < newRecipeArr.length; i++) {
            const newRecord: any = {}
            
            if(newRecipeArr[i][0].includes('ingredientName')) {
                if(Ingredients.length < 1) {
                    Ingredients = [{"name": newRecipeArr[i][1].toString(), "quantity": newRecipeArr[i+1][1].toString()}]
                } else {
                    Ingredients.push({"name": newRecipeArr[i][1].toString(), "quantity": newRecipeArr[i+1][1].toString()})
                }
                newRecord['ingredients'] = Ingredients
            } else {
                newRecord[newRecipeArr[i][0]] = newRecipeArr[i][1]
            }
            
            newRecipe = {
                ...newRecipe,
                ...newRecord
            }
        }
        addRecipe(newRecipe)
    }

    const addInput = () => {
        setIngredientInputsCount( (prev) => {
            return [
                ...prev,
                ingredientInputsCount.length+1
            ]
        })
    }

    return (
        <div className='add-recipe'>

           <div className="navigation">
                <NavLink className="link" to="/mojeRecipes">
                    &lt;NASPÄŤ NA RECEPTY
                </NavLink>
            </div> 

            <form onSubmit={formSubmit}>
                <input
                    type="text"
                    placeholder='Zadaj názov receptu'
                    name='recipeName'
                />
                <div className='ingredients'>
                    {ingredientInputsCount.map ( count => {
                        return (
                            <div className="ingredient">
                                <Inputs count={count}/>
                            </div>
                        )})
                    }
                    <span>Pridaj ďalšiu ingrendienciu</span>
                    <div className="button" onClick={addInput}>+</div>
                </div>
                <input
                    type="text"
                    placeholder='Vlož postup prípravy'
                    name='recipeProcedure'
                />
                <input
                    type="text"
                    placeholder='Vlož poznámku'
                    name='note'
                />
                <input
                    type="submit"
                    value='Ulož recept' 
                />
            </form>
        </div>
    )
}

export default AddRecipe