import React from 'react';
import css from '../css/review-sidebar.css';

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
                  <li className="friend-count">
                    <b>49</b>
                    &nbsp; friends &nbsp;&nbsp;&nbsp;&nbsp;
                  </li>
                  <li>
                    <b>353</b>
                    &nbsp; reviews &nbsp;&nbsp;&nbsp;&nbsp;                      
                  </li>
                  <li>
                    <b>1000</b>
                    &nbsp; photos &nbsp;&nbsp;&nbsp;&nbsp;                      
                  </li>
                  <li className="is-elite responsive-small-display-inline-block">
                    &nbsp; Elite ’19 &nbsp;&nbsp;&nbsp;&nbsp;
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSidebar;