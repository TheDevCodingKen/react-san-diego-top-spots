import React from 'react';

// (Stateless Function) Presentational Component
export default props => (
  <div className='well card w-50 mb-3 mx-auto border-info'>
    <h4 className='card-header'>{props.name}</h4>
    <p className='card-body'>{props.description}</p>
    <a href={ `https://maps.google.com/?q=${props.latitude},${props.longitude}` } rel='noopener noreferrer' target='_blank' className='btn btn-primary text-bg-light col-2 mx-auto'>View Location</a>
  </div>
);
