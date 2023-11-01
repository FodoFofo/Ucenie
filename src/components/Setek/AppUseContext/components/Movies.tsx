import MoviesContext from './MoviesContext';
import { useContext } from 'react'

// typy
import { MovieType } from '../../../../Types/index'

const Movies = () => {
    const { deleteMovie, movies } = useContext(MoviesContext)

    return (
        <div>
            {
                movies.map( (oneMovie: MovieType) => {
                    const {id, name} = oneMovie

                    return <div key={id}>
                        <p>{name}</p>
                        <button onClick={() => deleteMovie(id)}>ZMAZAŤ</button>
                    </div>
                })
            }
        </div>
    )
}

export default Movies


