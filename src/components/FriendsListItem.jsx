import React from 'react';
import { FriendListItem, OnlineMarker } from './FriendsList.styled.js';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItem>
      {isOnline ? (
        <OnlineMarker color="green"></OnlineMarker>
      ) : (
        <OnlineMarker color="red"></OnlineMarker>
      )}
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendListItem>
  );
};
