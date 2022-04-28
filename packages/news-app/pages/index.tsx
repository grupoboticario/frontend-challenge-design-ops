/* eslint-disable react/function-component-definition */
import React from 'react';
import type { NextPage } from 'next';

import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

import { Separator } from '@components/atoms';
import { Headlines, LastNews } from '@components/template';
import fetcher from '@utils/fetcher';
import { News } from '@models/News';
import { Headline } from '@models/Headlines';
import flatNews from '@utils/flatNews';
import { useTheme } from 'next-themes';

const Home: NextPage = () => {
  const { theme } = useTheme();

  const {
    data: headlines,
  } = useSWR<{ total: number, articles: Headline[] }>(
    `/api/news/headlines?country=${theme?.slice(3) || 'br'}`,
    fetcher,
  );

  const getKey = (pageIndex: number) => `/api/news/news?language=${theme?.slice(0, 2) || 'pt'}&page=${pageIndex + 1}&pageSize=10`;
  const {
    data: newsData,
    size,
    setSize,
  } = useSWRInfinite<{ total: number, articles: News[] }>(getKey, fetcher);

  const getMoreNews = () => {
    setSize(size + 1);
  };

  return (
    <>
      {headlines && <Headlines headlines={headlines.articles} />}
      <Separator />
      {newsData
        && (
        <LastNews
          onGetMoreNews={getMoreNews}
          hasNewsToLoad={newsData[0].total > flatNews(newsData).length}
          news={flatNews(newsData)}
        />
        )}
    </>
  );
};

export default Home;
