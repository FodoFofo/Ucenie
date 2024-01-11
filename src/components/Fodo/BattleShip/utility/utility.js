let key
export const getKey = () => {
    if(!key) return key = new Date().getTime()

    return ++key
}

export const getRandomNumber = (min, max) => {
    return Math.floor(min + max*Math.random())
}