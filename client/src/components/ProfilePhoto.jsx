import React from 'react';

const ProfilePhoto = (props) => (
  <div className="photo-box">
    <img src={props.photo}/>
  </div>
)

export default ProfilePhoto;