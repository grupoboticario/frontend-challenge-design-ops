import { styled } from '../../../stitches.config';
import { Wrapper, Card, Button, Text } from '..';

const List = styled('ul', {
  listStyle: 'none',
});

const ListItem = styled('li', {
  width: '100%',
  marginBottom: '$25',

  '& figure': {
    flexBasis: 100,
    flexShrink: 0,

    width: 272,
    height: 102,
  },

  '@desktop': {
    '& figure': {
      flexBasis: 272,
      width: 272,
      height: 102,
    },
  },
});

export const ResultArticlesList = ({
  articles,
  onClick,
  title,
}: {
  articles: any[];
  title?: string;
  onClick?: any;
}) => {
  return (
    <Wrapper role="feed">
      {title && (
        <Text as="h1" css={{ marginBottom: '$9' }}>
          {title}
        </Text>
      )}
      <List role="list">
        {articles.map((article, i) => (
          <ListItem key={`article-item-${i}`} role="listitem">
            <Card
              src={article.urlToImage}
              url={article.url}
              alt="Here is the image alt description"
              title={article.title}
            />
          </ListItem>
        ))}
      </List>
      <Button onClick={onClick}>Load more articles</Button>
    </Wrapper>
  );
};
