import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
  display: grid;
  min-height: 100vh;
  place-content: center;
  padding: 10px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => props.theme.spacing(100)};
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0 0 4px 8px gray;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 50px;
  padding: 20px;
`;

export const IMGContainer = styled.div`
  height: ${props => props.theme.spacing(50)};
  margin-bottom: 25px;

  /* overflow: hidden; */
`;

export const IMG = styled.img`
  display: block;
  object-fit: cover;
  /* width: 100%; */
  border-radius: 50%;
  border: 1px solid grey;
  overflow: hidden;

  width: 200px;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  justify-content: space-around;
  align-items: center;

  border-top: solid 2px grey;
  background-color: white;
`;

export const StatsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  justify-content: center;
  align-items: center;
  font-weight: normal;
`;

export const StatsItemTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const StatsItemValue = styled.span`
  font-size: normal;
  color: red;
`;
