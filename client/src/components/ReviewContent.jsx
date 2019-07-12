import React from 'react';
import css from '../css/review-content.css';
import HoverCard from './HoverCard.jsx';

function ReviewContent(props) {

  return (
      <div className="review-wrapper">
        <div className="i-stars i-stars--regular-4 rating-large" title="4.0 star rating">
          <img className="offscreen" height="303" src="https://reviewassets.s3-us-west-1.amazonaws.com/stars.png" width="84" alt="4.0 star rating"/>
        </div>
        <div className="check-ins">
          <span aria-hidden="true" className="icon">
            <svg className="check-in-icon" height="18" viewBox="0 0 18 18" width="18">
              <path d="M18 9l-2.136-1.84.932-2.66-2.772-.525-.524-2.77-2.66.93L8.997 
              0 7.163 2.136 4.5 1.206l-.525 2.77-2.77.524.932 2.66L0 9l2.137 1.84-.932 2.66 2.77.525.526 2.77 2.664-.932L8.998 18l1.84-2.137 
              2.662.932.524-2.77 2.772-.524-.932-2.66L18 9zm-9.85 3.23L5.324 9.4l1.13-1.13 1.698 1.696 3.396-3.395 1.13 1.134-4.525 4.525z"></path>
            </svg>
          </span>
          <span className="review-date">
          &nbsp;2 check-ins
          </span>
        </div>
        <div className="text-content">
          <p lang="en">
            {/* {props.reviews[0].text} */}
            Lucas $17.75: I love this pizza. All the toppings go so well together. Anytime I have a 
            pizza with prosciutto anywhere else, I compare it Archive's Lucas and it doesn't come close!
            <br/>
            <br/>
            Margherita $15.50: A classic. The right amount of sauce. Good crust. I usually stick to the 
            Lucas but I'm glad I gave this one a try too.
            <br/>
            <br/>
            Half a pizza is usually enough for my lunch, and I save the other half for a snack later.
            <br/>
            <br/>
            *****
            <br/>
            <br/>
            My Star Ratings:
            <br/>
            1 Star - Terrible. Just thinking about it makes me angry.
            <br/>
            2 Stars - Meh. Unlikely for me to return.
            <br/>
            3 Stars - OK. Open to coming back, but wouldn't go out of my way to.
            <br/>
            4 Stars - Yummy! Will definitely return if I haven't already.
            <br/>
            5 Stars - AMAZING!!! Would plan my day or even a trip around eating here.
          </p>
        </div> 
        <div className="review-photos">
          <img src="https://source.unsplash.com/random/348x348"/>
          <img src="https://source.unsplash.com/random/168x168"/>
          &nbsp;&nbsp;&nbsp;
          <img src="https://source.unsplash.com/random/168x168"/>
        </div>
        <div className="was-it-helpful">
        &nbsp; Was this review ...?
        </div>
        <div className="review-content-footer">
            <span className="useful-vote">
              <span aria-hidden="true" className="icon">
                <svg className="useful-icon" height="18" viewBox="0 0 18 18" width="18">
                  <path d="M9 17c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM9 
                  2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm2 8.392V12H7v-1.608a3.982 
                  3.982 0 0 1-2-3.445 4 4 0 0 1 8 0c0 1.477-.81 2.752-2 3.445zM8 5.25a.75.75 
                  0 1 0 0 1.5.75.75 0 0 0 0-1.5zm1.003 9.747h-.006A1.997 1.997 0 0 1 7 
                  13h4a1.997 1.997 0 0 1-1.997 1.997z"></path>
                </svg>
              </span>
              <span className="vote-type">Useful</span>
            </span>
            <span className="funny-vote">
              <span aria-hidden="true" className="icon">
                <svg className="funny-icon" height="18" viewBox="0 0 18 18" width="18">
                  <path d="M9 17c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM9 2C5.14 2 2 5.14 2 
                  9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12a4.87 4.87 0 0 1-4.787-4h9.574A4.87 4.87 0 0 1 9 
                  14zm2.5-5.625a1.376 1.376 0 1 1 0-2.75 1.376 1.376 0 0 1 0 2.75zm-5 0a1.376 1.376 0 1 1 0-2.75 
                  1.376 1.376 0 0 1 0 2.75z"></path>
                </svg>
              </span>
              <span className="vote-type">Funny</span>
            </span>
            <span className="cool-vote">
              <span aria-hidden="true" className="icon">
                <svg className="cool-icon" height="18" viewBox="0 0 18 18" width="18">
                  <path d="M9 17c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM9 2C5.14 2 2 5.14 2 
                  9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm6.026 5.335C14.766 8.797 13.5 10 11.986 10h-.003c-1.218 
                  0-2.282-.764-2.767-1.813-.088-.19-.344-.242-.432-.052C8.3 9.185 7.234 10 6.016 10h-.003C4.5 
                  10 3.195 8.83 2.973 7.35l-.093-.84c-.053-.242.192-.51.477-.51h11.286c.294 0 .508.332.477.56l-.094.775zm-2.068 
                  4.154A4.28 4.28 0 0 1 9 14.144a4.28 4.28 0 0 1-3.958-2.657A6.81 6.81 0 0 0 9 12.753a6.81 6.81 0 0 0 3.958-1.265z"></path>
                </svg>
              </span>
              <span className="vote-type">Cool</span>
            </span>
        </div>
      </div>
  )
}

export default ReviewContent;