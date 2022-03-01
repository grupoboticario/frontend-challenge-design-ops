import { Container } from '~/components/Container'
import { styled } from '~/styles/stitches.config'

export const Main = styled(Container, {
  px: '$7',
  pt: '$4',
  pb: '$14-5',

  '@bp3': {
    px: '$36-5',
    py: '$14-5',
  },
})
