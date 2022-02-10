import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { ResultArticlesList } from '../shared/components';

import { NewsApi } from '../shared/services';
import { turnToQueryString } from '../shared/helpers';
import Layout from './_layout';
import { useArticleState } from '../shared/store';

const Health: NextPage = () => {
  const [headlines, setHeadlines] = useState<any[]>([]);
  const [pageSize, setPageSize] = useState<any>(10);

  const { language } = useArticleState();

  useEffect(() => {
    renderHeadlines();
  }, [language, pageSize]);

  const renderHeadlines = async () => {
    const response = await NewsApi.getTopHeadlines({
      queryString: turnToQueryString({
        category: 'health',
        country: language.name,
        pageSize: pageSize,
      }),
    });

    setHeadlines(response.data.articles);
  };

  const loadMoreArticles = () => {
    setPageSize(pageSize + 10);
  };

  return (
    <Layout>
      <ResultArticlesList title="Health" articles={headlines} onClick={loadMoreArticles} />
    </Layout>
  );
};

export default Health;
