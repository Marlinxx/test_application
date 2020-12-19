import React, { Fragment, useState } from 'react';

import './table.css';

let from = 0;
let pageNo = 1;
const Table = (props) => {

    const paginationLength = 10;
    const maxPages = Math.ceil(props.rows.length / paginationLength);
    let to = (pageNo * paginationLength) < props.rows.length ? (pageNo * paginationLength) : props.rows.length;
    const [rowsToDisplay, setRowsToDisplay]  = useState('');
    let table = <div> No records Found</div>;

    const showPrevious = () => {
        if (pageNo > 1) {
            pageNo = pageNo - 1;
            from = (paginationLength * (pageNo-1));
            to = (pageNo * paginationLength) < props.rows.length ? (pageNo * paginationLength) : props.rows.length;
            setRowsToDisplay(props.rows.slice(from, to));
        }
    }

    const showNext = () => {
        if (pageNo < maxPages) {
            from = (paginationLength * pageNo);
            pageNo = pageNo + 1;
            to = (pageNo * paginationLength) < props.rows.length ? (pageNo * paginationLength) : props.rows.length;
            setRowsToDisplay(props.rows.slice(from, to));
        }
    }
    if (props.rows.length) {
        table =
            <div >
                <table className='table'>
                    <thead>
                        <tr>
                            {props.headers.map((header, index) => <th key={index}>{header}</th>)}
                            <th colSpan='2'>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.rows.slice(from, to).map(row => <tr key={row['Id']}>
                            {props.headers.map((header, index) => <td key={index}>{row[header]}</td>)}
                            <td><span className='action' onClick={() => props.onExpiryClick(row['Id'])}>Expire</span></td>
                            <td><span className='action' onClick={() => props.onDeleteClick(row['Id'])}>Delete</span></td>
                        </tr>)}
                    </tbody>
                </table>
                <div className='pagination'>
                    showing {from + 1} - {to} of {props.rows.length}
                    <span className='paginationAction' onClick={() => { showPrevious() }}>Previous</span>
                    <span className='paginationAction' onClick={() => { showNext() }}>Next</span>
                </div>
            </div >
    }

    return (
        <Fragment>
            {table}
        </Fragment>
    );
}

export default Table;