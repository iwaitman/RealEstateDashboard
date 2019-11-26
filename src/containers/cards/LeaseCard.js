import React from 'react';
import MoreDetailButton from '../../components/MoreDetailButton';
import LeasesChart from '../../components/LeasesChart';
import Metric from '../../components/Metric';

const LeaseCard = props => {
  let styles = {
    width: '350px',
    height: '350px',
    position: 'absolute',
    left: '950px',
    top: '510px'
  };

  return (
    <div className='card' style={styles}>
      <div className='card-body'>
        <h3 className='card-title'>Leases</h3>
        <MoreDetailButton />
        <LeasesChart />
        <span id='expiring-soon'>
          <Metric title='Expiring Soon' metric='38' />
        </span>
      </div>
    </div>
  );
};

export default LeaseCard;
