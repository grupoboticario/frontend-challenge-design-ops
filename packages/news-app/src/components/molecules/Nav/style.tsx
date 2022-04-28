import { styled } from '@utils/stitches';

export const Container = styled('nav', {
  '@desktop': {
    backgroundColor: '$primary',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
  },
  '@mobile': {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    paddingTop: '16px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '&:before': {
      content: '',
      width: '100%',
      maxWidth: '80%',
      height: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '-1',
      backgroundColor: '$primary',

    },
  },
});

export const CloseButton = styled('button', {
  width: '44px',
  height: '44px',
  '@mobile': {
    display: 'flex',
  },
  '@desktop': {
    display: 'none',
  },
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  span: {
    fontSize: '$2xl',
    color: '$white',
  },
});

export const ContainerMobile = styled('div', {
  '@desktop': {
    display: 'none',
  },
  '@mobile': {
    display: 'flex',
  },
  maxWidth: '80%',
  padding: '0 $3 $6',
  justifyContent: 'space-between',
});

export const LinksContainer = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  '@desktop': {
    height: '60px',
    maxWidth: '1280px',
    margin: 'auto',
  },
  '@mobile': {
    maxWidth: '80%',
    flexDirection: 'column',
    li: {
      width: '100%',
    },
  },
});

export const Link = styled('a', {
  padding: '$5',
  color: 'white',
  textDecoration: 'none',
  transition: '0.4s all',
  '@mobile': {
    display: 'flex',
    width: '100%',
    flex: '1',
    padding: '$5 $9',
  },
  '&:hover': {
    backgroundColor: '$menuSecondary',
  },
  variants: {
    active: {
      true: {
        backgroundColor: '$menuPrimary',
      },
    },
  },
});
