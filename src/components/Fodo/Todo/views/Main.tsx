import { useState } from "react";

// styles
import "./Main.scss";

// data
import data from "../data";

// childrens
import Tasks from "../components/Tasks";
import AddForm from "../components/AddForm";

// types
import { TaskType } from "../types";

const ClearForm: TaskType = {
    id : 0,
    created : '',
    name : '',
    description : '',
    category : '',
    term : '',
    state : '',
    note : ''
  }

// component
const Main = () => {
  const [listOfTasks, setListOfTasks] = useState<TaskType[]>(data); // zoznam úlôh
  const [addOrEditTask, setAddOrEditTask] = useState(false); // false - skryje AddForm zobrazí Tasks, true - opačne
  const [editTask, setEditTask] = useState(false); // false - ak chcem pridať úlohu, true - ak chcem editovať úlohu
  const [formData, setFormData] = useState<TaskType>(ClearForm);


  // mazanie úlôh
  const handleDeleteTask = (id: number) => {
    setListOfTasks(
      listOfTasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  // pridávanie úloh
  const handleAddTask = (data: TaskType) => {
    setListOfTasks([...listOfTasks, data])
    setAddOrEditTask(false)
  };

  // editovanie úloh
  const startUpdating = (data: TaskType) => {
    setEditTask(true)
    setAddOrEditTask(true)
    setFormData(data)
  };

  const handleEditTask = (data: TaskType) => {
    setListOfTasks( listOfTasks.map((task) => {
      if(task.id === data.id){
        return data
      }
      return task
    }))
    setAddOrEditTask(false)
    setEditTask(false)
  };

  // template
  return (
    <div className="main">
      {addOrEditTask ? null : (
        <Tasks
          tasks={listOfTasks}
          deleteTask={handleDeleteTask}
          startUpdating={startUpdating}
          setAddOrEditTask={() => setAddOrEditTask(!addOrEditTask)}
        />
      )}

      {!addOrEditTask ? null : (
        <AddForm
          pridajUlohu={handleAddTask}
          setAddOrEditTask={setAddOrEditTask}
          changeTask={handleEditTask}
          formData={formData}
          setFormData={setFormData}
          editTask={editTask}
          setEditTask={setEditTask}
          clearForm={ClearForm}
        />
      )}

      <footer>&copy; Foďo 2023</footer>
    </div>
  );
};

export default Main;
