import { useState } from 'react'

// dáta
import data from './data'

// komponenty
import MovieBox from './components/MovieBox'

const AppProps1 = () => {
    const [movies, setMovies] = useState(data)

    const deleteMovie = (movieId: number) => {
        const newMovieList = movies.filter( (oneMovie) => {
            return oneMovie.id !== movieId
        })

        setMovies(newMovieList)
    }

    return (
        <div><MovieBox data={movies} deleteMovie={deleteMovie}/></div>
     )
}

export default AppProps1