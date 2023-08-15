import { useState, useEffect } from "react";

const AppUseEffect2 = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const sizeControl = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", sizeControl);

    // pri načítaní stránky sa nespustí, pri následnom vyrendrovaní
    // sa spúšta ako prvé, až potom zvyšok bloku useEffect
    return () => {
      console.log("cleanUpFunction");
      window.removeEventListener("resize", sizeControl);
    };
  });

  return (
    <div>
      <h1>Šírka okna</h1>
      <h2>{windowSize}</h2>
    </div>
  );
};

export default AppUseEffect2;
