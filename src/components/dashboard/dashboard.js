import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Button from '../../UI/button/button';
import * as actions from '../../redux-store/actions/actions';
import Loader from '../../UI/loader/loader';

const dashboard = (props) => {
    return (
        <Fragment>
            {props.isLoading && <Loader />}
            <div>Dashboard works fine!</div>
            <Button label={'Generate data'} clickHandler={() => { props.onGenerateData() }} />
            <Button label={'Reset data'} clickHandler={() => { props.onResetData() }} />
            <Button label={'Delete data'} clickHandler={() => { props.onDeleteData() }} />
            <Button label={'Expire data'} clickHandler={() => { props.onExpireData() }} />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        isError: state.isError,
        errorMessage: state.errorMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGenerateData: () => dispatch(actions.onGenerateData()),
        onResetData: () => dispatch(actions.onResetData()),
        onDeleteData: () => dispatch(actions.onDeleteData()),
        onExpireData: () => dispatch(actions.onExpireData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);