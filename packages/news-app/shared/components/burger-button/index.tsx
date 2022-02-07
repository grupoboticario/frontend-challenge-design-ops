import { styled } from '../../../stitches.config';

const StyledButton = styled('button', {
  background: 'none',
  border: 0,
});

export const BurgerButton = () => {
  return (
    <StyledButton>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white" />
      </svg>
    </StyledButton>
  );
};
