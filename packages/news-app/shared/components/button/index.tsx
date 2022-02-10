import { styled } from '../../../stitches.config';

export const Button = styled('button', {
  display: 'block',
  margin: '0 auto',
  background: 'transparent',
  padding: '10px 15px',
  border: '1px solid $link',
  borderRadius: '$pill',
  fontSize: '$lg',
  color: '$link',
  cursor: 'pointer',

  '&:hover': {
    border: '1px solid $linkHover',
    color: '$linkHover',
  },
});
