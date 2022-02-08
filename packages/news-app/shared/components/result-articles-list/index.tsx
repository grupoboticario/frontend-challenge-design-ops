import { styled } from '../../../stitches.config';
import { Wrapper, Card, Title } from '..';

const List = styled('ul', {
  listStyle: 'none',
});

const ListItem = styled('li', {
  width: '100%',
  marginBottom: '$25',

  '& figure': {
    flexBasis: 100,
    width: 272,
    height: 102,
  },

  '@desktop': {
    '& figure': {
      flexBasis: 272,
      flexShrink: 0,
      width: 272,
      height: 102,
    },
  },
});

export const ResultArticlesList = ({ title, articles }: { title: string; articles: any[] }) => {
  return (
    <Wrapper>
      <Title as="h1">{title}</Title>
      <List>
        {articles.map((article, i) => (
          <ListItem key={`article-item-${i}`}>
            <Card
              src={article.urlToImage}
              url={article.url}
              alt="Here is the image alt description"
              title={article.title}
            />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
