import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StatisticsList from './statList/StatList';

const Statistics = ({ title, data }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      {data.length ? (
        <StatisticsList data={data} />
      ) : (
        <p className={s.notFound}>No statistics yet</p>
      )}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
