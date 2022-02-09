import { styled } from '../../../stitches.config';

export const StyledForm = styled('form', {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',

  '@desktop': {
    width: 470,
  },
});

export const Fieldset = styled('fieldset', {
  position: 'relative',
  width: '100%',
  border: 0,
});

export const Label = styled('label', {
  display: 'block',
  width: '100%',
});

export const Input = styled('input', {
  width: 'calc(100% - $14 - 2px)',
  padding: '$3 $11 $3 $3',
  border: '1px solid $line',
});

export const ButtonSubmit = styled('button', {
  position: 'absolute',
  top: '50%',
  right: '$3',
  background: 'none',
  border: 0,
  transform: 'translate(0, -50%)',
  cursor: 'pointer',
});
