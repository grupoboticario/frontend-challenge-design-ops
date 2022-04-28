import { styled } from '@utils/stitches';

export const MainContainer = styled('div', {
  margin: '0 0 $14-5',
});
export const NewsContainer = styled('div', {
  display: 'grid',
  grid: 'auto / 1fr',
  '@desktop': {
    gridRowGap: '36px',
  },
  '@mobile': {
    gridRowGap: '16px',
  },
  margin: '$5 0 0',
});
export const ButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  '@desktop': {
    marginTop: '$4',
  },
  '@mobile': {
    marginTop: '$8',
  },
});
