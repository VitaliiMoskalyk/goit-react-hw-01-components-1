import React from 'react';
import PropTypes from 'prop-types';
import StatItem from '../statItem/StatItem';
import s from './StatList.module.css';

const StatList = ({ data }) => {
  return (
    <ul className={`${s.statList} list`}>
      {data.map(({ id, label, percentage }) => (
        <StatItem key={id ? id : label} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default StatList;
