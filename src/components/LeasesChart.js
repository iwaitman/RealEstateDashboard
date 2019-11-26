import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class LeasesChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['<30 days', '31-60 days', '61-90 days'],
        legend: {
          position: 'bottom'
        }
      },
      series: [12, 15, 11]
    };
  }

  render() {
    return (
      <div id='chart'>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type='donut'
          width='300'
        />
      </div>
    );
  }
}

export default LeasesChart;
