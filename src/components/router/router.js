import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';

import Analytics from '../analytics/analytics';
import List from '../list/list';
import Dashboard from '../dashboard/dashboard';

const router = () => {
return (
    <Fragment>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/analytics' component={Analytics} />
        <Route path='/list' component={List} />
        <Redirect from='/' to='/dashboard'></Redirect>
    </Fragment>
);
}
export default router;