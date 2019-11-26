import React from 'react';
import MoreDetailButton from '../../components/MoreDetailButton';
import Metric from '../../components/Metric';

const MetricsCard = props => {
  let styles = {
    width: '710px',
    height: '260px',
    position: 'absolute',
    left: '100px',
    top: '550px'
  };

  // Because each metric will require calculation from the raw data, can't make this more DRY
  // Refactor: do the math based on historical value and cash flow data, assign to objects
  return (
    <div className='card' style={styles}>
      <div className='card-body'>
        <h3 className='card-title'>Investment Performance</h3>
        <MoreDetailButton />
        <div className='container'>
          <div className='row mt-3'>
            <span className='col-4'>
              <Metric title='Portfolio Size' metric='$11,454,000' />
            </span>
            <span className='col-4'>
              <Metric title='Annual NOI' metric='$744,500' />
            </span>
            <span className='col-4'>
              <Metric title='IRR' metric='12%' />
            </span>
          </div>
          <div className='row mt-3'>
            <span className='col-4'>
              <Metric title='12mo ROI' metric='18%' />
            </span>
            <span className='col-4'>
              <Metric title='Cash Yield' metric='$744,510' />
            </span>
            <span className='col-4'>
              <Metric title='Equity Multiple' metric='1.8' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;
