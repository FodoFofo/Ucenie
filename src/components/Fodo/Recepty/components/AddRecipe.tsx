import { useReducer } from 'react'
import { NavLink } from 'react-router-dom'

// štýly
import './AddRecipe.scss'

enum ActionKind {
    CHANGE_INPUT = 'CHANGE_INPUT'
}

interface Action {
    type: ActionKind
    payload?: any
}

interface State {
    recipeName: string,
    ingredientName: string,
    ingredientQuantity: string,
    recipeProcedure: string,
    note: string
}

const reducer = (state: State, action: Action) => {
    
    switch(action.type) {
        case 'CHANGE_INPUT': {
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        }
        default: 
            return state
    }
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
                    name='recipeName'
                    value={state.recipeName}
                    onChange={(e) => dispatch({type: ActionKind.CHANGE_INPUT, payload: {name: e.target.name, value: e.target.value}})}
                />
                <div className='ingredients'>
                    <input
                        type="text"
                        placeholder='Zadaj názov ingrediencie'
                        name='ingredientName'
                        value={state.ingredientName}
                        onChange={(e) => dispatch({type: ActionKind.CHANGE_INPUT, payload: {name: e.target.name, value: e.target.value}})}
                    />
                    <input
                        type="text"
                        placeholder='Zadaj množstvo a jednotku ingrediencie'
                        name='ingredientQuantity'
                        value={state.ingredientQuantity}
                        onChange={(e) => dispatch({type: ActionKind.CHANGE_INPUT, payload: {name: e.target.name, value: e.target.value}})}
                    />
                    <div className="button" onClick={handleClick}>+</div>
                </div>
                <input
                    type="text"
                    placeholder='Vlož postup prípravy'
                    name='recipeProcedure'
                    value={state.recipeProcedure}
                    onChange={(e) => dispatch({type: ActionKind.CHANGE_INPUT, payload: {name: e.target.name, value: e.target.value}})}
                />
                <input
                    type="text"
                    placeholder='Vlož poznámku'
                    name='note'
                    value={state.note}
                    onChange={(e) => dispatch({type: ActionKind.CHANGE_INPUT, payload: {name: e.target.name, value: e.target.value}})}
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