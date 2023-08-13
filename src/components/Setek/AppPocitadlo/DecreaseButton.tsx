type Props ={
    decrease: () => void
}

const DecreaseButton = (props: Props) => {
  return (
    <button className="btn" onClick={props.decrease}>Znižiť</button >
  )
}

export default DecreaseButton