import React from 'react';
import PropTypes from 'prop-types';
import s from './ProfileDescription.module.css';

const ProfileDescription = ({ username, tag, location }) => {
  return (
    <div className={s.description}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        className={s.avatar}
      />
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
};

export default ProfileDescription;
