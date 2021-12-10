import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import defaultAvatar from './defaultAvatar.png';

const FriendListItem = ({ src = defaultAvatar, name, isOnline = false }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img
        className={s.avatar}
        src={src || defaultAvatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
