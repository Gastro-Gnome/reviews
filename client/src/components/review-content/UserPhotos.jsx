import React from 'react';

const UserPhotos = (props) => {
  const { photos } = props;

  return (
    <div className="review-photos">
      <div className="large-photo">
        <img src={photos[0]}/>

      </div>
      <span className="small-photo1">     
        <img src={photos[1]}/>
      </span> 
        &nbsp;&nbsp;&nbsp;
      <span className="small-photo2">
        <img src={photos[2]}/>
      </span>
    </div>
  )
}

export default UserPhotos;