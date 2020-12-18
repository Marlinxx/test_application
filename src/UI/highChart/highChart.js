import React, { Fragment } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const highChart = (props) => {
    return (
        <Fragment>
            <HighchartsReact highcharts={Highcharts} options={props.options} />
        </Fragment>
    );
}

export default highChart;