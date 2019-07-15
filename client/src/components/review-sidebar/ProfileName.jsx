import React from 'react';
import css from '../../css/profile-name.css';

const ProfileName = (props) => {
  return (
    <li className="profile-name">
      <a className="profile-name-link" href="http://www.yelp.com">{props.name}</a>
    </li>
  )
}

export default ProfileName;