import { styled } from '../../../stitches.config';

export const Text = styled('p', {});

export const Title = styled('h1', {
  fontSize: 'calc($xl * 2)',

  '@desktop': {
    fontSize: 'calc($xxxl * 2)',
  },
});
