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

//---------------------------
//------- APP RECEPTY -------
//---------------------------

export interface RecipeType {
    id: number,
    image?: string,
    recipeName: string,
    ingredients: IngredietType[],
    recipeProcedure: string,
    tags?: string[],
    note?: string
} 

export interface IngredietType {
    name: string,
    quantity?: string
}