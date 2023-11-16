export interface MovieType {
    id: number,
    name: string
}

export interface IssType {
    timestamp: number,
    message: string,
    iss_position: {
        latitude: string,
        longitude: string
    }
}

export interface RecipeType {
    id: number,
    image?: string,
    name: string,
    ingredients: IngredietType[],
    procedure: string,
    tags?: string[],
    note?: string
} 

export interface IngredietType {
    name: string,
    quantity?: string
}