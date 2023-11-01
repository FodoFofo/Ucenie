// komponenty
import Movies from "./Movies"

// typy
import { MovieType } from '../../../../Types/index';

// props
type Props = {
    data: MovieType[]
    deleteMovie: (MovieId: number) => void
}


const MovieBox = ({data, deleteMovie}: Props) => {
  return (
    <div><Movies data={data} deleteMovie={deleteMovie}/></div>
  )
}

export default MovieBox