import React, { Fragment } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './highChart.css';

const HighChart = (props) => {
    return (
        <Fragment>
            <div className='chartContainer'>
                <HighchartsReact highcharts={Highcharts} options={props.options}/>
            </div>
        </Fragment>
    );
}

export default HighChart;