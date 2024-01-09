import { useState } from 'react'

// styles
import './AppBattleShip.scss'

// data
import { PlayGroundSize } from './utility/Database'

//components
import Cell from './components/Cell'

const AppBattleShip = () => {
    const [cells, setCells] = useState([])
    const riadky = []

    for (let index = 1; index <= PlayGroundSize.rows; index++) {
        let bunky = []

        for (let index = 1; index <= PlayGroundSize.columns; index++) {
            bunky.push(<Cell />)
        }

        riadky.push(<div className={`row${index}`}>{bunky}</div>)
    }

    return (
        <div className='app-battle-ship'>
            <div className="play-ground">
                <div className="rows">
                    {riadky}
                </div>
            </div>
        </div>
    )
}

export default AppBattleShip