import { useState } from "react";

// dáta
import data from "./data";

// štýly
import "./AllTasks.scss";

// typy
type Task = {
  id: number;
  name: string;
};

const Allasks = () => {
  const [myTask, setMyTask] = useState(data);

  const taskHandler = (id: number) => {
    const filteredTasks = myTask.filter((oneTask: Task) => {
      return oneTask.id !== id;
    });
    setMyTask(filteredTasks);
  };

  const allDeleteHandler = () => {
    setMyTask([]);
  };

  return (
    <div>
      {myTask.map((oneTask: Task) => {
        const { id, name } = oneTask;

        return (
          <div className="one-task" key={id}>
            <h4>{name}</h4>
            <button onClick={() => taskHandler(id)}>
              Vymazať
            </button>
          </div>
        );
      })}
      <button className="main-button" onClick={allDeleteHandler}>
        Vymazať všetko
      </button>
    </div>
  );
};

export default Allasks;
