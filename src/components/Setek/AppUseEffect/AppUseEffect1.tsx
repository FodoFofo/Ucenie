import { useEffect, useState } from "react";

const AppUseEffect = () => {
  const [value, setValue] = useState(0);
  const [test, setTest] = useState(0);

  useEffect(() => {
    const button = document.querySelector(".btnn");

    if (button) {
      if (value >= 1) {
        button.textContent = `Klik číslo ${value}`;
      } else {
        button.textContent = "Klikni";
      }
    }
  }, [value]); // spustí sa iba pri zmene hodnoty value

  useEffect(() => {
    document.title = `Nový titulok ${test}`;
  }, [test]); // spustí sa iba pri zmene hodnoty test

  return (
    <div>
      <h1>Test</h1>
      <p>{value}</p>
      <button className="btnn" onClick={() => setValue(value + 1)}>
        Klikni
      </button>
      <button onClick={() => setTest(test + 1)}>Titulok</button>
    </div>
  );
};

export default AppUseEffect;
