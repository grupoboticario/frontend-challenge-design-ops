import { Container } from '~/components/Container'
import { styled } from '~/styles/stitches.config'

export const Nav = styled('div', {
  backgroundColor: '$primary',
  height: '$15',
})

export const Wrapper = styled(Container, {
  display: 'inline-flex',
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
