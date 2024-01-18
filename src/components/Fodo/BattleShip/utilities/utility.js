const getRandomNumber = (min, max) => {
    return Math.floor(min + max*Math.random())
}

let key
export const getKey = () => {
    if(!key) return key = new Date().getTime()

    return ++key
}

export const getRandomPosition = (rows, cols) => {
    return {
        row: getRandomNumber(1, rows),
        column: getRandomNumber(1, cols),
        orientation: getRandomNumber(1, 2) //1 - horizontálne, 2- vertikálne
    }
}