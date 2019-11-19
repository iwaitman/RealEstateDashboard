import React from 'react';

const UnitsCard = props => {
  let styles = {
    width: '350px',
    height: '300px',
    position: 'absolute',
    left: '950px',
    top: '100px'
  };

  return (
    <div className='card' style={styles}>
      <div className='card-body'>
        <h3 className='card-title'>Units</h3>
      </div>
    </div>
  );
};

export default UnitsCard;
