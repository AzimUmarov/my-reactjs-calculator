import React from 'react';
import "./Button.css"

function Button({children, getCal}) {
    return (
        <div className="button" onClick={() => getCal(children[1])}>{children}</div>
    );
}

export default Button;