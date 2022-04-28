import { styled } from '@utils/stitches';

const InputContainer = styled('div', {
  padding: '$3',
  display: 'flex',
  height: '44px',
  justifyContent: 'space-between',
  border: '1px solid $line',
  borderRadius: '$small',
  input: {
    fontSize: '$xs',
    color: '$text',
    letterSpacing: '0.08em',
    fontWeight: '$bold',
    width: '100%',
    height: '18px',
    border: 'none',
    outline: 'none',
    '&::placeholder': {
      fontWeight: '$normal',
      color: '$textAux',
    },
  },
  length: 0,
});

export default InputContainer;
