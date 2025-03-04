import {useState} from "react";
import Input from "./Input.jsx";

export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });


    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    })

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
    const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length <= 6;

    function handleSubmit(event) {
        event.preventDefault(); // prevent default form submission.
        console.log(enteredValues)

        setEnteredValues({
            email: '',
            password: ''
        })
    }

    function handleInputChange(identifier, value) {
        setEnteredValues(prevValues => {
            return {
                ...prevValues,
                [identifier]: value
            }
        })

        setDidEdit(prevState => {
            return {
                ...prevState,
                [identifier]: false
            }
        });
    }

    function handleInputBlur(identifier) {
        setDidEdit(prevEdit => {
            return {
                ...prevEdit,
                [identifier]: true
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input label="Email"
                       id="email"
                       type="email"
                       name="email"
                       onBlur={() => handleInputBlur('email')}
                       onChange={e => handleInputChange('email', e.target.value)}
                       value={enteredValues.email}
                       error={emailIsInvalid && "Please enter a valid email address"}/>

                <Input label="Password"
                       id="password"
                       type="password"
                       name="password"
                       onBlur={() => handleInputBlur('password')}
                       onChange={e => handleInputChange('password', e.target.value)}
                       value={enteredValues.password}
                       error={passwordIsInvalid && "Password must be at least 6 characters long"}/>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
