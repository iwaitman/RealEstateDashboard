import React from 'react';
import CashFlowChart from '../../components/CashFlowChart.js';

const CashFlowCard = props => {
  let styles = {
    width: '710px',
    height: '400px',
    position: 'absolute',
    left: '100px',
    top: '100px'
  };

  return (
    <div className='card' style={styles}>
      <div className='card-body'>
        <h3 className='card-title'>Cash Flow Overview</h3>
        <CashFlowChart />
      </div>
    </div>
  );
};

export default CashFlowCard;
