import { styled } from '../../../stitches.config';

import { Text } from '..';

export const StyledCard = styled('div', {
  display: 'flex',
});

export const StyledImage = styled('figure', {
  marginRight: '$4',

  '& img': {
    borderRadius: '$medium',
  },
});

export const CardContent = styled('div', {});

export const StyledText = styled(Text, {
  display: 'block',
  fontWeight: '$regular',
  fontSize: '$xl',
  color: '$text',

  '@desktop': {
    fontSize: '$xxxl',
  },

  variants: {
    variant: {
      category: {
        color: '$link',
        fontSize: '$lg',
      },
      time: {
        color: '$textAuxiliar',
        fontSize: '$lg',
      },
    },
  },
});

export const StyledLink = styled('a', {
  display: 'flex',
  lineHeight: '$24',
  color: '$link',
  textDecoration: 'none',
  transition: 'all .2s',

  '& svg': {
    marginLeft: '$2',

    '& path': {
      fill: '$link',
    },
  },

  '&:hover': {
    color: '$linkHover',

    '& svg path': {
      fill: '$linkHover',
    },
  },

  '&:visited': {
    color: '$linkVisited',
  },
});
