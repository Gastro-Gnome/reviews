import React from 'react';

const ReviewText = (props) => {
  const { text } = props;

  return (
    <div className="text-content">
      {text}
    </div> 
  )
}

export default ReviewText;