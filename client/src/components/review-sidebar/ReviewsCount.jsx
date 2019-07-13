import React from 'react';

const ReviewsCount = (props) => {
  const { totalReviews } = props;

  return (
    <li className="reviews-social-profile-info">
      <span aria-hidden="true" className="icon">
        <svg height="18" viewBox="0 0 18 18" width="18">
          <g>
            <svg height="18" viewBox="0 0 18 18" width="18"><path d="M13 3H5c-1.1 0-2 .9-2 
            2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.55L6.526 
            12.7 7 9.934 5 7.977l2.766-.404L8.97 4.7l1.264 2.873L13 7.977l-2 1.957.495 
            2.71z"></path></svg>
          </g>
        </svg>
      </span>
      <span className="info-text reviews-info-text">
        <b>{totalReviews}</b>
        &nbsp;reviews
      </span>                      
    </li>   
  )
}

export default ReviewsCount;