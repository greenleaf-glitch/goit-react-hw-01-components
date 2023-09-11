import { styled } from 'styled-components';

export const FriendListContainer = styled.section`
  /* min-height: 100vh; */
  width: 300px;
  margin: 0 auto;
  padding: 10px 25px 10px 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid gray;
  margin-bottom: 100px;
  background-color: white;
  background-color: lightslategray;
  row-gap: 10px;
`;

export const FriendListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  border: 2px solid grey;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px;
  background-color: white;
`;

export const OnlineMarker = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border-radius: 50%;
`;
