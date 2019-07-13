import React from 'react';

const FriendsCount = (props) => {
  const { totalFriends } = props;

  return (
    <li className="social-profile-info">
    <span aria-hidden="true" className="icon">
      <svg height="18" viewBox="0 0 18 18" width="18">
        <g>
          <path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 
          9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 
          1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
          <path d="M15.904 9.43l-2.098 4.697a.89.89 0 0 1-.806.498.89.89 0 0 
          1-.806-.498L10.096 9.43a.902.902 0 0 1 .806-1.305h4.195c.67 0 
          1.106.705.807 1.305zM13 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" 
          opacity=".502"></path>
        </g>
      </svg>
    </span>
    <span className="info-text">
      <b>{totalFriends.length}</b>
      &nbsp;friends
    </span>
    </li>      
  )
}

export default FriendsCount;