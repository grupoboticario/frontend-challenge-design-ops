import React from 'react';
import type { NextPage } from 'next';

import {
  Button,
  Header,
  HighlitedArticles,
  Line,
  Main,
  ArticlesList,
  Text,
  Wrapper,
} from '../shared/components';
import { brazilTheme, portugalTheme } from '../stitches.config';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
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
