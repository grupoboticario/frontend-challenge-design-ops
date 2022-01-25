import { styled } from '@stitches/react';

const Button = styled('button', {
  backgroundColor: 'red',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});
