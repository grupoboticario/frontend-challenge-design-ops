import { styled } from '~/styles/stitches.config'

export const Button = styled('button', {
  background: 'none',
  border: 0,
  ml: '$4',
  display: 'inline-flex',

  '@bp3': {
    display: 'none',
  },
})
