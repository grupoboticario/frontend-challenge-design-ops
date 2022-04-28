import React from 'react';
import _ from 'lodash';
import { Button, Typography } from '@components/atoms';
import { Card } from '@components/organisms';
import { News } from '@models/News';
import { LastNewsContainer, NewsContainer, ButtonContainer } from './style';

interface ILastNews {
  news: News[]
  onGetMoreNews: () => void
  hasNewsToLoad?: boolean
}
function LastNews({
  news,
  onGetMoreNews,
  hasNewsToLoad = false,
}:ILastNews) {
  return (
    <LastNewsContainer>
      <Typography type="title" bold as="h2">LastNews</Typography>
      <NewsContainer>
        {news.map((notice) => (
          <Card
            key={notice?.url}
            imageUrl={notice?.urlToImage || ''}
            title={_.truncate(notice?.title, {
              length: 64,
            }) || ''}
            linkUrl={notice?.url || ''}
            direction="horizontal"
          />
        ))}
      </NewsContainer>
      {hasNewsToLoad && (
      <ButtonContainer>
        <Button onClick={onGetMoreNews}>Load more articles</Button>
      </ButtonContainer>
      )}
    </LastNewsContainer>
  );
}

export default LastNews;
