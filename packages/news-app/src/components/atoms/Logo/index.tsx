import React from 'react';
import { LogoContainer, LogoText, LogoTextBold } from './style';

function Logo() {
  return (
    <LogoContainer href="/">
      <LogoText>
        world
        <LogoTextBold>news</LogoTextBold>
      </LogoText>
    </LogoContainer>

  );
}

export default Logo;
