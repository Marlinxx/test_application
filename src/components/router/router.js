import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Analytics from '../analytics/analytics';
import List from '../list/list';
import Dashboard from '../dashboard/dashboard';

const Router = () => {
return (
    <Fragment>
        <Route path='/' component={Dashboard} exact/>
        <Route path='/analytics' component={Analytics} />
        <Route path='/list' component={List} />
    </Fragment>
);
}
export default Router;