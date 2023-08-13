// komponenty
import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";
import ResetButton from "./ResetButton";
import { useState } from "react";

const AppPocitadlo = () => {
  const [value, setValue] = useState(0);

  const decreaseOne = () => setValue(value - 1);
  const increaseOne = () => setValue(value + 1);
  const reset = () => setValue(0);

  return (
    <div className="pocitadlo">
      <h1>Počítadlo</h1>
      <h2>{value}</h2>
      <DecreaseButton decrease={decreaseOne} />
      <IncreaseButton increase={increaseOne} />
      <ResetButton reset={reset} />
    </div>
  );
};

export default AppPocitadlo;
