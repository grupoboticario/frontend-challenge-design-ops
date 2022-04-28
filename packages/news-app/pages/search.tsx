/* eslint-disable react/function-component-definition */
import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWRInfinite from 'swr/infinite';

import { SearchResult } from '@components/template';
import { News } from '@models/News';
import fetcher from '@utils/fetcher';
import { Typography } from '@components/atoms';
import flatNews from '@utils/flatNews';
import { useTheme } from 'next-themes';

const Search: NextPage = () => {
  const { query } = useRouter();
  const { theme } = useTheme();

  const getKey = (pageIndex: number) => `/api/news/news?language=${theme?.slice(0, 2) || 'br'}&search=${String(query.q).toLowerCase()}&page=${pageIndex + 1}&pageSize=10`;
  const {
    data: newsData,
    size,
    setSize,
  } = useSWRInfinite<{ total: number, articles: News[] }>(getKey, fetcher);

  const getMoreNews = () => {
    setSize(size + 1);
  };

  const hasNews = () => newsData && newsData?.map((article) => article.articles).flat().length > 0;

  return (
    <>
      <Typography
        type="title"
        bold
        as="h2"
      >
        {`${query.q !== '' && hasNews() ? 'Result for' : 'No results for'}: ${query.q}`}

      </Typography>
      {query.q !== '' && newsData && hasNews() ? (
        <SearchResult
          onGetMoreNews={getMoreNews}
          hasNewsToLoad={newsData[0].total > flatNews(newsData).length}
          news={flatNews(newsData)}
        />
      ) : (
        <Typography
          type="text"
          css={{ marginTop: '$9' }}
        >
          Try to search for other terms.
        </Typography>
      )}

    </>
  );
};

export default Search;
