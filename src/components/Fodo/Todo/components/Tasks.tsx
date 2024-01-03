// childrens
import Task from "./Task"

// styles
import './Tasks.scss'

// types
import { TaskType } from "../types"

type Props = {
  tasks: TaskType[]
  deleteTask: (id:number) =>void
  startUpdating: (data: TaskType) => void
  setAddOrEditTask: () => void
}

const Tasks = (props: Props) => {
  
  // pridanie novej úhlohy
  const novaUloha = () => {
    props.setAddOrEditTask();
  }

  return (
    <div className="tasks">
        <h1>Zoznam úlôh</h1>
        {props.tasks.map( (task) => {
            return(
              <Task 
                key = { task.id }
                task = { task }
                deleteTask = { props.deleteTask }
                update = { props.startUpdating }
              />
            )
        })}

        <button onClick={novaUloha}>Nová úloha</button>
    </div>
  )
}

export default Tasks