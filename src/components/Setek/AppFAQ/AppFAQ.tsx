// komponenty
import Question from "./components/Question";

// dáta
import question from "./data";

// štýly
import "./AppFAQ.scss";

const AppFAQ = () => {
  return (
    <div className="all-question">
      {question.map((oneQuestion) => {
        return <Question key={oneQuestion.id} {...oneQuestion} />;
      })}
    </div>
  );
};

export default AppFAQ;
