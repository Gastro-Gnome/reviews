import React from 'react';
import css from '../../css/profile-photo.css';

const ProfilePhoto = (props) => (
  <div className="photo-box">
    <img className="profile-photo" src={props.photo}/>
  </div>
)

export default ProfilePhoto;