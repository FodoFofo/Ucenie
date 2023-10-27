import {useState} from 'react'

// štýly
import './AppAdvancedForm.scss'

// typy
type User = {
    fullName: string;
    email: string;
    age: string;
    id?: number
  };

const AppAdvancedForm = () => {
    const [oneUser, setOneUser] = useState({fullName: '', email: '', age: ''})
    const [users, setUsers] = useState<User[]>([])

    const formChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const name = e.target.name
        const value = e.target.value

        setOneUser({...oneUser, [name]: value})
    }

    const formSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        if(oneUser.fullName && oneUser.email && oneUser.age) {
            const newUser: User = { ...oneUser, id: new Date().getTime() }

            console.log();
            

            setUsers( (users) => {return [...users, newUser]})
            setOneUser({fullName: '', email: '', age: ''})
        } else {
            alert('Je potrebné vyplniť aj meno, aj email')
        }
    }
  
    return (
    <article className='advanced-form'>
        <form onSubmit={formSubmit}>
            <input
                type="text"
                className='user-info'
                placeholder='Meno'
                value={oneUser.fullName} 
                onChange={formChange}
                name='fullName'/>
            <input
                type="email"
                className='user-info'
                placeholder='Email'
                value={oneUser.email} 
                onChange={formChange}
                name='email'/>
            <input
                type="text"
                className='user-info'
                placeholder='Vek'
                value={oneUser.age} 
                onChange={formChange}
                name='age'/>
            <input
                type="submit" />
        </form>   

        { users.map( (oneUser) => {
            const { fullName, email, age, id} = oneUser

            return <div className='item' key={id}>
                <h4>{fullName}</h4>
                <p>{email}</p>
                <p>{age}</p>
            </div>
        })} 
    </article>
  )
}

export default AppAdvancedForm