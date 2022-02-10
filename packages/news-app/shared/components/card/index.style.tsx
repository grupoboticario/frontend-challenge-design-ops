import { styled } from '../../../stitches.config';

export const StyledCard = styled('article', {
  display: 'flex',

  variants: {
    variant: {
      highlight: {
        flexDirection: 'column',
        '& figure': {
          width: 304,
          height: 102,

          '@desktop': {
            width: 368,
            height: 120,
          },
        },
      },
      resultLIst: {
        '& h1': {},
      },
    },
  },
});

export const StyledImage = styled('figure', {
  position: 'relative',
  marginRight: '$4',
  overflow: 'hidden',
  borderRadius: '$medium',

  '& img': {
    borderRadius: '$medium',
  },
});

export const CardContent = styled('div', {});

export const StyledText = styled('p', {
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
      title: {
        height: 49,
        overflow: 'hidden',
        '@desktop': {
          height: 68,
        },
      },
    },
  },
});

export const StyledLink = styled('a', {
  display: 'flex',
  lineHeight: '$24',
  color: '$link',
  textDecoration: 'none',
  transition: 'all .5s',

  '& svg': {
    marginLeft: '$2',

    '& path': {
      fill: '$link',
    },
  },

  '&:visited': {
    color: '$linkVisited',
    border: '1px solid red',

    '& svg path': {
      fill: '$linkVisited',
    },
  },

  '&:hover': {
    color: '$linkHover',

    '& svg path': {
      fill: '$linkHover',
    },
  },
});
