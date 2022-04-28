import { styled } from '@utils/stitches';

export const HeadlinesContainer = styled('div', {
  margin: '0 0 $14-5 0',
});
export const NewsContainer = styled('div', {
  display: 'grid',
  '@desktop': {
    grid: '1fr / 2fr 1fr',
  },
  gridGap: '32px',
  margin: '$5 0 0',
});

export const NewsAside = styled('div', {
  display: 'grid',
  gridGap: '26px',
});
