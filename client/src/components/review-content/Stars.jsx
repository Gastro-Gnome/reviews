import React from 'react';
import css from '../../css/stars.css';

const Stars = (props) => {
  const { rating } = props;
  
  return (
    <div className="i-stars i-stars--regular-4 rating-large rating">
      <span className="stars" data-stars={rating}>XXXXX</span>
    </div>
  )
}

export default Stars;