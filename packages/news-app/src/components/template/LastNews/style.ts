import { styled } from '@utils/stitches';

export const LastNewsContainer = styled('div', {
  margin: '$12 0 0',
});
export const NewsContainer = styled('div', {
  display: 'grid',
  '@desktop': {
    grid: '1fr / 1fr 1fr',
    gridColumnGap: '18px',
    gridRowGap: '24px',
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
