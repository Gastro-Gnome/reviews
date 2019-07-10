import React from 'react';
import css from '../css/review-sidebar.css';

class ReviewSidebar extends React.Component {
  constructor(props) {
      super(props);
  }

  render () {
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
                    <li className="user-name">Deadhead L.</li>
                    <li className="user-location">
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
                    <li class="is-elite responsive-small-display-inline-block">
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
}

export default ReviewSidebar;