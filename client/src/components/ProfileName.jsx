import React from 'react';
import css from '../css/profile-name.css';

const ProfileName = (props) => {
  return (
    <li className="profile-name">
      {props.name}
    </li>
  )
}

export default ProfileName;