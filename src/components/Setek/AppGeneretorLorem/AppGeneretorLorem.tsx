import { useState } from 'react'

// dáta
import data from './data'

// štýly
import './AppGeneretorLorem.scss'

const AppGeneretorLorem = () => {
    const [count, setCount] = useState<string>('0')
    const [paragraphs, setParagraphs] = useState<string[]>([])

    const formSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        
        let amount = parseInt(count)

        if(amount<0) amount = 1
        else if(amount>5) amount = 5

        setParagraphs(data.slice(0, amount));
    }

    return (
        <section className='app-generetor-lorem'>
            <form onSubmit={formSubmit}>
                <label htmlFor="paragraphs">Odstavce: </label>
                <input 
                    type="number"
                    id='paragraphs' 
                    onChange={(e) => setCount(e.target.value)}/> <br />    
                <input
                    type="submit" 
                    value='Generovať'/>
            </form>
            <article>
                {paragraphs.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>
                })}
            </article>
        </section>
  )
}

export default AppGeneretorLorem