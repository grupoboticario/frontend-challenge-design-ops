import { styled } from '../../../../stitches.config';

const StyledGrid = styled('div', {
  color: '$secondary',
});

export const Grid = ({ children }: { children: any }) => {
  return (
    <>
      <StyledGrid>{children}</StyledGrid>
    </>
  );
};
