import React from 'react';

const PhotosCount = (props) => {
  const { totalPhotos } = props;

  return (
    <li>
      <span aria-hidden="true" className="icon">
        <svg id="18x18_friends" height="18" viewBox="0 0 18 18" width="18">
          <g>
            <svg id="18x18_camera" height="18" viewBox="0 0 18 18" width="18"><path d="M15 
            15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 
            1 2 2v7a2 2 0 0 1-2 2zM9 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 
            0-5 2.5 2.5 0 0 1 0 5z"></path></svg>
          </g>
        </svg>
      </span>
      <span className="info-text">
        <b>{totalPhotos.length}</b>
        &nbsp;photos
      </span>                      
    </li>
  )
}

export default PhotosCount;