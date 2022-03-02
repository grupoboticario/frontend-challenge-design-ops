import { Container } from '~/components/Container'
import { styled } from '~/styles/stitches.config'

export const Nav = styled('div', {
  backgroundColor: '$primary',
  width: '70vw',
  height: '100vh',
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  left: '-70vw',
  opacity: 0,
  '-webkit-transition': 'all 0.2s',
  transition: 'all 0.2s',

  '&.show': {
    left: 0,
    opacity: 1,
    '-webkit-transition': 'all 0.8s',
    transition: 'all 0.8s',
  },

  '@bp3': {
    opacity: 1,
    width: '$full',
    height: '$15',
    position: 'relative',
    top: 0,
    left: 0,
  },
})

export const Wrapper = styled(Container, {
  display: 'flex',
  flexDirection: 'column',

  '@bp1': {
    px: 0,
  },

  '@bp3': {
    px: '$36-5',
    flexDirection: 'row',
  },
})

export const WrapperHeader = styled(Wrapper, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: '$21',
  pl: '$5',

  '@bp3': {
    display: 'none',
  },
})

export const WrapperLogo = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const Button = styled('button', {
  background: 'none',
  border: 0,
  width: '$11',
  height: '$11',
})

export const Link = styled('a', {
  textDecoration: 'none',
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$semibold',
  letterSpacing: '$wider',
  lineHeight: '$shorter',
  transition: 'all .2s',
  p: '$5',

  '&:hover': {
    backgroundColor: '$menuSecondary',
  },

  '&.active': {
    backgroundColor: '$menuPrimary',
  },
})
