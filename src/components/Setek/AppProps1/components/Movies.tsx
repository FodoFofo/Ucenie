
// typy
import { MovieType } from '../../../../Types/index';

// props
type Props = {
    data: MovieType[]
    deleteMovie: (MovieId: number) => void
}

const Movies = ({data, deleteMovie}: Props) => {
    return (
        <div>
            {
                data.map( (oneMovie) => {
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


