import React, { Fragment } from 'react';

import './button.css';

const Button = (props) => {
return (
    <Fragment>
        <button onClick={props.clickHandler} className='customButton'>{props.label}</button>
    </Fragment>
);
}
export default Button;