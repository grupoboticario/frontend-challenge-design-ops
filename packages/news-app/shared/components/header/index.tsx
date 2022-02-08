import { MenuLocation, Form, Wrapper, Nav, Logo } from '../';
import { NAV_MENU } from '../../constants';
import * as S from './index.style';

export const Header = () => {
  return (
    <S.StyledHeader>
      <Wrapper>
        <S.TopMobile>
          <S.ActionButton variant="hamburguer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white" />
            </svg>
          </S.ActionButton>
          <Logo css={{ zIndex: 3 }} />
          <S.ActionButton variant="closeButton">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
              />
            </svg>
          </S.ActionButton>
        </S.TopMobile>
        <S.Flex>
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
          <MenuLocation css={{ order: 1, '@desktop': { order: 3 } }} />
        </S.Flex>
      </Wrapper>

      <Nav navItems={NAV_MENU} />
    </S.StyledHeader>
  );
};
