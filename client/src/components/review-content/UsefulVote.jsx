import React from 'react';

const UsefulVote = (props) => {
  const { usefulCount } = props;
  let clicked = false;

  const handleUsefulClick = () => {
    if(clicked) {
      clicked = false;
      console.log(clicked);
      return 'useful-vote';
    } else {
      clicked = true;
      console.log(clicked);
      return 'useful-vote-clicked';
    }
  }
  
  return (
    <span className={clicked ? handleUsefulClick : 'useful-vote'} onClick={handleUsefulClick}>
      <span aria-hidden="true" className="icon useful-vote-icon">
        <svg className="useful-icon" height="18" viewBox="0 0 18 18" width="18">
          <path d="M9 17c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM9 
          2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm2 8.392V12H7v-1.608a3.982 
          3.982 0 0 1-2-3.445 4 4 0 0 1 8 0c0 1.477-.81 2.752-2 3.445zM8 5.25a.75.75 
          0 1 0 0 1.5.75.75 0 0 0 0-1.5zm1.003 9.747h-.006A1.997 1.997 0 0 1 7 
          13h4a1.997 1.997 0 0 1-1.997 1.997z"></path>
        </svg>
      </span>
      <span className="vote-type useful-vote-type">Useful</span>
    </span>
  )
}

export default UsefulVote;