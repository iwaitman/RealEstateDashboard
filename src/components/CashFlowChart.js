import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class CashFlowChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        }
      },
      series: [
        {
          name: 'Expenses',
          data: [32, 34, 36, 34, 34, 38, 37, 39, 42, 42, 43, 45]
        },
        {
          name: 'Revenue',
          data: [61, 60, 61, 64, 65, 64, 65, 66, 68, 68, 64, 68]
        }
      ]
    };
  }

  render() {
    return (
      <div className='CashFlowChart'>
        <div className='row'>
          <div className='mixed-chart'>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type='bar'
              width='650'
              height='300'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CashFlowChart;
