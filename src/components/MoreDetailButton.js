import React from 'react';

const MoreDetailButton = props => {
  let styles = {
    background: '#79AEA3',
    color: 'white',
    position: 'absolute',
    right: '5%',
    top: '5%'
  };

  return (
    <a href='/' className='btn' id='MoreDetailButton' style={styles}>
      More Detail
    </a>
  );
};

export default MoreDetailButton;
