import {useState} from "react";

export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

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
                           onChange={e=>handleInputChange('email', e.target.value)}
                           value={enteredValues.email}/>
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
