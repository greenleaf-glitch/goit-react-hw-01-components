import { styled } from 'styled-components';

export const StatContainer = styled.section`
  width: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid gray;
  width: fit-content;
  margin-bottom: 100px;
`;

export const StatHeaderContainer = styled.div`
  max-width: 480px;
  height: fit-content;
  border: 2px solid gray;
  color: black;
  background-color: white;
  padding: 20px;
  text-align: center;
`;

export const StatValuesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  color: black;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

export const StatItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  border: 1px solid gray;
  padding: 10px;
  background-color: ${props => props.theme.backgroundcolor};
`;

export const StatValuesLabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
