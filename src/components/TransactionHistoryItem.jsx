import React from 'react';
import {
  TableData,
  TableRowDark,
  TableRowLight,
} from './Transactionhistory.styled.js';

export const TransactionHistoryItem = ({ type, amount, currency, index }) => {
  return index % 2 === 0 ? (
    <TableRowLight>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRowLight>
  ) : (
    <TableRowDark>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRowDark>
  );
};
