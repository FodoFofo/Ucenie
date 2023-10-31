import {useRef} from 'react'

const AppHooksUseRef = () => {
    const refInput: React.LegacyRef<HTMLInputElement> = useRef(null)
    const refHeading: React.LegacyRef<HTMLHeadingElement> = useRef(null)
    const refLink: React.LegacyRef<HTMLAnchorElement> = useRef(null)

    const formSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        
        console.log(refInput.current? refInput.current.style.backgroundColor = "red" : null);
        console.log(refHeading.current ? refHeading.current.style.color = "orange" : null);

        console.log(refHeading.current ? refHeading.current.textContent = "OrangE" : null);
        console.log(refLink.current ? refLink.current.textContent : null)
        console.log(refLink.current ? refLink.current.href : null)
        
    }
    return (
        <div>
            <h1 ref={refHeading}>Formulár</h1>
            <form onSubmit={formSubmit}>
                <input type="text" ref={refInput}/>
                <input type="submit" />
            </form>
            <a href="https://www.google.com" ref={refLink}>GOOGLE</a>
        </div>
    )
}

export default AppHooksUseRef