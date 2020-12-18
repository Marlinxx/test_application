import React, { Fragment } from 'react';

import HighChart from '../../UI/highChart/highChart';

const analytics = () => {
    const pieChartOptions = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6]
          }
        ]
      };
    const lineChartOptions = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6]
          }
        ]
      };
    return (
        <Fragment>
            <p>analytics page works!</p>
            <HighChart options={pieChartOptions}/>
            <HighChart options={lineChartOptions}/>
        </Fragment>
    );
}

export default analytics;