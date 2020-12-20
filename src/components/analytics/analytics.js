import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import HighChart from '../../UI/highChart/highChart';
import * as actions from '../../redux-store/actions/actions';
import months from '../../utils/monthConst';
import Loader from '../../UI/loader/loader';
import './analytics.css';

const Analytics = (props) => {

    useEffect(() => {
        props.getData();
    }, []);

    const pieChartOptions = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Pie chart'
        },
        series: [
            {
                name: 'Records',
                data: [{
                    name: 'Active',
                    y: props.activeRecords
                },
                {
                    name: 'Inactive',
                    y: props.inActiveRecords
                }]
            }
        ]
    };

    const lineChartOptions = {
        chart: {
            type: 'line'
        },
        xAxis: {
            categories: months
        },
        title: {
            text: 'Line chart'
        },
        series: [{
            name: 'Active Records',
            data: props.stats
        }]
    };

    return (
        <Fragment>
            {props.isLoading && <Loader />}
            <p>Analytics of the records in DB</p>
            {props.isError && <div className='errorMsg'>{props.errorMessage}</div>}
            <div className='chartsGroup'>
                <HighChart options={pieChartOptions} />
                <HighChart options={lineChartOptions} />
            </div>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        activeRecords: state.activeRecords,
        inActiveRecords: state.inActiveRecords,
        isLoading: state.isLoading,
        isError: state.isError,
        errorMessage: state.errorMessage,
        stats: state.stats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(actions.getData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);