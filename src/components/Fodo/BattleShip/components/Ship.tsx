// types
import { ShipType } from "../../../../Types"

const Ship = ( { ship }: { ship: ShipType } ) => {
    let element: JSX.Element[] = []

    for (let index = 0; index < ship.size; index++) {
        element.push(<div className="ship-part" />)

    }
    return (
        <>
            <h5>{ship.name}</h5>
            <div className="ship-parts">
                {element}
            </div>
        </>
  )
}

export default Ship