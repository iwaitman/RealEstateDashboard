import React from 'react';

function Metric(props) {
  return (
    <div id='Metric'>
      <p className='lead' id='MetricTitle'>
        {props.title}
      </p>
      <h4>{props.metric}</h4>
    </div>
  );
}

export default Metric;
