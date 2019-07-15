import React from 'react';

const MemberLevel = (props) => {
  const { level } = props;

  return (
    <li className="level">
      <a className="level-link" href="https://www.yelp.com/elite">Elite ’19</a>
    </li>    
  )
}

export default MemberLevel;