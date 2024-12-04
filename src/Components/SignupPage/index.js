import {useState} from "react"

import {useNavigate} from "react-router-dom"

import "./index.css"

const SignupPage = () =>{
    const navigate = useNavigate()
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const onSignup = (event) =>{
        event.preventDefault()
        setIsFormSubmitted(true)

        navigate("/login")
    }
    return(
    <div className = "signup-page">
        <form className = "signup-form" onSubmit = {onSignup}>
            <h1 className = "signup-heading"> SignUp </h1>

            <label for = "nameInput" className = "label"> User Name: </label>
            <br />
            <input type = "text" className = "input-container" placeholder = "user name" id = "nameInput"/>

            <br />
            <label for = "mobileNumber" className = "label"> Mobile No: </label>
            <br />
            <input type = "text" className = "input-container" placeholder = "Mobile Number" id = "mobileNumber"/>

            <br />
            <label for = "email" className = "label"> Email: </label>
            <br />
            <input type = "text" className = "input-container" placeholder = "Email" id = "email"/>

            <br />
            <label for = "password" className = "label"> Set Password: </label>
            <br />
            <input type = "password" className = "input-container" placeholder = "password" id = "password" required/>
            <br />

            <button className = "login-btn signup-btn" type = "submit"> Signup </button> 
            {isFormSubmitted && <p className = ""> Redirecting to login page... </p>}
        </form>
    </div>
)
}

export default SignupPage