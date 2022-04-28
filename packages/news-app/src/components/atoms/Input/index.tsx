import React from 'react';
import InputContainer from './style';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  afterInput?: React.ReactNode;
  beforeInput?: React.ReactNode;
}

function Input({
  afterInput,
  beforeInput,
  ...rest
}: IInput) {
  return (
    <InputContainer>
      {beforeInput}
      <input {...rest} />
      {afterInput}
    </InputContainer>
  );
}

export default Input;
