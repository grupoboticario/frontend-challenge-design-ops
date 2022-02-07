import { styled } from '../../../stitches.config';

import { MenuLocation, Form, Wrapper, Flex, Nav, Logo, BurgerButton } from '../';

const StyledHeader = styled('header', {
  backgroundColor: '$theme',
  py: '$4',
  marginBottom: '$15',

  '@desktop': {
    backgroundColor: 'transparent',
  },
});

const StyledFlex = styled(Flex, {
  flexFlow: 'row wrap',
});

const TopMobile = styled('div', {
  position: 'absolute',
  left: 0,
  display: 'flex',
  width: 'calc(70vw - $4)',
  paddingLeft: '$4',

  background: '$theme',

  zIndex: 3,
  '@desktop': {
    display: 'none',
  },
});

const ActionButton = styled('button', {
  background: 'none',
  border: '0',
  py: '$2',
  px: '$2',

  variants: {
    variant: {
      hamburguer: {
        display: '',
      },
      closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
      },
    },
  },
});

export const Header = ({ onClick }: { onClick: any }) => {
  return (
    <StyledHeader>
      <Wrapper>
        <TopMobile>
          <ActionButton variant="hamburguer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white" />
            </svg>
          </ActionButton>
          <Logo css={{ zIndex: 3 }} />
          <ActionButton variant="closeButton">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
              />
            </svg>
          </ActionButton>
        </TopMobile>
        <StyledFlex>
          <Logo
            css={{
              order: 1,
            }}
          />
          <Form
            css={{
              order: 4,
              margin: '30px 0 -70px 0',
              '@desktop': { order: 2, margin: 0 },
            }}
          />
          <MenuLocation css={{ order: 1, '@desktop': { order: 3 } }} onClick={onClick} />
        </StyledFlex>
      </Wrapper>

      <Nav />
    </StyledHeader>
  );
};
