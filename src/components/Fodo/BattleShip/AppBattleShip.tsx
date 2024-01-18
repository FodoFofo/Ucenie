import { useEffect, useState } from 'react'

// styles
import './AppBattleShipGlobal.scss'

// data
import { PlayGroundSize, Ships } from './utilities/Database'

// components
import Row from './components/Row'
import Side from './components/Side'

// types
import { CellType } from '../../../Types'

// utility
import { getKey, getRandomPosition } from './utilities/utility'

/************************************************************************************ */

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

    },[])

    const placementShipsOnPlayground = () => {
        const emptyCells = () => {
            const playGround: (CellType[])[] = []

            for (let rowNr = 1; rowNr <= PlayGroundSize.rows; rowNr++) {
                let row: CellType[] = []

                for (let colNr = 1; colNr <= PlayGroundSize.columns; colNr++) {
                    row.push({row: rowNr, column: colNr, state: 'empty'})
                }
                playGround.push(row)
            }

            return playGround
        }


        let newCells = emptyCells()
        Ships.forEach( ship => {
            // Orientation:
            //      1 - horizontálne
            //      2 - vertikálne
            let positionOrientation = getRandomPosition(PlayGroundSize.rows, PlayGroundSize.columns)
            let condition = true
            const checkPosition = (row: boolean, PlayGroundSize: { columns: number, rows: number, }, positionOrientation: { row: number, column: number, orientation: number }, ship: { name: string, size: number }) => {
                if(positionOrientation[ row ? 'row' : 'column' ] + ship.size > PlayGroundSize[ row ? 'rows' : 'columns' ])  {
                    condition = true
                    positionOrientation = getRandomPosition(PlayGroundSize.rows, PlayGroundSize.columns)
                } else {
                    // overenie či na bunkách kde má byť umiestnená loďka nie je už umiestnená iná
                    let emptyCheck = false
                    for (let index = 0; index < ship.size; index++) {
                        if(newCells
                            [ positionOrientation.row-1 + (row ? 0 : index) ]
                            [ positionOrientation.column-1 + (row ? index : 0) ].state === 'empty') emptyCheck = true
                        else {
                            emptyCheck = false
                            break
                        }
                    }

                    // Ak sú bunky voľné ('empty') tak umiestni loďku, v opačnom prípade daj iné súradnice
                    if(emptyCheck) {
                        for (let index = 0; index < ship.size; index++) {
                            newCells
                                [ positionOrientation.row-1 + (row ? 0 : index) ]
                                [ positionOrientation.column-1 + (row ? index : 0) ].state = ship.name
                        }
                        condition = false
                    } else {
                        condition = true
                        positionOrientation = getRandomPosition(PlayGroundSize.rows, PlayGroundSize.columns)
                    }
                }
            }


            console.log({umiestnenie: 'Ships.forEach začiatok', position: positionOrientation, condition})

            do {
                // TODO3: Overiť či na vybraných súradniciach, a aj na tý na ktorých bude loďka umiestnená nie je už iná loďka
                // TODO4: umiestniť loďku

                // HORIZONTÁLNE ORIENTOVANÁ LOĎKA
                if( positionOrientation.orientation === 1 ) {
                    if(positionOrientation.column + ship.size > PlayGroundSize.columns)  {
                        condition = true
                        positionOrientation = getRandomPosition(PlayGroundSize.rows, PlayGroundSize.columns)
                    } else {
                        for (let index = 0; index < ship.size; index++) {
                            newCells[positionOrientation.row-1][positionOrientation.column-1+index].state = ship.name
                        }
                        condition = false
                    }
                } else if( positionOrientation.orientation === 2 ) {  // VERTIKÁLNE ORIENTOVANÁ LOĎKA
                    if(positionOrientation.row + ship.size > PlayGroundSize.rows)  {
                        condition = true
                        positionOrientation = getRandomPosition(PlayGroundSize.rows, PlayGroundSize.columns)
                    } else {
                        for (let index = 0; index < ship.size; index++) {
                            newCells[positionOrientation.row-1+index][positionOrientation.column-1].state = ship.name
                        }
                        condition = false
                    }
                } else {
                    alert(' ERROR: VYSKYTLA SA CHYBA PRI OVEROVANÍ ORIENTACIE LOĎKY')
                }
            } while(condition)
        });
        setCells( newCells)

    }

    const showShips = () => {
        cells.forEach( row => {
            row.forEach( cell => {
                if( cell.state !== 'empty' ) {
                    let actualCell = document.getElementById(`position${cell.row},${cell.column}`)
                    actualCell?.textContent = cell.state
                    actualCell?.classList.add('show')
                }
            });
        });
    }

/**********************************************************************************/

    return (
        <div className='app-battle-ship'>

{/*******************************************************************/}
{/******************** DOČASNÉ POMOCNÉ ELEMENTY *********************/}
{/*******************************************************************/}
        <h2 style={{color: '#abcdef', textShadow: '0px 0px 30px #c42324'}}>ZATIAĽ ROZPRACOVANÁ</h2>
               <button onClick={ () =>placementShipsOnPlayground()}>
             POMOCNÝ (umiestnenie lodí)
        </button>
        <button onClick={ () => showShips()}>
             POMOCNÝ (zobrazenie lodí)
        </button>
{/*******************************************************************/}
{/*******************************************************************/}
{/*******************************************************************/}

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