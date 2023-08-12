import { useState } from "react";

// štýly
import "./Buttons.scss";

const Buttons = () => {
  const [title, setTitle] = useState("Prvý title");
  const [textBtn, setTextBtn] = useState("Zmeniť text tlačidla");

  const btnHandler1 = () => {
    setTitle("Nový title");
  };

  const btnHandler2 = () => {
    setTitle("Novší title");
  };

  const btnHandler3 = () => {
    setTitle("");
  };

  const btnHandler4 = () => {
    setTextBtn("Zmenený text");
  };

  return (
    <div className="text-button-changer">
      <h2>{title}</h2>
      <button onClick={btnHandler1}>Zmeniť title</button>
      <button onClick={btnHandler2}>Opäť zmeniť title</button>
      <button onClick={btnHandler3}>Vymazať title</button>
      <button onClick={btnHandler4}>{textBtn}</button>
    </div>
  );
};

export default Buttons;
