import { useEffect } from 'react'

// štýly 
import './Modal.scss'

const Modal = ({notificationContent, closeNotification}) => {

  useEffect(() => {
    setTimeout( () => {
      closeNotification()
    }, 2000)
  })

  return (
    <div className='notification'>
      {notificationContent}
    </div>
  )
}

export default Modal