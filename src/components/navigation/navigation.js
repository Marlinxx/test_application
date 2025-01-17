import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
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
export default Navigation;