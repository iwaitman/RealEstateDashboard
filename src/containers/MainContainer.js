import React from 'react';
import CashFlowCard from './cards/CashFlowCard';
import UnitsCard from './cards/UnitsCard';

const MainContainer = props => {
  return (
    <div className=''>
      <CashFlowCard />
      <UnitsCard />
    </div>
  );
};

export default MainContainer;
