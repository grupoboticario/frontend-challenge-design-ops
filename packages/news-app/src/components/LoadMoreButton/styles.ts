import { styled } from '~/styles/stitches.config'

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '$full',
  mt: '$4',
  mb: '$15',

  '@bp3': {
    mt: '$9',
  },
})

export const Button = styled('button', {
  color: '$linkPrimary',
  fontSize: '$lg',
  fontWeight: '$semibold',
  letterSpacing: '$wider',
  lineHeight: '$5',
  background: 'transparent',
  border: '1px solid $linkPrimary',
  borderRadius: '50px',
  cursor: 'pointer',
  py: '$4',
  px: '$6',

  '&:hover': {
    border: '1px solid $linkSecondary',
    color: '$linkSecondary',
  },

  '&:disabled': {
    color: '$tertiary',
    border: '1px solid $tertiary',
  },
})
