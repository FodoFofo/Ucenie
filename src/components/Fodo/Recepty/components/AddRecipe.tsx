import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

// štýly
import './AddRecipe.scss'

// komponenty
import RecipeContext from './RecipeContext'


const AddRecipe = () => {
    const {state, addRecipe, changeInput } = useContext(RecipeContext)

    const formSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        
        if(state.recipeName && state.ingredientName && state.recipeProcedure)
            addRecipe();
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
                    value={state.recipeName}
                    onChange={(e) => changeInput(e.target.name, e.target.value)}
                />
                <div className='ingredients'>
                    <input
                        type="text"
                        placeholder='Zadaj názov ingrediencie'
                        name='ingredientName'
                        value={state.ingredientName}
                        onChange={(e) => changeInput(e.target.name, e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Zadaj množstvo a jednotku ingrediencie'
                        name='ingredientQuantity'
                        value={state.ingredientQuantity}
                        onChange={(e) => changeInput(e.target.name,e.target.value)}
                    />
                    <div className="button" onClick={handleClick}>+</div>
                </div>
                <input
                    type="text"
                    placeholder='Vlož postup prípravy'
                    name='recipeProcedure'
                    value={state.recipeProcedure}
                    onChange={(e) => changeInput(e.target.name, e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Vlož poznámku'
                    name='note'
                    value={state.note}
                    onChange={(e) => changeInput(e.target.name,e.target.value)}
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