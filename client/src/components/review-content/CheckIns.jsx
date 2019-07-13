import React from 'react';

const CheckIns = (props) => {
  const { checkIns } = props;

  return (
  <div className="check-ins">
    <span aria-hidden="true" className="icon">
      <svg className="check-in-icon" height="18" viewBox="0 0 18 18" width="18">
        <path d="M18 9l-2.136-1.84.932-2.66-2.772-.525-.524-2.77-2.66.93L8.997 
        0 7.163 2.136 4.5 1.206l-.525 2.77-2.77.524.932 2.66L0 9l2.137 1.84-.932 2.66 2.77.525.526 2.77 2.664-.932L8.998 18l1.84-2.137 
        2.662.932.524-2.77 2.772-.524-.932-2.66L18 9zm-9.85 3.23L5.324 9.4l1.13-1.13 1.698 1.696 3.396-3.395 1.13 1.134-4.525 4.525z"></path>
      </svg>
    </span>
    <span className="check-in-text">
      &nbsp;{checkIns}&nbsp;Check-ins
    </span>
  </div>
  )
}

export default CheckIns;