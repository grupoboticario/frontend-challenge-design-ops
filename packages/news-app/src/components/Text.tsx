import { styled } from '~/styles/stitches.config'

export const Paragraph = styled('p', {
  color: '$secondary',
  fontSize: '$lg',
  fontWeight: '$normal',
  letterSpacing: '$wider',
  lineHeight: '$6',
})

export const Title = styled('h2', {
  color: '$black',
  fontSize: '$3xl',
  fontWeight: '$bold',
  letterSpacing: '$wider',
  lineHeight: '$7-5',
  mt: '$9',
  mb: '$4',

  '@bp3': {
    fontSize: '$4xl',
    fontWeight: '$semibold',
    lineHeight: '$13',
    mt: 0,
    mb: '$9',
  },
})
