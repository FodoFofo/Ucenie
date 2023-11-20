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
    // TODO Zataiľ uvedené ingredientName a ingredientQuantity pre účely vývoja, potom zmeniť na pole - nižšie je teraz zakomentované
    ingredientName: string;
    ingredientQuantity: string;
    //ingredients: IngredietType[],
    recipeProcedure: string,
    tags?: string[],
    note?: string
} 

export interface IngredietType {
    name: string,
    quantity?: string
}