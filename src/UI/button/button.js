import React, { Fragment } from 'react';

import './button.css';

const button = (props) => {
return (
    <Fragment>
        <button onClick={props.clickHandler} className='customButton'>{props.label}</button>
    </Fragment>
);
}
export default button;