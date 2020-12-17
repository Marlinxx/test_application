import React , {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const navigation = () => {
    return (
        <Fragment>
            <nav className='navTab'>
                <NavLink to='/dashboard' activeClassName="activeTab">Dashboard</NavLink>
                <NavLink to='/analytics' activeClassName="activeTab">Analytics</NavLink>
                <NavLink to='/list' activeClassName="activeTab">List</NavLink>
            </nav>
        </Fragment>
    );
}
export default navigation;