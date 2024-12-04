import {useState} from "react"

import {useNavigate} from "react-router-dom"

import "./index.css"

const LoginPage = () =>{
    const Navigate = useNavigate()
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const onSubmitForm = (event) =>{
        event.preventDefault()
        setIsFormSubmitted(true)

        Navigate("/")
    }
    return(
    <div className = "login-page">
        <form className = "login-form" onSubmit = {onSubmitForm}>
            <h1 clasName = "login-heading"> Login </h1>
            <label for = "nameInput" className = "label"> User Name: </label>
            <input type = "text" className = "input-container" placeholder = "user name" id = "nameInput" required/>

            <label for = "password" className = "label"> Password: </label>
            <input type = "password" className = "input-container" placeholder = "password" id = "password" required/>

            <button className = "login-btn" type = "submit"> Login </button>
            {
                isFormSubmitted && <p className = ""> Logging in... </p>
            }
        </form>
    </div>
)
}

export default LoginPage