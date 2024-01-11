
export interface MovieType {
    id: number,
    name?: string,
    image?: string,
    title?: string,
    age?: string,
    tags?: string,
    description?: string
}

export interface IssType {
    timestamp: number,
    message: string,
    iss_position: {
        latitude: string,
        longitude: string
    }
}

//--------------------------
// BATTLE SHIP

export interface CellType {
row: number,
column: number
state: string // 'empty', 'ship'
}

export interface ShipType {
    name: string,
    size: number
}

//--------------------------