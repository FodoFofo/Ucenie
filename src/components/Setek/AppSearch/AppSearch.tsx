import { useState, useEffect } from 'react'

// data
import allMovies from './data'

// typy
import { MovieType } from '../../../Types'

// štýly
import './AppSearch.scss'

const AppSearch = () => {
    const [searchingText, setSearchingText] = useState('')
    const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([])

    useEffect( () => {
        setFilteredMovies( allMovies.filter( (oneMovie) => {
            return oneMovie.title.toLowerCase().includes(searchingText.toLowerCase())
        }))

    }, [searchingText])

    return (
        <div className='app-search'>
            <form>
                <input
                    type="text"
                    placeholder='Hľadaný film'
                    onChange={ (e) => setSearchingText(e.target.value)}/>
            </form>

            <div className='all-moviess'>
                {
                    filteredMovies.map( (oneMovie) => {
                        const {id, image, title, age, tags, description} = oneMovie

                        return (
                            <div key={id} className='one-movie'>
                                <img src={image} alt="obrázok" />
                                <h2>{title}</h2>
                                <p>{age}</p>
                                <p>{tags}</p>
                                <p>{description}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AppSearch