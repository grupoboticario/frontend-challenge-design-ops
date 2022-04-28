import { styled } from '@utils/stitches';

const Link = styled('a', {
  color: '$linkPrimary',
  fontSize: '$x',
  fontWeight: '$semibold',
  letterSpacing: '0.08em',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: '$linkSecondary',
  },
  '&:visited': {
    color: '$linkTertiary',
  },
  span: {
    fontSize: '$xl',
    marginLeft: '$2',
  },
});

export default Link;
