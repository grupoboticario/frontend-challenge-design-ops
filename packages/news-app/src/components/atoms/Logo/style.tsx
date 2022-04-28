import { styled } from '@utils/stitches';

export const LogoContainer = styled('a', {
  backgroundColor: '$primary',
  padding: '$2-5',
  borderRadius: '$large',
  maxWidth: '134px',
  height: '44px',
  textDecoration: 'none',
  position: 'relative',
});
export const LogoText = styled('span', {
  fontSize: '$xxl',
  color: 'white',
  letterSpacing: '0.08em',
  fontFamily: '$rubik',
  fontWeight: 300,

});

export const LogoTextBold = styled('span', {
  fontFamily: '$rubik',
  fontWeight: 500,
});
