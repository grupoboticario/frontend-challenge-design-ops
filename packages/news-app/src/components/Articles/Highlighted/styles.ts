import { styled } from '~/styles/stitches.config'

export const Highlighted = styled('div', {})

export const Title = styled('h2', {
  color: '$black',
  fontSize: '$3xl',
  fontWeight: '$bold',
  letterSpacing: '$wider',
  lineHeight: '$11',
  mt: '$9',
  mb: '$4',

  '@bp3': {
    fontSize: '$4xl',
    lineHeight: '$12',
    mt: 0,
    mb: '$5',
  },
})