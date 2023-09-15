import React from 'react';
import { TableContainer, TableHead } from './Transactionhistory.styled';
import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  const tableArr = items.map((item, index) => {
    return (
      <tbody key={item.id}>
        <TransactionHistoryItem
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          index={index}
        ></TransactionHistoryItem>
      </tbody>
    );
  });
  return (
    <TableContainer>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>
      {tableArr}
    </TableContainer>
  );
};
