import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { Header, HighlitedArticles, Line, Main, ArticlesList, Wrapper } from '../shared/components';
import { brazilTheme, portugalTheme } from '../stitches.config';

const Home: NextPage = () => {
  const [language, setLanguage] = useState('us');

  useEffect(() => {
    const selectedLanguage = window.localStorage.getItem('language');
    selectedLanguage && setLanguage(selectedLanguage);
  }, []);

  const changeLanguage = (lang: any) => {
    console.log(lang);
    window.localStorage.setItem('language', lang);
    if (lang === 'br') {
      setLanguage(brazilTheme);
    } else if (lang === 'pt') {
      setLanguage(portugalTheme);
    } else {
      setLanguage('');
    }
  };

  return (
    <div className={language}>
      <Header onClick={() => changeLanguage('br')} />
      <Main>
        <Wrapper>
          <HighlitedArticles title="Headlines" />
          <Line />
          <ArticlesList title="Latest News" />
        </Wrapper>
      </Main>
    </div>
  );
};

export default Home;
