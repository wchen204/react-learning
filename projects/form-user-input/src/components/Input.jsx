import React from 'react';

function Input({label, id, error, ...props}) {
    return (
        <div className="control no-margin">
            {/* htmlFor -> for attribute in html */}
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}/>
            <div className="control-error">
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default Input;