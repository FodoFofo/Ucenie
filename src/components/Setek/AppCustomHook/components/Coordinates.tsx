import useFetch from "./useFetch"

// typy
import { IssType } from "../../../../Types/"

// data
const apiUrl = "http://api.open-notify.org/iss-now.json"


const Coordinates = () => {
    const { data, loading } = useFetch(apiUrl)
    const {timestamp, message, iss_position, } = data as IssType

    console.log(timestamp, message, iss_position);
    

    return (
        <div>
            {
                loading ? "LOADING ..." : <div>
                    <h2>Zemepisná dĺžka</h2>
                    <p>{iss_position.longitude}</p>
                    <h2>Zemepisná šírka</h2>
                    <p>{iss_position.latitude}</p>
                </div>
            }
        </div>
    )
}

export default Coordinates