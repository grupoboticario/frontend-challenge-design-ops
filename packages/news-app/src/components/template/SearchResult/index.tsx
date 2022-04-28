/* eslint-disable no-use-before-define */
import React from 'react';
import _ from 'lodash';
import { formatDistance } from 'date-fns';
import { Button } from '@components/atoms';
import { Card } from '@components/organisms';
import { News } from '@models/News';
import { MainContainer, NewsContainer, ButtonContainer } from './style';

interface ILastNews {
  news: News[]
  onGetMoreNews: () => void
  hasNewsToLoad: boolean;
}
function SearchResult({
  news,
  onGetMoreNews,
  hasNewsToLoad,
}: ILastNews) {
  const formatDate = (date: Date) => formatDistance(
    date,
    new Date(),
    { addSuffix: true },
  );

  return (
    <MainContainer>
      <NewsContainer>
        {news.map((notice) => (
          <Card
            key={notice.url}
            imageUrl={notice?.urlToImage || ''}
            title={_.truncate(notice?.title, {
              length: 64,
            }) || ''}
            linkUrl={notice?.url || ''}
            direction="horizontal"
            date={formatDate(new Date(notice.publishedAt))}
            isSmall
          />
        ))}
      </NewsContainer>
      {hasNewsToLoad && (
      <ButtonContainer>
        <Button onClick={onGetMoreNews}>Load more articles</Button>
      </ButtonContainer>
      )}
    </MainContainer>
  );
}

export default SearchResult;
