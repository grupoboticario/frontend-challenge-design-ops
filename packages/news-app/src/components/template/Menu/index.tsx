import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { useRouter } from 'next/router';
import { Logo, Input } from '@components/atoms';
import { MenuLanguage, Nav } from '@components/molecules';

import {
  ContainerMenu,
  ContainerMenuButton,
  ContainerPrincipal,
  ContainerSearch,
  ContainerSearchMobile,
  MenuButton,
  SearchButton,
} from './style';

interface IMenu {
  currentPath: string
}
function Menu({
  currentPath,
}: IMenu) {
  const router = useRouter();
  const [valueToSearch, setValueToSearch] = useState('');
  const isMobile = useMediaQuery('screen and (max-width: 767px)');

  const [isMobileMenuOpen, setMobileMenuStatus] = useState(false);

  const links = [{
    href: '/',
    text: 'Home',
  }, {
    href: '/business',
    text: 'Business',
  }, {
    href: '/entertainment',
    text: 'Entertainment',
  }, {
    href: '/health',
    text: 'Health',
  }, {
    href: '/science',
    text: 'Science',
  }, {
    href: '/sports',
    text: 'Sports',
  }, {
    href: '/technology',
    text: 'Technology',
  }];

  useEffect(() => {
    if (!isMobile) {
      setMobileMenuStatus(false);
    }
  }, [isMobile]);

  return (
    <ContainerMenu>
      <ContainerPrincipal>
        <ContainerMenuButton>
          <MenuButton onClick={() => setMobileMenuStatus(true)}>
            <span className="material-symbols-outlined">menu</span>
          </MenuButton>
          <Logo />
        </ContainerMenuButton>

        <ContainerSearch>
          <Input
            placeholder="Search"
            onChange={(event) => {
              setValueToSearch(event.target.value);
            }}
            value={valueToSearch}
            afterInput={(
              <SearchButton onClick={() => router.push(`/search?q=${valueToSearch}`)}>
                <span className="material-symbols-outlined">
                  search
                </span>
              </SearchButton>
            )}
          />
        </ContainerSearch>
        <MenuLanguage />
      </ContainerPrincipal>
      <ContainerSearchMobile>
        <Input
          placeholder="Search"
          onChange={(event) => {
            setValueToSearch(event.target.value);
          }}
          value={valueToSearch}
          afterInput={(
            <SearchButton onClick={() => router.push(`/search?q=${valueToSearch}`)}>
              <span
                className="material-symbols-outlined"
              >
                search
              </span>
            </SearchButton>
          )}
        />
      </ContainerSearchMobile>
      {isMobile && isMobileMenuOpen && (
        <Nav
          onCloseNavMobile={() => setMobileMenuStatus(false)}
          links={links}
          currentPath={currentPath}
        />
      )}
      {!isMobile && (
        <Nav
          onCloseNavMobile={() => setMobileMenuStatus(false)}
          links={links}
          currentPath={currentPath}
        />
      )}
    </ContainerMenu>
  );
}

export default Menu;
