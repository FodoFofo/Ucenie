import { useEffect, useState } from 'react'

// styles
import './AppBattleShipGlobal.scss'

// data
import { PlayGroundSize, Ships } from './utility/Database'

// components
import Row from './components/Row'
import Side from './components/Side'

// types
import { CellType } from '../../../Types'

// utility
import { getKey, getRandomNumber } from './utility/utility'

const AppBattleShip = () => {
    const [cells, setCells] = useState<(CellType[])[]>([])

    useEffect ( () => {
        const playGround: (CellType[])[] = []

        for (let rowNr = 1; rowNr <= PlayGroundSize.rows; rowNr++) {
            let row: CellType[] = []

            for (let colNr = 1; colNr <= PlayGroundSize.columns; colNr++) {
                row.push({row: rowNr, column: colNr, state: 'empty'})
            }
            playGround.push(row)
        }

        setCells(playGround)

        console.log('useEfect cells: ')
        console.log(cells)

    },[])

    const placementShipsOnPlayground = () => {

        const getRandomPosition = () => {
            return {
                row: getRandomNumber(1, PlayGroundSize.rows),
                column: getRandomNumber(1, PlayGroundSize.columns)
            }
        }

        Ships.map( (ship) => {
            let position = getRandomPosition()
            let condition = true

            // console.log(ship.name + ', ' + ship.size)
            // console.log(`1.level: ${position.row}, ${position.column}`);
            // console.log(`podmienka: ${position.column + ship.size > PlayGroundSize.columns}`);
            // console.log(`condition zaciatok: ${condition}`);

            do {
                console.log(`cyklus: ${position.row}, ${position.column}`);
                if(position.column + ship.size > PlayGroundSize.columns)  {
                    condition = true
                    position = getRandomPosition()
                } else {
                    // TODO: doplniť umiestnenie lode do hracieho poľa (do cells doplniť položku 'state' alebo niečo take)

                    let newCells = cells

                    console.log(newCells[position.row][position.column].state);

                    // // eslint-disable-next-line no-loop-func
                    // const newCells = () => {
                    //     console.log('else setcell');
                    //     return cells.map( (row) => {
                    //         console.log('else setcell-row');

                    //         return row.map( (cell) => {
                    //             if(position.row === cell.row && position.column === cell.column){
                    //                 console.log(`Else map: ${position.row}, ${position.column}`);

                    //                 console.log({...cell, state: `ship${ship.size}`})
                    //                 return {...cell, state: 'ship'}
                    //             } else return cell

                    //         })
                    //     })
                    // }
                    // console.log('newCells: ' + newCells());


                    setCells( newCells)
                    condition = false
                }
            console.log(`condition koniec: ${condition}`);

            } while(condition)

                return console.log(ship.size)
        })

        // return console.log(rowPos+ ', ' + colPos);

    }

    console.log(cells)

    return (
        <div className='app-battle-ship'>
            <div className="play-ground">
                <div className="rows">
                    {
                        cells?.map( (row, index) => {
                            return  <Row key={getKey()} row={row}/>
                        })
                    }
                </div>
                <Side />
            </div>
        </div>
    )
}

export default AppBattleShip