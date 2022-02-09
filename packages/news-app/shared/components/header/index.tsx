import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MenuLocation, Form, Wrapper, Nav, Logo } from '../';
import { NAV_MENU_BR, NAV_MENU_ENG, NAV_MENU_PT } from '../../constants';
import { useArticleDispatch, useArticleState } from '../../store';
import * as S from './index.style';

export const Header = () => {
  const [translateMenu, setTranslateMenu] = useState<any[]>([]);
  const [hamburguerOpen, setHamburguerOpen] = useState<any>(false);
  const { language } = useArticleState();
  const dispatch = useArticleDispatch();
  const router = useRouter();

  useEffect(() => {
    translateNavMenu();
  }, [language]);

  const translateNavMenu = () => {
    if (language.name === 'br') {
      setTranslateMenu(NAV_MENU_BR);
    } else if (language.name === 'us') {
      setTranslateMenu(NAV_MENU_ENG);
    } else if (language.name === 'pt') {
      setTranslateMenu(NAV_MENU_PT);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputValue = e.target.search.value;

    dispatch({
      type: 'saveSearch',
      value: {
        text: inputValue,
      },
    });

    router.push('/results');
  };

  const clickToOpenMenu = () => {
    setHamburguerOpen(true);
  };

  const clickToCloseMenu = () => {
    setHamburguerOpen(false);
  };

  return (
    <S.StyledHeader>
      <Wrapper>
        <S.TopMobile>
          <S.ActionButton
            variant="hamburguer"
            onClick={clickToOpenMenu}
            css={{
              display: `${hamburguerOpen == true ? 'none' : 'block'}`,
              '@desktop': {},
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white" />
            </svg>
          </S.ActionButton>
          <Logo css={{ zIndex: 3 }} />
          <S.ActionButton
            variant="closeButton"
            onClick={clickToCloseMenu}
            css={{
              display: `${hamburguerOpen == true ? 'block' : 'none'}`,
              '@desktop': {},
            }}
          >
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
            onSubmit={handleSubmit}
            css={{
              order: 4,
              margin: '30px 0 -70px 0',
              '@desktop': { order: 2, margin: 0 },
            }}
          />
          <MenuLocation css={{ order: 1, '@desktop': { order: 3 } }} />
        </S.Flex>
      </Wrapper>

      <Nav
        navItems={translateMenu}
        css={{
          left: `${hamburguerOpen == true ? '0' : '-100%'}`,
          '@desktop': {
            display: 'block',
            left: 0,
          },
        }}
      />
    </S.StyledHeader>
  );
};
