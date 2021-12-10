import React from 'react';
import PropTypes from 'prop-types';
import s from './StatItem.module.css';
const generateRandomRgbValue = (minValue, maxValue) =>
  minValue + Math.round((maxValue - minValue) * Math.random());

const generateRandomRgbColor = (callback, minValue, maxValue) =>
  `rgb(${callback(minValue, maxValue)}, ${callback(
    minValue,
    maxValue,
  )}, ${callback(minValue, maxValue)})`;

const StatItem = ({ label, percentage = 0 }) => {
  return (
    <li
      className={s.item}
      style={{
        backgroundColor: generateRandomRgbColor(
          generateRandomRgbValue,
          150,
          220,
        ),
      }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{Number(percentage)}%</span>
    </li>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;
