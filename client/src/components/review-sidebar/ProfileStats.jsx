import React from 'react';
import css from '../../css/profile-stats.css';
import ProfileName from './ProfileName';
import ProfileLocation from './ProfileLocation';
import FriendsCount from './FriendsCount';
import ReviewsCount from './ReviewsCount';
import PhotosCount from './PhotosCount';
import MemberLevel from './MemberLevel';

const ProfileStats = (props) => {
  const {
    profileName,
    location,
    totalFriends,
    totalReviews,
    totalPhotos,
    level } = props;

  return (
    <ul className="profile-details">
      <ProfileName name={profileName} />
      <ProfileLocation location={location} />
      <FriendsCount totalFriends={totalFriends} />
      <ReviewsCount totalReviews={totalReviews} />
      <PhotosCount totalPhotos={totalPhotos} />
      <MemberLevel level={level} />
    </ul>
  )
}

export default ProfileStats;