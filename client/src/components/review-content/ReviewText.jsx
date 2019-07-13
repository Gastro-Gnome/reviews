import React from 'react';

const ReviewText = (props) => {
  const { text } = props;

  return (
    <div className="text-content" dangerouslySetInnerHTML={{__html: text}}>
    </div> 
  )
}

export default ReviewText;