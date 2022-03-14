import { Container } from '~/components/Container'
import { styled } from '~/styles/stitches.config'

export const Wrapper = styled(Container, {
  p: '$2',
  width: '$full',
  height: '$11',
  border: '1px solid $tertiary',
  borderRadius: '$small',
  display: 'flex',
  alignItems: 'center',

  '& svg': {
    fill: '$linkPrimary',
  },

  '@bp3': {
    width: '$24',
    ml: '$6',
  },
})

export const Input = styled('input', {
  outline: 'none',
  width: '$full',
  border: 'none',
  color: '$secondary',
  fontSize: '$md',
  fontWeight: '$normal',
  letterSpacing: '$wider',
  mr: '$4',
})

export const Button = styled('button', {
  background: 'none',
  border: 0,
  width: '$11',
  height: '$11',
  cursor: 'pointer',
})
