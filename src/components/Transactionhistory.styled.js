import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 800px;
  border: 2px solid blue;
  color: white;
  background-color: darkgray;
  margin-bottom: 100px;
`;

export const TableHead = styled.thead`
  border: 1px solid blue;
  background-color: navy;
  text-align: center;
  font-size: 25px;
`;

export const TableRowLight = styled.tr`
  background-color: lightblue;
  color: black;
  text-align: center;
  font-size: 20px;
`;

export const TableRowDark = styled.tr`
  background-color: lightgray;
  color: black;
  text-align: center;
  font-size: 20px;
`;

export const TableData = styled.td`
  border-left: 1px solid black;
  border-right: 1px solid black;
`;
