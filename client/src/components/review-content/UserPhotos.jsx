import React from 'react';
import css from '../../css/review-content.css';

const UserPhotos = (props) => {
  const { photos } = props;

  return (
    <div className="review-photos">
      <div className="large-photo">
        <img src={photos[0]}/>
        <div className="photo-box-overlay_caption">Lorem Large</div>
      </div>
      <div className="small-photo1">     
        <img src={photos[1]}/>
        <div className="photo-box-overlay_caption_small">Lorem Small 1</div>
      </div> 
        &nbsp;&nbsp;&nbsp;
      <div className="small-photo2">
        <img src={photos[2]}/>
        <div className="photo-box-overlay_caption_small">Lorem Small 2</div>
      </div>
    </div>
  )
}

export default UserPhotos;