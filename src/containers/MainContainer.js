import React from 'react';
import CashFlowCard from './cards/CashFlowCard';
import UnitsCard from './cards/UnitsCard';
import MetricsCard from './cards/MetricsCard';
import LeaseCard from './cards/LeaseCard';

const MainContainer = props => {
  return (
    <div className=''>
      <CashFlowCard />
      <UnitsCard />
      <MetricsCard />
      <LeaseCard />
    </div>
  );
};

export default MainContainer;
