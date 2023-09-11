import React from 'react';

import {
  ProfileContainer,
  ProfileDescription,
  IMGContainer,
  IMG,
  StatsContainer,
  StatsItemContainer,
  StatsItemTitle,
  StatsItemValue,
  ProfileInfoContainer,
} from './Profile.styled.js';

import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileContainer>
      <ProfileDescription>
        <IMGContainer>
          <IMG src={avatar} alt="card__image" />
        </IMGContainer>
        <ProfileInfoContainer>
          <p>{username}</p>
          <p>{`@${tag}`}</p>
          <p>{location}</p>
        </ProfileInfoContainer>

        <StatsContainer>
          <StatsItemContainer>
            <StatsItemTitle>Followers:</StatsItemTitle>
            <StatsItemValue>{followers}</StatsItemValue>
          </StatsItemContainer>
          <StatsItemContainer>
            <StatsItemTitle>Views:</StatsItemTitle>
            <StatsItemValue>{views}</StatsItemValue>
          </StatsItemContainer>
          <StatsItemContainer>
            <StatsItemTitle>Likes:</StatsItemTitle>
            <StatsItemValue>{likes}</StatsItemValue>
          </StatsItemContainer>
        </StatsContainer>
      </ProfileDescription>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
