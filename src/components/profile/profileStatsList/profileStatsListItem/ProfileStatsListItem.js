import React from 'react';
import PropTypes from 'prop-types';
import s from './ProfileStatsListItem.module.css';

const ProfileStatsListItem = ({ label, quantity = 0 }) => {
  return (
    <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.quantity}>{quantity}</span>
    </li>
  );
};

ProfileStatsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

export default ProfileStatsListItem;
