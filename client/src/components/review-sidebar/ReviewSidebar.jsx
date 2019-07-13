import React from 'react';
import css from '../../css/review-sidebar.css';
import HoverCard from './HoverCard.jsx';
import ProfilePhoto from './ProfilePhoto';
import ProfileStats from './ProfileStats';

function ReviewSidebar(props) {
  let handleHover = props.handleHover;
  const {
    profileImage,
    profileName,
    location,
    totalFriends,
    totalReviews,
    totalPhotos } = props;

  const fadeIn = () => handleHover();

  return (
    <div className="profile-wrapper" onMouseOver={fadeIn}>
      <ProfilePhoto photo={profileImage} />
      <ProfileStats 
        profileName={profileName}
        location={location}
        totalFriends={totalFriends}
        totalReviews={totalReviews}
        totalPhotos={totalPhotos} />
      <HoverCard isHovered={props.isHovered}/>
    </div>
  )
}

export default ReviewSidebar;