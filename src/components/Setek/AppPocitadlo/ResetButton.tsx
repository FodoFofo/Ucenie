type Props ={
    reset: () => void
}

const ResetButton = (props: Props) => {
  return (
    <button className="btn" onClick={props.reset}>Reset</button >
  )
}

export default ResetButton