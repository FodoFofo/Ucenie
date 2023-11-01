// komponenty
import Movies from "./Movies"

// typy
import { MovieType } from '../../../../Types/index';


const MovieBox = (data: MovieType[]) => {
  return (
    <div><Movies data={data}/></div>
  )
}

export default MovieBox