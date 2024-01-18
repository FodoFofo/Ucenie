// data
import { Ships } from "../utilities/Database"

//components
import Ship from "./Ship"


const Side = () => {
  return (
    <div className="side">
        <h3>Lode:</h3>
        <div className="ships">
            {Ships.map ( (ship) => {
                return (
                    <Ship ship={ship}/>
                )
            })}
        </div>
    </div>
  )
}

export default Side