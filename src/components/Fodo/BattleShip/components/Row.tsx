// components
import Cell from "./Cell"

// styles
import { CellType } from "../../../../Types"

// utility
import { getKey } from "../utilities/utility"

const Row = ({row}: {row: CellType[]}) => {
    return <div className="row">
        {
            row.map( (cell) => {
                return <Cell key={getKey()} position={`position${cell.row},${cell.column}`}/>
            })
        }
    </div>
}

export default Row