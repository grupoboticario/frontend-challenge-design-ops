import { Container } from '~/components/Container'
import { styled } from '~/styles/stitches.config'

export const Header = styled('header', {
  backgroundColor: '$primary',
  height: '$15',
  display: 'flex',
  alignItems: 'center',

  '@bp3': {
    height: '$20',
    backgroundColor: 'transparent',
  },
})

export const Wrapper = styled(Container, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '$full',
})
