import React from 'react';
import {
  StatContainer,
  StatHeaderContainer,
  StatItemContainer,
  StatValuesContainer,
  StatValuesLabelsContainer,
} from './Statistics.styled.js';
import { getRandomColor } from './RandomColorFunc.js';

export const Statistics = ({ data, title }) => {
  const backGroundColor = `background-color: ${getRandomColor()}`;
  const dataRenderArr = data.map(item => {
    return (
      <StatItemContainer backgroundcolor={backGroundColor} key={item.id}>
        <span>{item.label}</span>
        <StatValuesContainer>
          <span>{item.percentage}</span>
        </StatValuesContainer>
      </StatItemContainer>
    );
  });

  return (
    <StatContainer>
      {title ? <StatHeaderContainer>{title}</StatHeaderContainer> : null}
      <StatValuesLabelsContainer>{dataRenderArr}</StatValuesLabelsContainer>
    </StatContainer>
  );
};
