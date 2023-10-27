import React, { useState } from 'react'

// štýly
import './AppForm.scss'

const AppForm = () => {
  const [firstName, setFirstName] = useState('')
  const [names, setNames] = useState<string[]>([])

  const formSubmit :React.FormEventHandler<HTMLFormElement> =(e) => {
    e.preventDefault()
    console.log(firstName);
    
    if(firstName) {
      setNames( (names) => {return[...names, firstName]})
      console.log(names);
      
    } else {
      alert('Napíš meno');
    }

    setFirstName('')
  }

  return (
    <article className='app-form'>
      <form onSubmit={formSubmit}>
          <input
            type="text"
            className='user-name'
            placeholder='Meno'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/>
          <input
            type="submit"
            value='Registrovať sa'/>
      </form>

      {
        names.map( (oneName, index) => {
          return <p className='item' key={index}>{oneName}</p>
        })
      }
    </article>
  )
}

export default AppForm