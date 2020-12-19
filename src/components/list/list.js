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
            <p>List component works!</p>
            <Table headers={Object.keys(props.records[0] || {})}
                rows={props.records}
                onExpiryClick={() => { props.onExpiryClick()}}
                onDeleteClick={() => { props.onDeleteClick()}}
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
        onExpiryClick: () => dispatch(actions.onExpireData()),
        onDeleteClick: () => dispatch(actions.onDeleteData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);