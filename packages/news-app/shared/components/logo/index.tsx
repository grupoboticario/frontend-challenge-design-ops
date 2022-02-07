import { styled } from '../../../stitches.config';
import type * as Stitches from '@stitches/react';

type MyLogoProps = { css?: Stitches.CSS };

const StyledLogo = styled('div', {
  py: '$2',
  px: '$2',
  backgroundColor: '$theme',
  color: '$textMenu',
  fontSize: '$xxl',
  fontFamily: '$rubik',
  fontWeight: '$light',
  borderRadius: '$medium',

  '& strong': {
    fontWeight: '$medium',
  },
});

export const Logo = (props: MyLogoProps) => {
  return (
    <StyledLogo {...props}>
      world<strong>news</strong>
    </StyledLogo>
  );
};
