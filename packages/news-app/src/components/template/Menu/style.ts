import { styled } from '@utils/stitches';

export const ContainerMenu = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  '@mobile': {
    padding: '$14-5 $6 0',
  },
});

export const ContainerMenuButton = styled('div', {
  display: 'flex',
});

export const MenuButton = styled('button', {
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
    fontSize: '$xxl',
    color: '$white',
  },
});

export const ContainerPrincipal = styled('div', {
  display: 'grid',
  alignContent: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1280px',
  width: '100%',
  margin: 'auto',
  '@desktop': {
    grid: 'auto / auto 1fr auto',
    gridGap: '10px',
    padding: '$5 0',
  },
  '@mobile': {
    grid: 'auto / auto auto',
    padding: '$1 $4',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: '$primary',
  },
});

export const ContainerSearch = styled('div', {
  width: '100%',
  '@desktop': {
    maxWidth: '470px',
    margin: 'auto',
  },
  '@mobile': {
    display: 'none',
  },
});
export const ContainerSearchMobile = styled('div', {
  width: '100%',
  '@desktop': {
    display: 'none',
  },
  '@mobile': {
    width: '100%',
    margin: '$6 auto',
  },
});

export const SearchButton = styled('button', {
  border: 'none',
  backgroundColor: 'transparent',
  span: {
    fontSize: '$xxl',
  },
  color: '$linkPrimary',
  cursor: 'pointer',
  position: 'relative',
  top: '-2px',
});
