type Props ={
    increase: () => void
}

const IncreaseButton = (props: Props) => {
  return (
    <button className="btn" onClick={props.increase}>Zvýšiť</button >
  )
}

export default IncreaseButton