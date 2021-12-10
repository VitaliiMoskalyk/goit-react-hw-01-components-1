import React from 'react';
import PropTypes from 'prop-types';
import s from './ProfileDescription.module.css';
import defaultAvatar from './defaultAvatar.png';

const ProfileDescription = ({
  username,
  tag,
  location,
  avatar = defaultAvatar,
}) => {
  return (
    <div className={s.description}>
      <img src={avatar} alt="User avatar" className={s.avatar} />
      <p className={s.name}>{username}</p>
      {tag && <p className={s.tag}>@{tag}</p>}
      {location && <p className={s.location}>{location}</p>}
    </div>
  );
};

ProfileDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export default ProfileDescription;
