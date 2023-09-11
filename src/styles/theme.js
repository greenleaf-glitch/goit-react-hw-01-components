import { getRandomColor } from '../components/RandomColorFunc';

export const theme = {
  spacing: value => `${value * 4}px`,
  backgroundcolor: value => `${(value = getRandomColor())}`,
  //   colors: {
  //     main: 'white',
  //   },
};
