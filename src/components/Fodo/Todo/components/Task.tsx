// styles
import './Task.scss'
import { FaEdit, FaRegTrashAlt, FaTimesCircle, FaTrashAlt  } from 'react-icons/fa'

// types
import { TaskType } from '../types'


type Props = {
  task: TaskType
  deleteTask: (id:number) => void
  update: (data: TaskType) => void
}

const Task = (props: Props) => {
  const { task } = props

  return (
  <div className='all-task'>
    <div key={task.id} className='task'>
        <h1>{task.name}</h1>
        <p>{task.description}</p>
    </div>
    <div className="buttons">
      <button onClick={ () => props.update(task) } title="Editovať úlohu"><FaEdit /></button>
      <button onClick={ () => props.deleteTask(task.id) } title="Vymazať úlohu"><FaTrashAlt/></button>
    </div>
  </div>
  )
}

export default Task