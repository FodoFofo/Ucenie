import { useReducer } from 'react'
import { NavLink } from 'react-router-dom'

// štýly
import './AddRecipe.scss'

enum ActionKind {
    SAVE = 'SAVE'
}

interface Action {
    type: ActionKind
    payload: number
}

interface State {
    recipeName: string,
    ingredientName: string,
    ingredientQuantity: string,
    recipeProcedure: string,
    note: string
}

const reducer = (state: State, action: Action) => {
    
    return state
}

const defaultState = {
    recipeName: '',
    ingredientName: '',
    ingredientQuantity: '',
    recipeProcedure:'',
    note: ''
}

const AddRecipe = () => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const formSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        // const newRecipe = 
    }

    const handleClick = () => {
        alert('KUK')
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
                />
                <div className='ingredients'>
                    <input
                        type="text"
                        placeholder='Zadaj názov ingrediencie'
                    />
                    <input
                        type="text"
                        placeholder='Zadaj množstvo a jednotku ingrediencie'
                    />
                    <div className="button" onClick={handleClick}>+</div>
                </div>
                <input
                    type="text"
                    placeholder='Vlož postup prípravy'
                />
                <input
                    type="text"
                    placeholder='Vlož poznámku'
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