import React, {Component, Fragment} from 'react';
import Navigation from '../../components/navigation/navigation';
import Router from '../../components/router/router';
class Layout extends Component {
render() {
return (
    <Fragment>
        <Navigation />
        <Router />
    </Fragment>
);
}
}
export default Layout;