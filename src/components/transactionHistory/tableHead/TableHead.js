import React from 'react';
import s from './TableHead.module.css';
const TableHead = ({ title }) => {
  return <th className={s.th}>{title}</th>;
};

export default TableHead;
