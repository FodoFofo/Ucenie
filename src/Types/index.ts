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