import React from 'react';
import Button from "./UI/button/Button";

function ButtonGroup({items, getCal}) {
    return (
        <div className="d-flex">
            {items.map(item => <Button key={item} getCal={getCal} > {item}</Button>)}
        </div>
    );
}

export default ButtonGroup;