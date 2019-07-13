import React from 'react';
import css from '../css/profile-location.css';

const ProfileLocation = (props) => {
  const shortenLocation = (location) => {
    let totalChars = location.length;
  
    if(totalChars > 19) {
      let cityState = location.split(',');
      cityState[1].trim();
      return cityState[1];
    } else {
      return location;
    }
  }
  
  return (
    <li className="profile-location">
      <b>{shortenLocation(props.location)}</b>
    </li>
  )
}

export default ProfileLocation;