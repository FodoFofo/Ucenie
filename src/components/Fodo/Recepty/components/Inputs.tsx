import React from 'react'

type Props = {
    count: number
}


const Inputs = ({count}: Props) => {
  return (
    <>
        <input
            type="text"
            placeholder = 'Zadaj názov ingrediencie'
            name = {'ingredientName' + count}
        />
        <input
            type="text"
            placeholder = 'Zadaj množstvo a jednotku ingredienciee'
            name = {'ingredientQuantity' + count}
        />
    </>
  )
}

export default Inputs