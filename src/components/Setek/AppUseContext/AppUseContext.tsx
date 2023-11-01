import { useState } from 'react'

// dáta
import data from '../AppProps1/data'

// komponenty
import MovieBox from './components/MovieBox'
import MoviesContext from './components/MoviesContext'

const AppUseContext = () => {
    const [movies, setMovies] = useState(data)
 
    const deleteMovie = (movieId: number) => {
        const newMovieList = movies.filter( (oneMovie) => {
            return oneMovie.id !== movieId
        })

        setMovies(newMovieList)
    }

    return <MoviesContext.Provider value={{deleteMovie, movies}}>
        <MovieBox />
    </MoviesContext.Provider>
}

export default AppUseContext