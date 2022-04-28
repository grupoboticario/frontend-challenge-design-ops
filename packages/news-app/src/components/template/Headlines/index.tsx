import React from 'react';
import _ from 'lodash';
import { Typography } from '@components/atoms';
import { Card } from '@components/organisms';
import { Headline } from '@models/Headlines';
import { HeadlinesContainer, NewsAside, NewsContainer } from './style';

interface IHeadlines {
  headlines: Headline[];
}

function Headlines({
  headlines,
}: IHeadlines) {
  const principalHeadline = headlines && headlines[0];
  return (
    <HeadlinesContainer>
      <Typography type="title" bold as="h2">Headlines</Typography>
      <NewsContainer>
        {principalHeadline && (
        <Card
          isHeadline
          imageUrl={principalHeadline?.urlToImage || ''}
          title={
            _.truncate(principalHeadline?.title, {
              length: 100,
            }) || ''
}
          linkUrl={principalHeadline?.url || ''}
        />
        )}
        <NewsAside>
          {headlines && headlines.slice(1).map((headline) => (
            <Card
              key={headline.url}
              imageUrl={headline?.urlToImage || ''}
              title={_.truncate(headline?.title, {
                length: 75,
              }) || ''}
              linkUrl={headline?.url || ''}
            />
          ))}

        </NewsAside>
      </NewsContainer>

    </HeadlinesContainer>
  );
}

export default Headlines;
