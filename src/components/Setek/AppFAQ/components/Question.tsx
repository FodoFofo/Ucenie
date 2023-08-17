import { useState } from "react";

// štýly
import './Question.scss' 

// typy
type QuestionType ={
    title: string
    info: string
}

const Question = ({title, info}: QuestionType) => {
  const [show, setShow] = useState(false);

  return (
    <div className="one-question">
      <section>
        <h2>{title}</h2>
        <button onClick={() => setShow(!show)}>Odpoveď</button>
      </section>
      {show && <p>{info}</p>}
    </div>
  );
};

export default Question;
