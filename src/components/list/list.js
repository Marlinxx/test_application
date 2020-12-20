import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import Table from '../../UI/table/table';
import Loader from '../../UI/loader/loader';
import * as actions from '../../redux-store/actions/actions';

const List = (props) => {
    useEffect(() => {
        props.getData();
    }, []);

    return (
        <Fragment>
            {props.isLoading && <Loader />}
            <p>List of records in DB</p>
            {props.isError && <div className='errorMsg'>{props.errorMessage}</div>}
            <Table headers={Object.keys(props.records[0] || {})}
                rows={props.records}
                onExpiryClick={(id) => { props.onExpiryClick(id)}}
                onDeleteClick={(id) => { props.onDeleteClick(id)}}
                onGetData={() => { props.getData()}}
            ></Table>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        records: state.records,
        isLoading: state.isLoading,
        isError: state.isError,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(actions.getData()),
        onExpiryClick: (id) => dispatch(actions.onExpireDataById(id)),
        onDeleteClick: (id) => dispatch(actions.onDeleteDataById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);