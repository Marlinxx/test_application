import React, { Fragment } from 'react';

const table = (props) => {
    
    return (
        <Fragment>
            <table>
                <tr>
                    {props.headers.map(header => <th>{header}</th>)}
                </tr>
                {props.rows.map(row => <tr><td>{row.header1}</td> <td>{row.header2}</td></tr>)}
            </table>
        </Fragment>
    );
}

export default table;