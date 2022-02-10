import { styled } from '../../../stitches.config';

export const StyledNav = styled('nav', {
  position: 'absolute',
  top: 70,
  width: '70vw',
  height: '100vh',
  backgroundColor: '$theme',
  zIndex: 2,
  transition: 'all .3s',

  '@desktop': {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    marginTop: '$5',
  },
});

export const StyledList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  width: '100%',

  '@desktop': {
    flexDirection: 'row',
  },
});

export const StyledListItem = styled('li', {
  transition: 'all .2s',
});

export const TextMenu = styled('a', {
  display: 'block',
  py: '$5',
  paddingLeft: '$25',
  color: '$textMenu',
  fontSize: '$4',
  textDecoration: 'none',
  transition: 'all .2s',

  '&:hover, &.active': {
    backgroundColor: '$menuHover',
  },

  '&:visited': {
    backgroundColor: '$menuVisited',
  },

  '@desktop': {
    px: '$5',
  },
});
