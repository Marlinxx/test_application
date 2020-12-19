import React, { Fragment } from 'react';

import './table.css';

const table = (props) => {

    let table = <div> No records Found</div>;
    if(props.rows.length) {
        table = <table className='table'>
        <tr>
            {props.headers.map(header => <th>{header}</th>)}
            <th colspan='2'>
                Actions
            </th>
        </tr>
        {props.rows.map(row => <tr>
            {props.headers.map(header => <td>{row[header]}</td>)}
            <td><span className='action'>Expire</span></td>
            <td><span className='action'>Delete</span></td>
        </tr>)}
    </table>
    }

    return (
        <Fragment>
            {table}
        </Fragment>
    );
}

export default table;