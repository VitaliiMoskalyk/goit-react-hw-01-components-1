import React from 'react';
import PropTypes from 'prop-types';
import ProfileDescription from './profileDescription/ProfileDescription';
import ProfileStatsList from './profileStatsList/ProfileStatsList';
import s from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      {stats && <ProfileStatsList stats={stats} />}
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
