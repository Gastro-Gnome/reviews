import React from 'react';
import css from '../css/review-sidebar.css';
import HoverCard from './HoverCard.jsx'

function ReviewSidebar(props) {

  return (
    <div className="temp-site-wrapper">
      <div className="temp-feed-wrapper">
        <div className="review-sidebar">
          <div className="review-sidebar-content">
            <div className="passport media-block">
              <div className="media-avatar responsive-photo-box">
                <div className="photo-box pb-60s">
                  <img src="https://source.unsplash.com/random/60x60" />
                </div>
              </div>
              <div className="media-story">
                <ul className="user-passport-info">
                  <li className="user-name">
                  <a className="user-display-name js-analytics-click" 
                    href="/user_details?userid=o8Lpbd9-X4Ep3z-gcVdNSw" 
                    data-hovercard-id="QnudeBA_AWfn-zfltgyXng" 
                    data-analytics-label="about_me" 
                    id="dropdown_user-name">
                    Dianna N.
                  </a>
                  </li>
                  <li className="user-location responsive-hidden-small">
                    <b>San Francisco, CA</b>
                  </li>
                </ul>
                <ul className="user-passport-stats">
                  <li className="friend-count responsive-small-display-inline-block">
                    <span aria-hidden="true" className="icon">
                      <svg id="18x18_friends" height="18" viewBox="0 0 18 18" width="18">
                        <g>
                          <path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 
                          9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 
                          1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                          <path d="M15.904 9.43l-2.098 4.697a.89.89 0 0 1-.806.498.89.89 0 0 
                          1-.806-.498L10.096 9.43a.902.902 0 0 1 .806-1.305h4.195c.67 0 
                          1.106.705.807 1.305zM13 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" 
                          opacity=".502"></path>
                        </g>
                      </svg>
                    </span>
                    <span className="friends-passport">
                    <b>49</b>
                    &nbsp; friends &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </li>
                  <li>
                    <span aria-hidden="true" className="icon">
                      <svg id="18x18_friends" height="18" viewBox="0 0 18 18" width="18">
                        <g>
                          <svg id="18x18_review" height="18" viewBox="0 0 18 18" width="18"><path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.55L6.526 12.7 7 9.934 5 7.977l2.766-.404L8.97 4.7l1.264 2.873L13 7.977l-2 1.957.495 2.71z"></path></svg>
                        </g>
                      </svg>
                    </span>
                    <span className="friends-passport">
                      <b>353</b>
                      &nbsp; reviews &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>                      
                  </li>
                  <li>
                  <span aria-hidden="true" className="icon">
                      <svg id="18x18_friends" height="18" viewBox="0 0 18 18" width="18">
                        <g>
                          <svg id="18x18_camera" height="18" viewBox="0 0 18 18" width="18"><path d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>
                        </g>
                      </svg>
                  </span>
                  <span className="friends-passport">
                    <b>1000</b>
                    &nbsp; photos &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>                      
                  </li>
                  <li className="is-elite responsive-small-display-inline-block">
                    &nbsp; Elite ’19 &nbsp;&nbsp;&nbsp;&nbsp;
                  </li>
                </ul>
              </div>
            </div>
            <HoverCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSidebar;