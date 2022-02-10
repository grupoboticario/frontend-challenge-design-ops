/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { Header, Main } from '../shared/components';
import { useArticleState } from '../shared/store';
import { styled, brazilTheme, portugalTheme, usTheme } from '../stitches.config';

const Theme = styled('div', {});

const Layout: NextPage = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const { language } = useArticleState();

  useEffect(() => {
    renderLanguage(language.name);
  }, [language]);

  const renderLanguage = (lang: string) => {
    if (lang === 'br') {
      setSelectedLanguage(brazilTheme.className);
    } else if (lang === 'pt') {
      setSelectedLanguage(portugalTheme.className);
    } else {
      setSelectedLanguage(usTheme.className);
    }
  };

  return (
    <Theme className={selectedLanguage}>
      <Header />
      <Main>{children}</Main>
    </Theme>
  );
};

export default Layout;
