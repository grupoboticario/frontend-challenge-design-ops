import { styled } from '../../../../stitches.config';

export const StyledWrapper = styled('div', {
  px: '$8',

  '@desktop': {
    px: '0',
    width: '1136px',
    margin: '0 auto',
  },
});

export const Wrapper = ({
  css,
  children,
  role = 'presentation',
}: {
  css?: any;
  children: any;
  role?: string;
}) => {
  return (
    <StyledWrapper role={role} css={css}>
      {children}
    </StyledWrapper>
  );
};
