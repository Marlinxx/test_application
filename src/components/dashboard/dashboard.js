import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Button from '../../UI/button/button';
import * as actions from '../../redux-store/actions/actions';
import Loader from '../../UI/loader/loader';
import './dashboard.css';

const dashboard = (props) => {
    return (
        <Fragment>
            {props.isLoading && <Loader />}
            <p>Dashboard to create and manipulate records in DB</p>
            <Button label={'Generate data'} clickHandler={() => { props.onGenerateData() }} />
            <Button label={'Reset data'} clickHandler={() => { props.onResetData() }} />
            <Button label={'Delete data'} clickHandler={() => { props.onDeleteData() }} />
            <Button label={'Expire data'} clickHandler={() => { props.onExpireData() }} />

            <div className='info'>
                <span>Note</span>
                <ul>
                    <li>Generate Data button creates 10,000 rows of default values in DB</li>
                    <li>Reset Data button deletes rows from DB</li>
                    <li>Delete Data button sets all the records with 'Active Indicator' to 'N'</li>
                    <li>Expire Data button sets all the records with 'Expiry date' to curren date</li>
                </ul>
            </div>
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