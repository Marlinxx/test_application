import React, { Fragment } from 'react';

import Button from '../../UI/button/button';

const dashboard = () => {
    return (
        <Fragment>
            <div>Dashboard works fine!</div>
            <Button label={'Generate data'} clickHandler={() => { }} />
            <Button label={'Reset data'} clickHandler={() => { }} />
            <Button label={'Expire data'} clickHandler={() => { }} />
        </Fragment>
    );
}

export default dashboard;