import React from 'react';
import UnitsOverview from '../../components/UnitsOverview';
import MoreDetailButton from '../../components/MoreDetailButton';
import Metric from '../../components/Metric';

const UnitsCard = props => {
  let styles = {
    width: '350px',
    height: '300px',
    position: 'absolute',
    left: '950px',
    top: '100px'
  };

  let UnitNumber = 184;

  return (
    <div className='card' style={styles}>
      <div className='card-body'>
        <h3 className='card-title'>Units: {UnitNumber}</h3>
        <MoreDetailButton />
        <div className='row d-flex justify-content-around mt-4'>
          <Metric title='Vacant' metric='12' />
          <Metric title='Occupied' metric='164' />
          <Metric title='Unlisted' metric='8' />
        </div>
        <UnitsOverview />
      </div>
    </div>
  );
};

export default UnitsCard;
