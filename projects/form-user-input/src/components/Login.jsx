import {useRef} from "react";

export default function Login() {
    // create a reference object.
    const email = useRef();
    const password = useRef();

    function handleSubmit(event) {
        event.preventDefault(); // prevent default form submission.

        // current is a property of the reference object that points to the actual DOM element.
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        console.log( enteredEmail, enteredPassword)
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
                           name="email" ref={email}/>{/* attach the reference object to the input element */}
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
