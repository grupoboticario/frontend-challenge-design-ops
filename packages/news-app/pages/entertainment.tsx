import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { Header, Main, ResultArticlesList } from '../shared/components';

import { NewsApi } from '../shared/services';
import { turnToQueryString } from '../shared/helpers';
import Layout from './_layout';
import { useArticleState } from '../shared/store';

const Entertainment: NextPage = () => {
  const [headlines, setHeadlines] = useState<any[]>([]);
  const { language } = useArticleState();

  useEffect(() => {
    renderHeadlines();
  }, [language]);

  const renderHeadlines = async () => {
    const response = await NewsApi.getTopHeadlines({
      queryString: turnToQueryString({
        category: 'entertainment',
        country: language.name,
        pageSize: 10,
      }),
    });

    setHeadlines(response.data.articles);
  };

  return (
    <Layout>
      <ResultArticlesList title="Entertainment" articles={headlines} />
    </Layout>
  );
};

export default Entertainment;
