import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { Header, ResultArticlesList, Main } from '../shared/components';
import { brazilTheme, portugalTheme } from '../stitches.config';

import { NewsApi } from '../shared/services';
import { turnToQueryString } from '../shared/helpers';

const Business: NextPage = () => {
  const [headlines, setHeadlines] = useState<any[]>([]);

  useEffect(() => {
    renderHeadlines();
  }, []);

  const renderHeadlines = async () => {
    const response = await NewsApi.getTopHeadlines({
      queryString: turnToQueryString({
        country: 'us',
        pageSize: 3,
      }),
    });

    setHeadlines(response.data.articles);
  };

  return (
    <div>
      <Header />
      <Main>
        <ResultArticlesList title="Business" articles={headlines} />
      </Main>
    </div>
  );
};

export default Business;
