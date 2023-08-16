import { useState } from "react";

// komponenty
import Book from "./Book";

const AppShowHide = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Ukáž / Skry</button>
      {show && <Book />}
    </div>
  );
};

export default AppShowHide;
