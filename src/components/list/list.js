import React, { Fragment } from 'react';

import Table from '../../UI/table/table';
const list = () => {
    const headers = ['header1', 'header2'];
    const rows = [
        {
            header1: 'header1Value1',
            header2: 'header2Value1'
        },
        {
            header1: 'header1Value2',
            header2: 'header2Value2'
        }
    ]
    return (
        <Fragment>
            <p>List component works!</p>
            <Table headers={headers} rows={rows}></Table>
        </Fragment>
    );
}
export default list;