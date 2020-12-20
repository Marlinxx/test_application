import React, { Fragment } from 'react';

import Button from '../button/button';
import './search.css';

const Search = (props) => {

    const onSearch = () => {
        let id = document.getElementById('searchText').value;
        props.onSearch(id);
    }

    return (
        <Fragment>
            <input type='text' placeholder='enter id to search' id='searchText' className='inputBox'>
            </input>
            <Button label='Search' clickHandler={onSearch}></Button>
        </Fragment>
    );
}
export default Search;