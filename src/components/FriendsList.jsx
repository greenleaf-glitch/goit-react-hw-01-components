import React from 'react';
import { FriendListContainer } from './FriendsList.styled.js';
import { FriendsListItem } from './FriendsListItem.jsx';

export const FriendsList = ({ friends }) => {
  const friendsRenderArr = friends.map(item => {
    return (
      <FriendsListItem
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
      ></FriendsListItem>
    );
  });

  return <FriendListContainer>{friendsRenderArr}</FriendListContainer>;
};
