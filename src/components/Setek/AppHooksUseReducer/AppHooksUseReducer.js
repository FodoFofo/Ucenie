import { useState, useReducer } from 'react'

// komponenty
import Modal from './components/Modal'

// štýly
import './AppHooksUseReducer.scss'

const reducer = (state, action) => {
    if (action.type === "ADD_MOVIE") {
        const newMovies = [...state.movies, action.payload]
        return {
            ...state,
            movies: newMovies, 
            showNotification: true,
            notificationContent: 'Film bol pridaný.'
        }
    }

    if (action.type === "NO_MOVIE_NAME") {
        return {
            ...state,
            showNotification: true,
            notificationContent: "Nebol zadaný žiadný film."
        }
    }

    if (action.type === "CLOSE_NOTIFICATION") {
        return {
            ...state,
            showNotification: false
        }
    }

    if (action.type === "REMOVE_MOVIE") {
    const filteredMovies = state.movies.filter( (oneMovie) => {
        return oneMovie.id !== action.payload
    })

        return {
            ...state,
            movies: filteredMovies
        }
    }

    return new Error("CHYBA: Žiadná zhoda s action.type")
}

const defaultState = {
    movies: [],
    showNotification: false,
    notificationContent: ''
}

const AppHooksUseReducer = () => {
    const [movieName, setMovieName] = useState("")
    const [state, dispatch] = useReducer(reducer, defaultState)

    const formSubmit = (e) => {
        e.preventDefault()

        if (movieName) {
            const newMovie = {id: new Date().getTime(), name: movieName}
            dispatch({type: "ADD_MOVIE", payload: newMovie})
        } else {
            dispatch({type: "NO_MOVIE_NAME"})
        }
        setMovieName('')
    } 

    const closeNotification = () => {
        dispatch({ type: "CLOSE_NOTIFICATION"})
    }

    return (
        <section className='app-hooks-usereducer'>
           {state.showNotification && <Modal notificationContent={state.notificationContent} closeNotification={closeNotification}/>}            
            <form onSubmit={formSubmit}>
                <input
                    type="text"
                    value={movieName}
                    onChange={ e => setMovieName(e.target.value)} />
                <input type="submit" value="Pridať" />
            </form>
            <div>
                {
                    state.movies.map( (movie) => {
                        return <div key={movie.id} className='all-movies'>
                            <p>{movie.name}</p>
                            <button onClick={ () => dispatch({type: "REMOVE_MOVIE", payload: movie.id})}>ZMAZAŤ</ button>
                        </div>
                    })
                }
            </div> 
        </section>
    )
}

export default AppHooksUseReducer