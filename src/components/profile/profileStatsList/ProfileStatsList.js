import React from 'react';
import ProfileStatsListItem from './profileStatsListItem/ProfileStatsListItem';
import PropTypes from 'prop-types';
import s from './ProfileStatsList.module.css';

const ProfileStatsList = ({ stats }) => {
  const StatsItems = Object.keys(stats);
  return (
    <ul className={`${s.stats} list`}>
      {StatsItems.map(item => (
        <ProfileStatsListItem key={item} label={item} quantity={stats[item]} />
      ))}
    </ul>
  );
};

ProfileStatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};

export default ProfileStatsList;
