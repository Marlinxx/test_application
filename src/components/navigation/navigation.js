import React , {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const navigation = () => {
    return (
        <div className='Navbar'>
            <nav className='navTab'>
                <NavLink to='/' activeClassName="activeTab" exact>Dashboard</NavLink>
                <NavLink to='/analytics' activeClassName="activeTab">Analytics</NavLink>
                <NavLink to='/list' activeClassName="activeTab">List</NavLink>
            </nav>
        </div>
    );
}
export default navigation;