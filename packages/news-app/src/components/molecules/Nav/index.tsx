import React from 'react';
import { Logo, Typography } from '@components/atoms';
import {
  Container, LinksContainer, Link, ContainerMobile, CloseButton,
} from './style';

interface INav {
  links: {
    href: string
    text: string
  }[]
  currentPath?: string;
  onCloseNavMobile: () => void;
}
function Nav({
  links,
  currentPath,
  onCloseNavMobile,
}: INav) {
  const renderLinkList = () => links.map((link) => (
    <li key={link.href}>
      <Link active={currentPath === link.href} href={link.href}>
        <Typography type="text" as="span">
          {link.text}
        </Typography>
      </Link>
    </li>
  ));

  return (
    <Container>
      <ContainerMobile>
        <Logo />
        <CloseButton onClick={onCloseNavMobile}>
          <span className="material-symbols-outlined">close</span>
        </CloseButton>
      </ContainerMobile>

      <LinksContainer>
        {renderLinkList()}
      </LinksContainer>
    </Container>
  );
}

export default Nav;
