import { styled } from '../../../stitches.config';

export const StyledHeader = styled('header', {
  backgroundColor: '$theme',
  py: '$4',
  marginBottom: '$15',

  '@desktop': {
    backgroundColor: 'transparent',
  },
});

export const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexFlow: 'row wrap',
});

export const TopMobile = styled('div', {
  position: 'absolute',
  left: 0,
  display: 'flex',
  width: 'calc(70vw - $4)',
  paddingLeft: '$4',

  background: '$theme',

  zIndex: 3,
  '@desktop': {
    display: 'none',
  },
});

export const ActionButton = styled('button', {
  background: 'none',
  border: '0',
  py: '$2',
  px: '$2',

  variants: {
    variant: {
      hamburguer: {},
      closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
      },
    },
  },
});
