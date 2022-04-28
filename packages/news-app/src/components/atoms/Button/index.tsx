import { styled } from '@utils/stitches';

const Button = styled('button', {
  backgroundColor: '$white',
  border: '1px solid $linkPrimary',
  color: '$linkPrimary',
  borderRadius: '$xlarge',
  letterSpacing: '0.08em',
  fontSize: '$x',
  fontWeight: '$semibold',
  padding: '$3-5 $6 $4',
  textAlign: 'center',
  cursor: 'pointer',
  transition: '0.4s all',
  '&:hover': {
    backgroundColor: '$linkPrimary',
    color: '$white',
  },

});

export default Button;
