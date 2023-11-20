import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

// štýly
import './AddRecipe.scss'

// komponenty
import RecipeContext from './RecipeContext'


const AddRecipe = () => {
    const { addRecipe } = useContext(RecipeContext)

    const formSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        
        // if(state.recipeName && state.ingredientName && state.recipeProcedure)
        //     addRecipe({state});

        const formData = new FormData(e.currentTarget)
        formData.append('id', new Date().getTime().toString())
        formData.append('image', '')
        
        const newRecipe = Object.fromEntries(formData.entries())
        addRecipe(newRecipe)
    }

    const handleClick = () => {
        // TODO: doplniť pridanie inputov pre ingrediencie
        alert('TODO: doplniť pridanie inputov pre ingrediencie')
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
                    <input
                        type="text"
                        placeholder='Zadaj názov ingrediencie'
                        name='ingredientName'
                    />
                    <input
                        type="text"
                        placeholder='Zadaj množstvo a jednotku ingrediencie'
                        name='ingredientQuantity'
                    />
                    <div className="button" onClick={handleClick}>+</div>
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