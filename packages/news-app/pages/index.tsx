import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Layout from './_layout';

import { HeadlineArticles, Line, ArticlesList, Wrapper } from '../shared/components';

import { NewsApi } from '../shared/services';
import { turnToQueryString } from '../shared/helpers';
import { useArticleState } from '../shared/store';

const Home: NextPage = () => {
  const [headlines, setHeadlines] = useState<any[]>([]);
  const [latestNews, setLatestNews] = useState<any[]>([]);
  const { language } = useArticleState();

  useEffect(() => {
    renderHeadlines();
    renderLatestNews();
  }, [language]);

  const renderHeadlines = async () => {
    const response = await NewsApi.getTopHeadlines({
      queryString: turnToQueryString({
        country: language.name,
        pageSize: 3,
      }),
    });

    setHeadlines(response.data.articles);
  };

  const renderLatestNews = async () => {
    const response = await NewsApi.getEveryNews({
      queryString: turnToQueryString({
        q: 'news',
        language: language.name,
        pageSize: 6,
      }),
    });

    setLatestNews(response.data.articles);
  };

  return (
    <Layout>
      <HeadlineArticles articles={headlines} />
      <Wrapper>
        <Line />
      </Wrapper>
      <ArticlesList articles={latestNews} />
    </Layout>
  );
};

export default Home;
