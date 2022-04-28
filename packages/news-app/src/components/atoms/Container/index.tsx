import { styled } from '@utils/stitches';

const Container = styled('div', {
  maxWidth: '1280px',
  '@desktop': {
    margin: '$14-5 auto',
  },
  '@mobile': { padding: '0 $7', margin: '$8 auto' },
});

export default Container;
