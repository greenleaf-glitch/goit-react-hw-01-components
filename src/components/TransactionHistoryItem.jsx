import React from 'react';
import { TableData, TableRowLight } from './Transactionhistory.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TableRowLight>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRowLight>
  );
};

export default TransactionHistoryItem;
