import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './friendListItem/FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul className={`${s.friendList} list`}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id} src={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
};

export default FriendList;
