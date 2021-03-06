import React from 'react';
import css from '../../css/hovercard.css';

const HoverCard = (props) => {
  let isHovered = props.isHovered;
  let fadeClass = 'social-connect';

  if(isHovered) {
    fadeClass = 'social-connect fade-in';
  }

  return (
    <div className="social-connect">
      <div>
        <span aria-hidden="true" className="icons share-review">
          <svg id="18x18_friends" height="18" viewBox="0 0 18 18" width="18">
            <g>
              <path d="M17.714 6.43L13 10.356v-3.03c-1 
              0-5.097 1.47-6.286 3.62.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 
              3.93zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z"></path>
            </g>
          </svg>
          <span className="share-review">
            &nbsp; Share review
          </span>   
        </span>
      </div>
      <div>
        <span aria-hidden="true" className="icons embed-review">
          <svg id="18x18_friends" height="18" viewBox="0 0 18 18" width="18">
            <g>
              <path d="M12.503 13.76a.717.717 0 0 1-.526.23.717.717 0 0 1-.526-.23.822.822 
              0 0 1 0-1.117l3.444-3.652-3.444-3.65a.822.822 0 0 1 0-1.116.714.714 0 0 1 
              1.053 0l4.495 4.77-4.495 4.767zm-5.954 0a.717.717 0 0 1-.528.23.718.718 0 0 
              1-.526-.23L1.002 8.99l4.495-4.768a.714.714 0 0 1 1.052 0c.29.308.29.808 0 
              1.116L3.105 8.99l3.442 3.653c.29.308.29.808 0 1.116z"></path>
            </g>
          </svg>
          <span className="embed-review">
            &nbsp; Embed review
          </span>   
        </span>
      </div>
      <div>
        <span aria-hidden="true" className="icons compliment-review">
          <svg id="18x18_friends" height="18" viewBox="0 0 18 18" width="18">
            <g>
              <path d="M14.5 6.75a5.5 5.5 0 0 0-11 0 5.495 5.495 0 0 0 2.993 4.892L5.5 
              16.75l3.505-2 3.495 2-.993-5.108A5.495 5.495 0 0 0 14.5 6.75zm-5.5 4c-2.206 
              0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path>
            </g>
          </svg>
          <span className="embed-review">
            &nbsp; Compliment
          </span>   
        </span>
      </div>
      <div>
        <span aria-hidden="true" className="icons send-message">
          <svg id="18x18_friends" height="18" viewBox="0 0 18 18" width="18">
            <g>
            <path d="M2 4v6a2 2 0 0 0 2 2h1v3l4-3h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
            </g>
          </svg>
          <span className="embed-review">
            &nbsp; Send Message
          </span>   
        </span>
      </div>
      <div>
        <span aria-hidden="true" className="icons follow-user">
          <svg id="18x18_friends" height="18" viewBox="0 0 18 18" width="18">
            <g>
              <path d="M16 13l-4 3v-2H9l1-2h2v-2l4 3zm-8.925 2.383c-.443.817-1.707.817-2.15 
              0L2.128 9.605C1.728 8.868 2.31 8 3.203 8h5.594c.893 0 1.474.868 1.075 
              1.605l-2.797 5.778zM6 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
            </g>
          </svg>
          <span className="embed-review">
            &nbsp; Follow Dianna N.
          </span>   
        </span>
      </div>
    </div>
  )
}

export default HoverCard;