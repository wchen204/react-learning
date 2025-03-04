import {useRef, useState} from "react";

export default function Login() {
    const [emailIsInvalidate, setEmailIsInvalidate] = useState(false)
    // create a reference object.
    const email = useRef();
    const password = useRef();

    function handleSubmit(event) {
        event.preventDefault(); // prevent default form submission.

        // current is a property of the reference object that points to the actual DOM element.
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        console.log( enteredEmail, enteredPassword);
        // email.current.value = ''; // not recommended to change the value of the input element directly.
        // password.current.value = '';


        const emailIsValid = enteredEmail.includes('@');


        if (!emailIsValid){
            setEmailIsInvalidate(true)
            return;
        }

        setEmailIsInvalidate(false)

        event.target.reset(); // reset the form.
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    {/* htmlFor -> for attribute in html */}
                    <label htmlFor="email">Email</label>
                    <input id="email"
                           type="text"
                           name="email" ref={email}/>{/* attach the reference object to the input element */}
                    <div className="control-error">
                        {emailIsInvalidate && <p>Please enter a valid email address.</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password"
                           type="password"
                           name="password" ref={password}/>
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
