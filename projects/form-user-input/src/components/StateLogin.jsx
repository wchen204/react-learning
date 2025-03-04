import {useState} from "react";

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

    function handleSubmit(event) {
        event.preventDefault(); // prevent default form submission.
        console.log(enteredValues)

        setEnteredValues({
            email: '',
            password: ''
        })
    }

    function handleInputChange(identifier,value) {
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
        setDidEdit(prevEdit =>{
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
                <div className="control no-margin">
                    {/* htmlFor -> for attribute in html */}
                    <label htmlFor="email">Email</label>
                    <input id="email"
                           type="email"
                           name="email"
                           onBlur={()=>handleInputBlur('email')}
                           onChange={e=>handleInputChange('email', e.target.value)}
                           value={enteredValues.email}/>
                    <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password"
                           type="password"
                           name="password"
                           onChange={e=>handleInputChange('password',e.target.value)}
                           value={enteredValues.password}/>
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
