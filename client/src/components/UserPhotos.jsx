import React from 'react';

const UserPhotos = (props) => {
  const { photos } = props;

  return (
    <div className="review-photos">
      <img src={photos[0]}/>
      <img src={photos[1]}/>
        &nbsp;&nbsp;&nbsp;
      <img src={photos[2]}/>
    </div>
  )
}

export default UserPhotos;