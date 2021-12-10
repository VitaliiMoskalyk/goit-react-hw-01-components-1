import React from 'react';
import s from './TableRows.module.css';
const TableRows = ({ type, amount, currency }) => {
  return (
    <tr className={s.tr}>
      <td className={s.type}>{type}</td>
      <td className={s.amount}>{amount}</td>
      <td className={s.currency}>{currency}</td>
    </tr>
  );
};

export default TableRows;
