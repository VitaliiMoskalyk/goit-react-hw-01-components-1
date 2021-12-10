import React from 'react';
import TableHead from './tableHead/TableHead';
import TableRows from './tableRows/TableRows';
import s from './TransactionHistory.module.css';
const TransactionHistory = ({ transactions }) => {
  const headTitles = Object.keys(transactions[0]).filter(item => item !== 'id');
  return (
    <table className={s.table}>
      <thead>
        <tr>
          {headTitles.map(headTitle => (
            <TableHead key={headTitle} title={headTitle} />
          ))}
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableRows key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
