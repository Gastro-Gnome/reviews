import React from 'react';
import css from '../css/review-content.css';
import Stars from './Stars';
import CheckIns from './CheckIns';
import ReviewText from './ReviewText';
import UserPhotos from './UserPhotos';
import UsefulVote from './UsefulVote';
import FunnyVote from './FunnyVote';
import CoolVote from './CoolVote';

const ReviewContent = (props) => {
  const { 
    rating,
    checkIns,
    text,
    photos,
    usefulCount,
    funnyCount,
    coolCount,
    level,
    voted } = props;

  return (
    <div className="review-wrapper">
      <Stars rating={rating} />
      <CheckIns checkIns={checkIns} />
      <ReviewText text={text} />
      <UserPhotos photos={photos} />
      <div className="was-it-helpful">
      &nbsp; Was this review ...?
      </div>
      <div className="review-content-footer">
        <UsefulVote usefulCount={usefulCount} />
        <FunnyVote funnyCount={funnyCount} />
        <CoolVote coolCount={coolCount} />
      </div>
    </div>
  )
}

export default ReviewContent;