import { styled } from '~/styles/stitches.config'

export const Logo = styled('div', {
  color: '$white',
  fontSize: '$xl',
  fontFamily: '$rubik',
  fontWeight: '$light',
  borderRadius: '$medium',
  letterSpacing: '$wider',
  lineHeight: '$6',

  '@bp3': {
    p: '$2-5',
    backgroundColor: '$primary',
  },

  '& strong': {
    fontWeight: '$medium',
  },
})
